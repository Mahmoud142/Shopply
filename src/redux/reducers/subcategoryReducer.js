import { CREATE_SUBCATEGORY, GET_ERROR } from "../type";

const initialState = {
  subcategory: {},
  loading: false,
  error: {},
};

const subcategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_SUBCATEGORY:
            return {
                ...state,
                subcategory: action.payload,
                loading: action.loading,
            };
        case GET_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default subcategoryReducer;