import { ACTIONS } from "./useApplicationData";

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED: //Add favorite photo to the array
      const copyUpdateToFavPhotoIds = [...state.updateToFavPhotoIds];
      copyUpdateToFavPhotoIds.push(action.payload.newId);
      return { ...state, updateToFavPhotoIds: copyUpdateToFavPhotoIds };

    case ACTIONS.FAV_PHOTO_REMOVED: //Remove favorite photo to the array
      const copyUpdateToFavPhotoIds2 = [...state.updateToFavPhotoIds];
      copyUpdateToFavPhotoIds2.splice(action.payload.index, 1);
      return { ...state, updateToFavPhotoIds: copyUpdateToFavPhotoIds2 };

    case ACTIONS.FAV_ICON_NOTIFICATION_ON: // Turns the notification on
      return { ...state, isFavPhotoExist: true };

    case ACTIONS.FAV_ICON_NOTIFICATION_OFF: // Turns the notification off
      return { ...state, isFavPhotoExist: false };

    case ACTIONS.SELECT_PHOTO: // change modal state
      return { ...state, modal: !state.modal };

    case ACTIONS.DISPLAY_PHOTO_DETAILS: // set the data for the modal
      return { ...state, modalPhoto: action.payload.photo };

    case ACTIONS.CHANGE_CATEGORY_ID: // Changes the category ID to activate the new photo data based on that category
      return { ...state, id: action.payload.id };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}
export default reducer;