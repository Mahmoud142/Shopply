import { CREATE_SUBCATEGORY , GET_ERROR} from "../type";
import {useInsertData} from "../../hooks/useInsertData";

// Create SubCategory Action
export const createSubCategory = (formData) => async (dispatch) => {
  try {
    const response = await useInsertData("/api/v1/subcategories", formData);
    dispatch({
      type: CREATE_SUBCATEGORY,
      payload: response,
      loading: true,
    });
  } catch (error) {
    dispatch({
      type: GET_ERROR,
      payload: error.response.data,
    });
  }
};
