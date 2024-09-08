import { Link } from 'react-router-dom';
import './_timeline.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import stringToPseudoUUID from '../../../utils/v3UUIDEncode';
import { TimelineItem } from '../../../models/timelineItems';
import { useFiles } from '../../../contexts/FilesContext';
import getThumbnailPath from '../../../utils/getBucketThumbnail';


export default function Timeline(): JSX.Element {
  // const { items, setSelectedItem, selectedItem } = useFiles();
  const { items, setSelectedItem, selectedItem, isLoading, error } = useFiles();

  function getRandomImage(images: { fileName: string; filePath: string }[]): string {
    if (!Array.isArray(images) || !images.length) {
      return ''
    }
    return images[Math.floor(Math.random() * images.length)].filePath;
  }

  function selectedClass(item: TimelineItem): string{
    let classOutput = ''
    classOutput+=selectedItem?.pageName === item.pageName ? 'marked ' : ''
    classOutput+=selectedItem?.date === item.date ? 'selected ' : ''
    return classOutput
  }

  const handleClick = (item: TimelineItem) => {
    setSelectedItem(item);
  };

  if (isLoading) {
    return (
      <div>Loading...</div>
    )
  } else if( error!=null){
    console.log("Error: "+error.toString())
    return (
      <div>Error.</div>
    )
  } else {
    return (
      <div className="timeline" data-testid="timeline">
        <div className="h-100 timeline-items">
          <div className="timeline-line"></div>
          <div className='fs-3'>Project Portfolio</div>
          {items.map((item) => (
            <Link
              key={stringToPseudoUUID(item.date)}
              to={`/project/${item.date}`}
              className="timeline-item-link"
              onClick={() => { handleClick(item) }}>
              <div key={stringToPseudoUUID(item.date)} className={`${selectedClass(item)} timeline-item mt-1`}>
                <div className="item-content p-3 bg-light">
                  <p className="item-date mb-0 text-center">{item.date}</p>
                </div>
                <div className="item-hover position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-75">
                  <img src={item.thumbnail ? item.thumbnail.filePath : getThumbnailPath(getRandomImage(item.imageFiles))} 
                  alt={`${item.pageName} thumbnail`}
                  className="img-fluid" />
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
}
