import { useParams } from 'react-router-dom';
import './_projectPage.css';
import stringToPseudoUUID from '../../../utils/v3UUIDEncode';
import { useState } from 'react';
import getThumbnailPath from '../../../utils/getBucketThumbnail';
import MarkdownView from '../../features/MarkdownView/MarkdownView';
import { useFiles } from '../../../contexts/FilesContext';

export default function ProjectPage(): JSX.Element {
    const { id } = useParams<{ id: string }>()
    const { getItemByDate } = useFiles()

    const selectedItem = getItemByDate(id);

    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

    const hasVideo = selectedItem?.videoFiles && selectedItem.videoFiles.length > 0;
    const hasImages = selectedItem?.imageFiles && selectedItem.imageFiles.length > 0;

    function handleImageClick(filePath: string): void {
        setSelectedImage(filePath);
        setShowModal(true);
    }

    function handleCloseModal(): void {
        setShowModal(false);
        setSelectedImage(undefined);
    }

    if (!selectedItem) {
        return <div data-testid='projectPage'>No item selected</div>
    }

    return (

        <div className="parent container bg container-scroll mb-1" data-testid='projectPage'>
            <div className='m-3'>
                <div className="col-12 mx-auto">
                    <h1>{selectedItem.pageName}</h1>
                    <MarkdownView content={selectedItem.description} />
                </div>

                {/* Section for Videos */}
                {hasVideo && (
                    <div className="row mb-3 justify-content-center">
                        {selectedItem.videoFiles.map((video) => (
                            <div key={stringToPseudoUUID(video.fileName)} className={`${selectedItem.videoFiles.length > 1 ? 'col-6' : 'col-12'} mb-1 d-flex align-items-stretch`}>
                                <div className="card text-center mx-auto d-block w-100">
                                    <div className="video-container">
                                        <video controls>
                                            <source src={video.filePath} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{getFileName(video.fileName)}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Section for Images */}
                {hasImages && (
                    <div className="row">
                        {selectedItem.imageFiles.map((image) => (
                            <div key={stringToPseudoUUID(image.fileName)} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex align-items-stretch">
                                <div className="card text-center mx-auto d-block w-100" onClick={() => { handleImageClick(image.filePath) }}>
                                    <div className="thumbnail-container">
                                        <img src={getThumbnailPath(image.filePath)} alt={image.fileName} className="thumbnail card-img-top" />
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">{getFileName(image.fileName)}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                {showModal && (
                    <div className="modal show d-block" tabIndex={-1} role="dialog" onClick={handleCloseModal} style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>
                        <div className="modal-dialog modal-xl modal-dialog-centered" onClick={(e) => { e.stopPropagation(); }} role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">{getFileName(selectedImage)}</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseModal}></button>
                                </div>
                                <div className="modal-body text-center">
                                    {selectedImage && <img src={selectedImage} alt="Full Size" className="img-fluid" />}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

function getFileName(fullName: string | undefined): string {
    let fileNameOutput: string = fullName ?? ''

    if (fileNameOutput.includes('.')) {
        const lastIndex = fileNameOutput.lastIndexOf('.')
        fileNameOutput = fileNameOutput.slice(0, lastIndex)
    }

    if (fileNameOutput.includes('/')) {
        const lastIndex = fileNameOutput.lastIndexOf('/')
        fileNameOutput = fileNameOutput.slice(lastIndex + 1)
    }
    return fileNameOutput
}
