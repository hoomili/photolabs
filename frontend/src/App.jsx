import React, { useState } from 'react';


import './App.scss';
import HomeRoute from './routes/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';
import PhotoDetailsModal from './routes/PhotoDetailsModal';


// Note: Rendering a single component to build components in isolation

const App = () => {
  const [modal, setModal] = useState(false);
  const [modalPhoto, setModalPhoto] = useState();
  const [countFav, setCountFav] = useState(0);
  
  let isFavPhotoExist = true;
  
  
  const toggleModal = (whichPhoto) => {
    setModal(!modal)
    setModalPhoto(whichPhoto);
  }

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
      <div className="App">
        <HomeRoute 
        topics={topics} 
        photos={photos} 
        toggleModal={toggleModal} 
        countFavClick= {countFavClick} 
        isFavPhotoExist = {isFavPhotoExist}
        />

        <PhotoDetailsModal 
        modal = {modal} 
        modalPhoto = {modalPhoto} 
        toggleModal={toggleModal} 
        countFavClick= {countFavClick}
        />
      </div>

  );
};


export default App;