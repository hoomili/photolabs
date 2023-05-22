import React, { useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { updateToFavPhotoIds } = props;
  console.log('in the button',props.photoId);

  const [favorite, setFavorite] = useState(() => {
    if(updateToFavPhotoIds && updateToFavPhotoIds.find(item => item === props.photoId)) {
      return true;
    }
    return false
  })
  const favoriteChange = () => {
    setFavorite(!favorite)
    props.favPhotoId(props.photoId)
  }

  return (
    <div className="photo-list--fav-icon">
      <div className="photo-list--fav-icon-svg" onClick={favoriteChange}>
        {favorite && <FavIcon fill={'#ff0000'}/>}
        {!favorite && <FavIcon/>}
      </div>
    </div>
  );
}

export default PhotoFavButton;