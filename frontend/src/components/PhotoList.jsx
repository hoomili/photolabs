import React from 'react';

import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {

  const{ photos }= props;
  const newPhotos = photos.map((photo) => {
    return (
      <PhotoListItem 
      key={photo.id}
      photo = {photo}
      favPhotoId = {props.favPhotoId}
      toggleModal={props.toggleModal}
      updateToFavPhotoIds = {props.updateToFavPhotoIds}
      />
    )
  });
  return(
    <ul className="photo-list" >
    { newPhotos }
    </ul>
  )
}

export default PhotoList