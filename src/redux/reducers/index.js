import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer ,photosReducer,albumReducer,selectedPhotoReducer} from "./photosReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  allPhotos:photosReducer,
  album:albumReducer,
  photo:selectedPhotoReducer
});
export default reducers;
