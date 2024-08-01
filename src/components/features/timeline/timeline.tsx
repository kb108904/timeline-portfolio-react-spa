import { Link } from 'react-router-dom';
import { useFiles } from '../../../contexts/FilesContext';
import './_timeline.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Timeline(): JSX.Element {
  const { items } = useFiles();

  function getRandomImage(images: { fileName: string; filePath: string }[]): string {
    if (!Array.isArray(images) || !images.length) {
      return ''
    }
    return images[Math.floor(Math.random() * images.length)].filePath;
  }


  return (
    <div className="timeline" data-testid="timeline">


      <div className="h-100 timeline-items">
        <div className="timeline-line"></div>
        <div className='text-center fs-3'>Projects</div>
        {items.map((item, index) => (
          <Link
            key={index}
            to={`/project/${item.date}`}
            className="timeline-item-link">
            <div key={index} className="timeline-item mt-1">
              <div className="item-content p-3 bg-light">
                <p className="item-date mb-0 text-center">{item.date}</p>
              </div>
              <div className="item-hover position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-75">
                <img src={getRandomImage(item.imageFiles)} alt={`${item.pageName} thumbnail`} className="img-fluid" />
                <div className="item-name">
                  {item.pageName}
                </div>
              </div>
              <div className="timeline-connector"></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
