import { useState, useReducer } from "react";

const photoArr = [];
const useApplicationData = () => {
  const [modal, setModal] = useState(false);
  const [modalPhoto, setModalPhoto] = useState();
  const [isFavPhotoExist, setIsFavPhotoExist] = useState(false);
  const [updateToFavPhotoIds, setUpdateToFavPhotoIds] = useState(photoArr)


  const onPhotoSelect = (whichPhoto) => {
    setModal(!modal)
    setModalPhoto(whichPhoto);
  }

  const onClosePhotoDetailsModal = () => {
    setModal(!modal)
  }

  const favPhotoId = (newId) => {
    let copyUpdateToFavPhotoIds = [...updateToFavPhotoIds];
    if (copyUpdateToFavPhotoIds.find(item => item === newId)) {
      const index = copyUpdateToFavPhotoIds.indexOf(newId);
      copyUpdateToFavPhotoIds.splice(index,1)
    } else {
      copyUpdateToFavPhotoIds.push(newId)
    }
    setUpdateToFavPhotoIds(copyUpdateToFavPhotoIds)
    if(copyUpdateToFavPhotoIds.length > 0){
      setIsFavPhotoExist(true)
    } else {
      setIsFavPhotoExist(false)
    }
  }
  const allStates = {
    onPhotoSelect,
    favPhotoId,
    onClosePhotoDetailsModal,
    modalPhoto,
    isFavPhotoExist,
    modal,
    updateToFavPhotoIds
  }
  return allStates;

  
}


// export const ACTIONS = {
//   FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
//   FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
//   SET_PHOTO_DATA: 'SET_PHOTO_DATA',
//   SET_TOPIC_DATA: 'SET_TOPIC_DATA',
//   SELECT_PHOTO: 'SELECT_PHOTO',
//   DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
// }

// function reducer(state, action) {
//   switch (action.type) {
//     case FAV_PHOTO_ADDED:
//       return { /* insert logic */ }
//     { /* insert all relevant actions as case statements*/ }  
//     }
//     default:
//       throw new Error(
//         `Tried to reduce with unsupported action type: ${action.type}`
//       );
//   }
export default useApplicationData