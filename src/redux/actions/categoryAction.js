import {
  GET_ALL_CATEGORY,
  GET_ERROR,
  CREATE_CATEGORY,
  GET_ONE_CATEGORY,
} from "../type";
import {useGetData} from "../../hooks/useGetData";
import { useInsertDataWithImage } from "../../hooks/useInsertData";
//get all category
export const getAllCategory = (limit) => async (dispatch) => {
  try {
    const url = (limit && limit !== "undefined") ? `/api/categories?limit=${limit}` : `/api/categories`;
    const response = await useGetData(url);
    if (response && response.data && response.data.categories) {
      const categoriesArray = response.data.categories;
      response.paginationResult = {
        currentPage: Number(response.page) || 1,
        limit: Number(limit) || 6,
        numberOfPages: Math.ceil(categoriesArray.length / (limit || 6)) || 1
      };
      response.data = categoriesArray;
    }

    dispatch({
      type: GET_ALL_CATEGORY,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

//get all category with pagination
export const getAllCategoryPage = (page) => async (dispatch) => {
  try {
    const response = await useGetData(
      `/api/categories?limit=6&page=${page}`
    );
    if (response && response.data && response.data.categories) {
      const categoriesArray = response.data.categories;
      response.paginationResult = {
        currentPage: Number(page) || 1,
        limit: 6,
        numberOfPages: Math.ceil(categoriesArray.length / 6) || 1
      };
      response.data = categoriesArray;
    }
    dispatch({
      type: GET_ALL_CATEGORY,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

//get all category with pagination
export const createCategory = (formData) => async (dispatch) => {
  try {
    const response = await useInsertDataWithImage(
      `/api/categories`,
      formData
    );
    dispatch({
      type: CREATE_CATEGORY,
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

export const getOneCategory = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/categories/${id}`);
    if (response && response.data && response.data.category) {
      response.data = response.data.category;
    }
    dispatch({
      type: GET_ONE_CATEGORY,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};
