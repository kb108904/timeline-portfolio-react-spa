export default function getThumbnailPath(filePath: string): string {
    if (filePath) {
        if (filePath.endsWith("thumb.jpg") || filePath.endsWith("thumb.png")) {
            return filePath;  // Return the original path if it ends with thumb.jpg or thumb.png
        }

        const path = new URL(filePath);
        const segments = path.pathname.split('/');
        segments.splice(-1, 0, 'thumbnails');
        path.pathname = segments.join('/');
        return path.toString();
    }
    
    return '';
}
