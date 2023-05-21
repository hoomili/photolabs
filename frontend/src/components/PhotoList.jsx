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
      countFavClick= {props.countFavClick}
      toggleModal={props.toggleModal}
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