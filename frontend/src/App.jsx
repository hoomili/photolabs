import React, { useEffect, useState } from 'react';
import useApplicationData from './hooks/useApplicationData';


import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);

  const {
    onPhotoSelect,
    favPhotoId,
    onClosePhotoDetailsModal,
    updateToFavPhotoIds,
    modalPhoto,
    isFavPhotoExist,
    modal,
    setId,
    id
  } = useApplicationData();

  // Initial data fetching from the db
  useEffect(() => {
    fetch('/api/photos')
      .then(res => res.json())
      .then(res => setPhotos(res));
    fetch('/api/topics')
      .then(res => res.json())
      .then(res => setTopics(res));
  }, []);

  // updating the photos based on category ID
  useEffect(() => {
    if (id) {
      fetch(`/api/topics/photos/${id}`)
        .then(res => res.json())
        .then(res => setPhotos(res));
    }
  }, [id]);

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        toggleModal={onPhotoSelect}
        isFavPhotoExist={isFavPhotoExist}
        favPhotoId={favPhotoId}
        updateToFavPhotoIds={updateToFavPhotoIds}
        setId={setId}
      />
      {modal ?
        <PhotoDetailsModal
          modal={modal}
          modalPhoto={modalPhoto}
          toggleModal={onClosePhotoDetailsModal}
          favPhotoId={favPhotoId}
          updateToFavPhotoIds={updateToFavPhotoIds}
        /> : null}
    </div>

  );
};


export default App;