export  interface TimelineItem {
    date: string;
    imageFiles: ImageFile[];
    description: string;
    pageName: string;
}

interface ImageFile { 
    fileName: string;
    filePath: string;
}