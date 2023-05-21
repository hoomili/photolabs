import React, {useState} from 'react';

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

      <TopNavigation isFavPhotoExist = {isFavPhotoExist} topics={props.topics} />
      <PhotoList countFavClick= {countFavClick} photos={props.photos} toggleModal={props.toggleModal} />

  </div>
  )
}

export default HomeRoute;