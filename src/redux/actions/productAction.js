import { useInsertDataWithImage } from "../../hooks/useInsertData";
import {
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  CREATE_PRODUCT,
  GET_PRODUCT_LIKE,
  GET_ALL_PRODUCTS,
  GET_PRODUCT_DETAILS,
  GET_ERROR,
} from "../type";
import useGetData from "./../../hooks/useGetData";
import useDeleteData from "./../../hooks/useDeleteData";
import { useUpdateDataWithImage } from "../../hooks/useUpdateData";

// create product action
export const createProduct = (formData) => async (dispatch) => {
  try {
    const res = await useInsertDataWithImage("/api/v1/products", formData);
    dispatch({
      type: CREATE_PRODUCT,
      payload: res,
      loading: true,
    });
  } catch (error) {
    dispatch({
      type: GET_ERROR,
      payload: "Error  " + error,
    });
  }
};
// get all products action
export const getAllProducts = (limit) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/products?limit=${limit}`);
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: res,
      loading: true,
    });
  } catch (error) {
    dispatch({
      type: GET_ERROR,
      payload: "Error  " + error,
    });
  }
};
export const getAllProductsSearch = (queryString) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/products?${queryString}`);
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: res,
      loading: true,
    });
  } catch (error) {
    dispatch({
      type: GET_ERROR,
      payload: "Error  " + error,
    });
  }
};
// get all products with page number action
export const getAllProductsPage = (page, limit) => async (dispatch) => {
  try {
    const res = await useGetData(
      `/api/v1/products?page=${page}&limit=${limit}`
    );
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: res,
      loading: true,
    });
  } catch (error) {
    dispatch({
      type: GET_ERROR,
      payload: "Error  " + error,
    });
  }
};

// get one product details action
export const getOneProduct = (id) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/products/${id}`);
    dispatch({
      type: GET_PRODUCT_DETAILS,
      payload: res,
      loading: true,
    });
  } catch (error) {
    dispatch({
      type: GET_ERROR,
      payload: "Error  " + error,
    });
  }
};

// get product like action
export const getProductLike = (id) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/products?category=${id}`);
    dispatch({
      type: GET_PRODUCT_LIKE,
      payload: res,
      loading: true,
    });
  } catch (error) {
    dispatch({
      type: GET_ERROR,
      payload: "Error  " + error,
    });
  }
};

// delete product action
export const deleteProduct = (id) => async (dispatch) => {
  try {
    const res = await useDeleteData(`/api/v1/products/${id}`);
    dispatch({
      type: DELETE_PRODUCT,
      payload: res,
      loading: true,
    });
  } catch (error) {
    dispatch({
      type: GET_ERROR,
      payload: "Error  " + error,
    });
  }
};

// update product action
export const updateProduct = (id, formData) => async (dispatch) => {
  try {
    const res = await useUpdateDataWithImage(
      `/api/v1/products/${id}`,
      formData
    );
    dispatch({
      type: UPDATE_PRODUCT,
      payload: res,
      loading: true,
    });
  } catch (error) {
    dispatch({
      type: GET_ERROR,
      payload: "Error  " + error,
    });
  }
};
