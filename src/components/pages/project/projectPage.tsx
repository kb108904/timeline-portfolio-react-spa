import { useFiles } from '../../../contexts/FilesContext';
import './_projectPage.css'

export default function ProjectPage(): JSX.Element {
    const { selectedItem } = useFiles();

    if (!selectedItem) {
        return <div>No item selected</div>;
    }

    return (
        <main>
            <div className="container mt-4">
                <div className='d-flex-col'>
                    <h1 className="mb-4">{selectedItem.pageName}</h1>
                    <p className="text-center col-6 offset-3">{selectedItem.description}</p>
                </div>
                <div className="row justify-content-md-center">
                    {selectedItem.imageFiles.map((image, index) => (
                        <div key={index} className="col-md-2 mb-4">
                            <div className="card align-items-center">
                                <img src={image.filePath} alt={image.fileName} className="card-img-top thumbnail" />
                                <div className="card-body">
                                    <h5 className="card-title">{getFileName(image.fileName)}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

function getFileName(fullName:string):string {
    if(fullName.includes('.')){
        const lastIndex = fullName.lastIndexOf('.')
        return fullName.slice(0, lastIndex)
}
    return fullName
}