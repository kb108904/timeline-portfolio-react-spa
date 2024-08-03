export  interface TimelineItem {
    date: string;
    thumbnail?: ImageFile;
    imageFiles: ImageFile[];
    videoFiles: VideoFile[];
    description: string;
    pageName: string;
}

interface ImageFile { 
    fileName: string;
    filePath: string;
}

interface VideoFile { 
    fileName: string;
    filePath: string;
}