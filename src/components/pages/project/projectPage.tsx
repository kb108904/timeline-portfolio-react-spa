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
        <main>
            <div className="container mt-4">
                <div className='d-flex-col'>
                    <h1 className="mb-4">{selectedItem.pageName}</h1>
                    <p className="text-center col-6 offset-3">{selectedItem.description}</p>
                </div>
                <div className="row justify-content-center">
                    {selectedItem.imageFiles.map((image, index) => (
                        <div key={index} className="col-sm-12 col-md-6 col-lg-4 col-xxl-3 mb-4">
                            <div className="text-center">
                                <img src={image.filePath} alt={image.fileName} className=" thumbnail img-thumbnail" />
                                <h5 className="card-title">{getFileName(image.fileName)}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

function getFileName(fullName: string): string {
    if (fullName.includes('.')) {
        const lastIndex = fullName.lastIndexOf('.')
        return fullName.slice(0, lastIndex)
    }
    return fullName
}