import React, { useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const [favorite, setFavorite] = useState(false)
  const { countFavClick } = props;
  const favoriteChange = () => {
    setFavorite(!favorite)
    countFavClick(favorite)
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