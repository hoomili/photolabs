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
  const toggleModal = (whichPhoto) => {
    setModal(!modal)
    setModalPhoto(whichPhoto);
  }

  return (
      <div className="App">
        <HomeRoute topics={topics} photos={photos} toggleModal={toggleModal}/>
        <PhotoDetailsModal modal = {modal} modalPhoto = {modalPhoto}/>
      </div>

  );
};


export default App;