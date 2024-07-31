import { useParams } from 'react-router-dom';
import { useFiles } from '../../../contexts/FilesContext';
import './_projectPage.css'

export default function ProjectPage(): JSX.Element {
    const { id } = useParams<{ id: string }>()
    const { getItemByDate } = useFiles()

    const selectedItem = getItemByDate(id);

    if (!selectedItem) {
        return <div>No item selected</div>
    }

    return (
        <main className="container mt-4">
            <div className="text-center mb-4">
                <h1>{selectedItem.pageName}</h1>
                <p className="col-12 col-md-8 offset-md-2">{selectedItem.description}</p>
            </div>
            <div className="row justify-content-center">
                {selectedItem.imageFiles.map((image, index) => (
                    <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex align-items-stretch">
                        <div className="card text-center mx-auto d-block w-100">
                            <div className="thumbnail-container">
                                <img src={getThumbnailPath(image.filePath)} alt={image.fileName} className="thumbnail" />
                            </div>                            <div className="card-body">
                                <h5 className="card-title">{getFileName(image.fileName)}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}

function getThumbnailPath(filePath: string): string {
    const path = new URL(filePath);
    const segments = path.pathname.split('/');
    segments.splice(-1, 0, 'thumbnails');
    path.pathname = segments.join('/');
    return path.toString();
  }

function getFileName(fullName: string): string {
    if (fullName.includes('.')) {
        const lastIndex = fullName.lastIndexOf('.')
        return fullName.slice(0, lastIndex)
    }
    return fullName
}