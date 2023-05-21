import React, { useState } from 'react';
import { favoriteCounter } from '../Context';

import '../styles/HomeRoute.scss';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';



const HomeRoute = (props) => {
  let isFavPhotoExist = true;
  const [countFav, setCountFav] = useState(0);
  const countFavClick = (isadding) => {
    if(!isadding){
      setCountFav(countFav + 1)
    } else {
      setCountFav(countFav - 1)
    }
  }
  if (countFav === 0) {
    isFavPhotoExist = false;
  } 

  return (
  <div className="home-route">
    <favoriteCounter.Provider value = {{countFavClick}}>
      <TopNavigation isFavPhotoExist = {isFavPhotoExist} />
      <PhotoList />
    </favoriteCounter.Provider>
  </div>
  )
}

export default HomeRoute;