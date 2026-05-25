import {
  GET_ALL_CATEGORY,
  GET_ERROR,
  CREATE_CATEGORY,
  GET_ONE_CATEGORY,
} from "../type";

const inital = {
  category: [],
  loading: true,
};
const categoryReducer = (state = inital, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORY:
      return {
        ...state,
        category: action.payload,
        loading: false,
      };
    case CREATE_CATEGORY:
      return {
        ...state,
        category: action.payload,
        loading: false,
      };
    case GET_ONE_CATEGORY:
      return {
        ...state,
        oneCategory: action.payload,
        loading: false,
      };
    case GET_ERROR:
      return {
        ...state,
        loading: true,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default categoryReducer;
