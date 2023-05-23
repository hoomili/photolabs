import { useReducer } from "react";
import reducer from "./reducer";

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  FAV_ICON_NOTIFICATION_ON: 'FAV_ICON_NOTIFICATION_ON',
  FAV_ICON_NOTIFICATION_OFF: 'FAV_ICON_NOTIFICATION_OFF',
  CHANGE_CATEGORY_ID: 'CHANGE_CATEGORY_ID'
};

//setting initial values for the state
const init = {
  modal: false,
  modalPhoto: null,
  isFavPhotoExist: false,
  updateToFavPhotoIds: [],
  id: null,
};

const useApplicationData = () => {

  const [state, dispatch] = useReducer(reducer, init);

  // activate modal with the selected photo info
  const onPhotoSelect = (whichPhoto) => {
    console.log(whichPhoto);
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: { photo: whichPhoto } });
    dispatch({ type: ACTIONS.SELECT_PHOTO });
  };

  // close the modal with the close button
  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.SELECT_PHOTO });
  };

  // Add or remove the photo id for activating favorite icons around the app
  const favPhotoId = (newId) => {
    const index = state.updateToFavPhotoIds.indexOf(newId);
    if (index !== -1) {
      if (state.updateToFavPhotoIds.length === 1) {
        dispatch({ type: ACTIONS.FAV_ICON_NOTIFICATION_OFF });
      }
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { index } });
    } else {
      dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { newId: newId } });
      dispatch({ type: ACTIONS.FAV_ICON_NOTIFICATION_ON, index });
    }
  };

  // Changes the category ID to activate the new photo data based on that category
  const setId = (id) => {
    dispatch({ type: ACTIONS.CHANGE_CATEGORY_ID, payload: { id: id } });
  };


  // exporting all the required functions and states
  const allStates = {
    onPhotoSelect,
    favPhotoId,
    onClosePhotoDetailsModal,
    setId,
    ...state
  };
  return allStates;
};
export default useApplicationData;