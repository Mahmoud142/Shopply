import { CREATE_SUBCATEGORY, GET_SUB_CATEGORY, GET_ERROR } from "../type";
import { useInsertData } from "../../hooks/useInsertData";
import { useGetData } from "../../hooks/useGetData";
// Create SubCategory Action
export const createSubCategory = (formData) => async (dispatch) => {
  try {
    const response = await useInsertData("/api/subcategories", formData);
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
//get sub category depend in cat id
export const getOneCategory = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/categories/${id}/subcategories`);
    if (response && response.data && response.data.subCategories) {
      response.data = response.data.subCategories;
    }

    dispatch({
      type: GET_SUB_CATEGORY,
      payload: response,
      loading: true,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};
