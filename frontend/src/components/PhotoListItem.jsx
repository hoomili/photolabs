import React from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  const{ toggleModal }= props;
  const {photo} = props;

  return (
  <li key={photo.id} className='photo-list--item'>
    <PhotoFavButton countFavClick= {props.countFavClick}/>
    <img className='photo-list--image' src={photo.urls.full} alt={photo.user.username} onClick={() => toggleModal(photo)}/>
    {photo.hideUserName ? "" : 
      <div className='photo-list--user-details'>
        <img className='photo-list--user-profile' src={photo.user.profile} alt={photo.user.name} />
        <div className='photo-list--user-info'>
          <div>{photo.user.name}</div>
          <div className='photo-list--user-location'>{photo.location.city}, {photo.location.country}</div>
        </div>
    </div>
    }
  </li>
  )
}
export default PhotoListItem