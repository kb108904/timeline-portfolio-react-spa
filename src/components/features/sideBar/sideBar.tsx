import './_sideBar.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import stringToPseudoUUID from '../../../utils/v3UUIDEncode';
import { TimelineItem } from '../../../models/timelineItems';
import { useFiles } from '../../../contexts/FilesContext';
import getThumbnailPath from '../../../utils/getBucketThumbnail';

export default function SideBar(): JSX.Element {
    const { items, setSelectedItem, selectedItem, isLoading, error } = useFiles();
    const [itemImages, setItemImages] = useState<{ [key: string]: string }>({});
  
    function getRandomImage(images: { fileName: string; filePath: string }[]): string {
      if (!Array.isArray(images) || !images.length) {
        return '';
      }
      return images[Math.floor(Math.random() * images.length)].filePath;
    }
  
    useEffect(() => {
      const images: { [key: string]: string } = {};
      items.forEach(item => {
        const image = item.thumbnail?.filePath ?? getRandomImage(item.imageFiles);
        images[stringToPseudoUUID(item.date)] = image;
      });
      setItemImages(images);
    }, [items]);
  
    function selectedClass(item: TimelineItem): string {
      let classOutput = '';
      classOutput += selectedItem?.pageName === item.pageName ? 'marked ' : '';
      classOutput += selectedItem?.date === item.date ? 'selected ' : '';
      return classOutput;
    }
  
    const handleClick = (item: TimelineItem) => {
      setSelectedItem(item);
    };
  
    if (isLoading) {
      return <div>Loading...</div>;
    } else if (error != null) {
      console.log('Error: ' + error.toString());
      return <div>Error.</div>;
    } else {
      return (
        <div className="sidebar" data-testid="sidebar">
          <div className="fs-3 text-center">Project Portfolio</div>
          <div className="row">
            {items.map((item) => (
              <div key={stringToPseudoUUID(item.date)} className="col-md-6 mb-4">
                <Link
                  to={`/project/${item.date}`}
                  className="sidebar-item-link"
                  onClick={() => {
                    handleClick(item);
                  }}
                >
                  <div className={`${selectedClass(item)} sidebar-item square-item mt-1`}>
                    <img
                      src={itemImages[stringToPseudoUUID(item.date)]}
                      alt={`${item.pageName} thumbnail`}
                      className="img-fluid square-image"
                    />
                    <div className="item-content p-3 bg-light text-center">
                      <p className="item-date mb-0">{item.date}</p>
                    </div>
                    <div className="sidebar-connector"></div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      );
    }
}