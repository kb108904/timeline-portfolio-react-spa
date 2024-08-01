import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import AWS from 'aws-sdk';
import { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION, S3_BUCKET_NAME } from '../../config';
import { TimelineItem } from '../models/timelineItems';
import fetchTextFileContent from '../utils/fetchTextFileContent';

interface FilesContextType {
  items: TimelineItem[];
  selectedItem: TimelineItem | null;
  setSelectedItem: React.Dispatch<React.SetStateAction<TimelineItem | null>>;
  getItemByDate: (date: string | undefined) => TimelineItem | undefined
}

const FilesContext = createContext<FilesContextType | undefined>(undefined);

export const FilesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<TimelineItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<TimelineItem | null>(null);


  useEffect(() => {
    const s3 = new AWS.S3({
      accessKeyId: AWS_ACCESS_KEY_ID,
      secretAccessKey: AWS_SECRET_ACCESS_KEY,
      region: AWS_REGION,
    });

    const params = {
      Bucket: S3_BUCKET_NAME,
    };

    s3.listObjectsV2(params, (err, data) => {
      if (err) {
        console.log('Error', err);
      } else {
        const parsedItems: TimelineItem[] = [];

        data.Contents?.forEach(async (file) => {
          if (file.Key) {
            const parts = file.Key.split('/');
            const pageName = parts[0];
            const date = parts[1];
            const fileName = parts[2];

            const filePath = `https://${S3_BUCKET_NAME}.s3.${AWS_REGION}.amazonaws.com/${file.Key}`;

            let item : TimelineItem | undefined = parsedItems.find((item) => item.date === date && item.pageName === pageName);
            if (!item) {
              item = {
                date,
                imageFiles: [],
                videoFiles: [],
                description: 'Loading...',
                pageName,
              };
              parsedItems.push(item);
            }

            if (fileName.endsWith('.jpg') || fileName.endsWith('.jpeg') || fileName.endsWith('.png')) {
              item.imageFiles.push({ fileName, filePath });
            } else if (fileName.endsWith('.mp4')) {
              item.videoFiles.push({fileName, filePath});
            } else if (fileName.endsWith('.txt')) {
              item.description = file.Key;
            }
          }
        });

        setItems(parsedItems);

        // Fetch text file contents asynchronously
        parsedItems.forEach((item) => {
          if (item.description !== 'Loading...') {
            fetchTextFileContent(s3, S3_BUCKET_NAME, item.description)
              .then((content) => {
                setItems((prevItems) =>
                  prevItems.map((prevItem) =>
                    prevItem.date === item.date && prevItem.pageName === item.pageName
                      ? { ...prevItem, description: content }
                      : prevItem
                  )
                );
              })
              .catch((error) => {
                console.error('Error fetching text file content:', error);
              });
          }
        });
      }
    });
  }, []);

  function getItemByDate(date: string | undefined): TimelineItem | undefined {
    let item = date? items.find((item) => item.date === date):undefined
    if (!item)
      return undefined
    return item
  }

  return (
    <FilesContext.Provider value={{ items, selectedItem, setSelectedItem, getItemByDate }}>
      {children}
    </FilesContext.Provider>
  );
};

export const useFiles = (): FilesContextType => {
  const context = useContext(FilesContext);
  if (!context) {
    throw new Error('useFiles must be used within a FilesProvider');
  }
  return context;
};
