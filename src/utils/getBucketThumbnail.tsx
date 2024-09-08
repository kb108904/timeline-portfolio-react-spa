export default function getThumbnailPath(filePath: string): string {
    if(filePath){
    const path = new URL(filePath);
    const segments = path.pathname.split('/');
    segments.splice(-1, 0, 'thumbnails');
    path.pathname = segments.join('/');
    return path.toString();
    }
    return ''
}