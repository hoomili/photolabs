import React, { useContext } from 'react';

import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';
import { photoLabContext } from '../Context';

const PhotoList = () => {
  const{ photos }= useContext(photoLabContext);
  console.log(photos);

  const newPhotos = photos.map((photo) => {
    return (
      <PhotoListItem 
      key={photo.id} 
      user={photo.user}
      imageSource={photo.urls}
      hideUserName={photo.hideUserName}
      id={photo.id}
      location={photo.location}
      />
    )
  });
  return(
    <ul className="photo-list">
    { newPhotos }
  </ul>
  )
}

export default PhotoList