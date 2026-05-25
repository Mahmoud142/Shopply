import { GET_ALL_BRAND, GET_ERROR, CREATE_BRAND, GET_ONE_BRAND } from "../type";
import {useGetData} from "../../hooks/useGetData";
import { useInsertDataWithImage } from "../../hooks/useInsertData";
//get all brand
export const getAllBrand = (limit) => async (dispatch) => {
  try {
    const url = (limit && limit !== "undefined") ? `/api/brands?limit=${limit}` : `/api/brands`;
    const response = await useGetData(url);
    if (response && response.data && response.data.brands) {
      const brandsArray = response.data.brands;
      response.paginationResult = {
        currentPage: Number(response.page) || 1,
        limit: Number(limit) || 6,
        numberOfPages: Math.ceil(brandsArray.length / (limit || 6)) || 1
      };
      response.data = brandsArray;
    }

    dispatch({
      type: GET_ALL_BRAND,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

//get all brand with pagination
export const getAllBrandPage = (page) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/brands?limit=6&page=${page}`);
    if (response && response.data && response.data.brands) {
      const brandsArray = response.data.brands;
      response.paginationResult = {
        currentPage: Number(page) || 1,
        limit: 6,
        numberOfPages: Math.ceil(brandsArray.length / 6) || 1
      };
      response.data = brandsArray;
    }
    dispatch({
      type: GET_ALL_BRAND,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

//get one Brand
export const getOneBrand = (id) => async (dispatch) => {
  try {
    const response = await useGetData(`/api/brands/${id}`);

    dispatch({
      type: GET_ONE_BRAND,
      payload: response,
    });
  } catch (e) {
    dispatch({
      type: GET_ERROR,
      payload: "Error " + e,
    });
  }
};

//get all brand with pagination
export const createBrand = (formData) => async (dispatch) => {
  try {
    const response = await useInsertDataWithImage(`/api/brands`, formData);
    dispatch({
      type: CREATE_BRAND,
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
