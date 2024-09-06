import { createContext, useState, useEffect, useContext, ReactNode, useCallback } from 'react';
import { S3Client, ListObjectsV2Command, ListObjectsV2CommandOutput } from "@aws-sdk/client-s3";
import { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION, S3_BUCKET_NAME } from '../../config';
import { TimelineItem } from '../models/timelineItems';
import { fetchTextFileContentV2 } from '../utils/fetchTextFileContent';

interface FilesContextType {
    items: TimelineItem[]
    selectedItem: TimelineItem | null
    setSelectedItem: (item: TimelineItem | null) => void
    getItemByDate: (date: string | undefined) => TimelineItem | undefined
    isLoading: boolean
    error: Error | null
}

const FilesContext = createContext<FilesContextType | undefined>(undefined)

function initializeS3Client() {
    return new S3Client({
        credentials: {
            accessKeyId: AWS_ACCESS_KEY_ID,
            secretAccessKey: AWS_SECRET_ACCESS_KEY,
        },
        region: AWS_REGION,
    })
}

async function fetchS3Objects(s3Client: S3Client) {
    const command = new ListObjectsV2Command({ Bucket: S3_BUCKET_NAME })
    return s3Client.send(command)
}

function useS3Data() {
    const [items, setItems] = useState<TimelineItem[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        async function fetchData() {
            const s3Client = initializeS3Client();
            try {
                const data = await fetchS3Objects(s3Client)
                const parsedItems = parseS3Objects(data)
                const sortedFiles = sortFilesByDate(parsedItems)
                setItems(sortedFiles)
                await fetchTextContents(s3Client, sortedFiles, setItems)
            } catch (err) {
                setError(err instanceof Error ? err : new Error('An unknown error occurred'))
            } finally {
                setIsLoading(false)
            }
        }

        fetchData()
    }, [])

    return { items, isLoading, error, setItems }
}

function parseS3Objects(data: ListObjectsV2CommandOutput): TimelineItem[] {
    const parsedItems: TimelineItem[] = []
    data.Contents?.forEach((file) => {
        if (file.Key) {
            const parts = file.Key.split('/')
            const pageName = parts[0]
            const date = parts[1]
            const fileName = parts[2]

            const filePath = `https://${S3_BUCKET_NAME}.s3.${AWS_REGION}.amazonaws.com/${file.Key}`

            let item: TimelineItem | undefined = parsedItems.find((item) => item.date === date && item.pageName === pageName)
            if (!item) {
                item = {
                    date,
                    imageFiles: [],
                    videoFiles: [],
                    description: 'Loading...',
                    pageName,
                };
                parsedItems.push(item)
            }

            if (fileName.toLowerCase().endsWith('.jpg') || fileName.toLowerCase().endsWith('.jpeg') || fileName.toLowerCase().endsWith('.png')) {
                if (fileName.startsWith('thumb.')) {
                    item.thumbnail = { fileName, filePath }
                } else {
                    item.imageFiles.push({ fileName, filePath })
                }
            } else if (fileName.toLowerCase().endsWith('.mp4')) {
                item.videoFiles.push({ fileName, filePath })
            } else if (fileName.toLowerCase().endsWith('.txt') || fileName.toLowerCase().endsWith('.md')) {
                item.description = file.Key;
            }
        }
    });
    return parsedItems;
}

function sortFilesByDate(files: TimelineItem[]): TimelineItem[] {
    return files.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

async function fetchTextContents(s3Client: S3Client, items: TimelineItem[], setItems: React.Dispatch<React.SetStateAction<TimelineItem[]>>) {
    await Promise.all(items.map(async (item) => {
        if (item.description !== 'Loading...') {
            try {
                const content = await fetchTextFileContentV2(s3Client, item.description);
                setItems((prevItems) =>
                    prevItems.map((prevItem) =>
                        prevItem.date === item.date && prevItem.pageName === item.pageName
                            ? { ...prevItem, description: content }
                            : prevItem
                    )
                );
            } catch (error) {
                console.error('Error fetching text file content:', error)
            }
        }
    }));
}

function FilesProvider({ children }: { children: ReactNode }) {
    const { items, isLoading, error, setItems } = useS3Data()
    const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null)

    const getItemByDate = useCallback((date: string | undefined): TimelineItem | undefined => {
        return date ? items.find((item) => item.date === date) : undefined
    }, [items])

    const contextValue: FilesContextType = {
        items,
        selectedItem,
        setSelectedItem,
        getItemByDate,
        isLoading,
        error
    };

    return (
        <FilesContext.Provider value={contextValue}>
            {children}
        </FilesContext.Provider>
    );
}

function useFiles(): FilesContextType {
    const context = useContext(FilesContext)
    if (!context) {
        throw new Error('useFiles must be used within a FilesProvider')
    }
    return context
}

export { FilesProvider, useFiles }