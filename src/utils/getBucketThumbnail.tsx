export default function getThumbnailPath(filePath: string): string {
    const path = new URL(filePath);
    const segments = path.pathname.split('/');
    segments.splice(-1, 0, 'thumbnails');
    path.pathname = segments.join('/');
    return path.toString();
}