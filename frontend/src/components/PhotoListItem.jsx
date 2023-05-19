import {useState} from 'react';
import React from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {

  return (
  <li key={props.id} className='photo-list--item' >
    <PhotoFavButton/>
    <img className='photo-list--image' src={props.imageSource.full} alt={props.user.username} />
    {props.hideUserName ? "" : 
      <div className='photo-list--user-details'>
        <img className='photo-list--user-profile' src={props.user.profile} alt={props.user.name} />
        <div className='photo-list--user-info'>
          <div>{props.user.name}</div>
          <div className='photo-list--user-location'>{props.location.city}, {props.location.country}</div>
        </div>
    </div>
    }
  </li>
  )
}
export default PhotoListItem