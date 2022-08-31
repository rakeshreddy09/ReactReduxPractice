import { ActionTypes } from "../constants/action-types";
const intialState = {
  products: [],
};
const initialphotos = {
  photos: [],
};
export const productsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
export const photosReducer = (state = initialphotos, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ALL_PHOTOS:
      return { ...state, photos: payload };
    default:
      return state;
  }
};
export const albumReducer = (state = initialphotos, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ALBUMS:
      return { ...state, photos: payload };
    default:
      return state;
  }
};
export const selectedPhotoReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_PHOTO:
      return { ...state, ...payload };
    default:
      return state;
  }
};
