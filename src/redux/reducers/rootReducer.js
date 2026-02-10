import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import brandReducer from "./brandReducer";
import subcategoryReducer from "./subcategoryReducer";
import productsReducer from "./productReducer";
import authReducer from "./authReducer";
import reviewReducer from "./reviewReducer";

export default combineReducers({
  allCategory: categoryReducer,
  allBrand: brandReducer,
  allSubCategory: subcategoryReducer,
  allProducts: productsReducer,
  authReducer: authReducer,
  reviewReducer: reviewReducer,
});
