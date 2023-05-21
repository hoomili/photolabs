import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import '../styles/PhotoListItem.scss';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';

const PhotoDetailsModal = (props) => {
  const { toggleModal } = props;
  return (
    <>
      {props.modal &&
        <div className='photo-details-modal'>
          <button className='photo-details-modal--close-button' onClick={toggleModal}>
            <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_428_287)">
                <path d="M14.0625 3.9375L3.9375 14.0625" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14.0625 14.0625L3.9375 3.9375" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_428_287">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
          <div className='photo-details-modal-main-image'>
            <div>
              <PhotoFavButton countFavClick={props.countFavClick} />
              <img src={props.modalPhoto.urls.regular} alt={props.modalPhoto.id} className='photo-details-modal--image' />
            </div>
            <div className='photo-details-modal--photographer-details'>
              <img className='photo-list--user-profile' src={props.modalPhoto.user.profile} alt={props.modalPhoto.user.name} />
              <div className='photo-list--user-info'>
                <div>{props.modalPhoto.user.name}</div>
                <div className='photo-list--user-location'>{props.modalPhoto.location.city}, {props.modalPhoto.location.country}</div>
              </div>
            </div>
          </div>
          <div className='photo-details-modal--header'>Related Images</div>
          <div className='photo-details-modal--images'>
            <PhotoList photos={Object.values(props.modalPhoto.similar_photos)} countFavClick={props.countFavClick} />
          </div>
        </div>
      }
    </>
  );
};

export default PhotoDetailsModal;