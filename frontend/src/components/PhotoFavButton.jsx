import React, { useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { updateToFavPhotoIds } = props;
  let favorite = false;
  if (updateToFavPhotoIds && updateToFavPhotoIds.find(item => item === props.photoId)) {
    favorite = true;
  }

  const favoriteChange = () => {
    favorite = (!favorite);
    props.favPhotoId(props.photoId);
  };

  return (
    <div className="photo-list--fav-icon">
      <div className="photo-list--fav-icon-svg" onClick={favoriteChange}>
        {favorite && <FavIcon fill={'#ff0000'} />}
        {!favorite && <FavIcon />}
      </div>
    </div>
  );
}

export default PhotoFavButton;