import './_sideBar.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import stringToPseudoUUID from '../../../utils/v3UUIDEncode';
import { TimelineItem } from '../../../models/timelineItems';
import { useFiles } from '../../../contexts/FilesContext';
import getThumbnailPath from '../../../utils/getBucketThumbnail';

export default function SideBar(): JSX.Element {
  const { items, setSelectedItem, selectedItem, isLoading, error } = useFiles();
  const [itemImages, setItemImages] = useState<Record<string, string>>({});

  function getRandomImage(images: { fileName: string; filePath: string }[]): string {
    if (!Array.isArray(images) || !images.length) {
      return '';
    }
    return images[Math.floor(Math.random() * images.length)].filePath;
  }

  useEffect(() => {
    const images: Record<string, string> = {};
    items.forEach(item => {
      const image = item.thumbnail?.filePath ?? getRandomImage(item.imageFiles);
      images[stringToPseudoUUID(item.date)] = image;
    });
    setItemImages(images);
  }, [items]);

  function selectedClass(item: TimelineItem): string {
    return selectedItem?.pageName === item.pageName ? 'active' : '';
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
      <div className="sidebar menu-bg cust-scrollbar overflow-auto" data-testid="sidebar">
        <h4 className="text-center mb-4">Project Portfolio</h4>
        <div className="list-group drop-shadow">
          {items.map((item) => (
            <Link
              key={stringToPseudoUUID(item.date)}
              to={`/project/${item.date}`}
              className={`list-group-item list-group-item-action ${selectedClass(item)}`}
              onClick={() => { handleClick(item); }}
            >
              <div className="d-flex align-items-center">
                <div className="sidebar-item-icon me-3">
                  <img
                    src={getThumbnailPath(itemImages[stringToPseudoUUID(item.date)])}
                    alt={`${item.pageName} thumbnail`}
                    className="img-fluid rounded"
                  />
                </div>
                <span className="sidebar-item-text">{item.pageName}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}