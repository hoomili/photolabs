import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {
  const [favorite, setFavorite] = useState('off')
  const favoriteChange = () => {
    setFavorite(favorite === "on" ? "off" : "on")
    console.log(favorite);
  }
  return (
    <div className="photo-list--fav-icon">
      <div className="photo-list--fav-icon-svg" onClick={favoriteChange}>
        {favorite === "on" && <FavIcon fill={'#ff0000'}/>}
        {favorite === "off" && <FavIcon/>}
      </div>
    </div>
  );
}

export default PhotoFavButton;