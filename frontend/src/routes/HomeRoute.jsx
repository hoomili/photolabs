import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigation from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';



const HomeRoute = (props) => {

  return (
  <div className="home-route">

      <TopNavigation isFavPhotoExist = {props.isFavPhotoExist} topics={props.topics} />
      <PhotoList 
        photos={props.photos} 
        toggleModal={props.toggleModal} 
        favPhotoId = {props.favPhotoId} 
        updateToFavPhotoIds = {props.updateToFavPhotoIds}
      />

  </div>
  )
}

export default HomeRoute;