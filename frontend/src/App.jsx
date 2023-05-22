import React, { useState } from 'react';
import useApplicationData from './hooks/useApplicationData';


import './App.scss';
import HomeRoute from './routes/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';
import PhotoDetailsModal from './routes/PhotoDetailsModal';



// Note: Rendering a single component to build components in isolation

const App = () => {
  const {
    onPhotoSelect,
    favPhotoId,
    onClosePhotoDetailsModal,
    updateToFavPhotoIds,
    modalPhoto,
    isFavPhotoExist,
    modal
  } = useApplicationData();

  return (
      <div className="App">
        <HomeRoute 
          topics={topics} 
          photos={photos} 
          toggleModal={onPhotoSelect} 
          isFavPhotoExist = {isFavPhotoExist}
          favPhotoId = {favPhotoId}
          updateToFavPhotoIds = {updateToFavPhotoIds}
        />
        {modal ? 
        <PhotoDetailsModal 
          modal = {modal} 
          modalPhoto = {modalPhoto} 
          toggleModal={onClosePhotoDetailsModal} 
          favPhotoId = {favPhotoId}
          updateToFavPhotoIds = {updateToFavPhotoIds}
        /> : null
        }
      </div>

  );
};


export default App;