import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
export const setAllPhotos = (photos) => {
  return {
    type: ActionTypes.SET_ALL_PHOTOS,
    payload: photos,
  };
};
export const setAlbum = (photos) => {
  return {
    type: ActionTypes.SET_ALBUMS,
    payload: photos,
  };
};
export const selectedPhoto = (photo) => {
  return {
    type: ActionTypes.SELECTED_PHOTO,
    payload: photo,
  };
};