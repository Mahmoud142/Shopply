import { useInsertDataWithImage } from "../../hooks/useInsertData";
import {
    DELETE_PRODUCT,
    UPDATE_PRODUCT,
    CREATE_PRODUCT,
    GET_PRODUCT_LIKE,
    GET_ALL_PRODUCTS,
    GET_PRODUCT_DETAILS,
    GET_ALL_PRODUCTS_SEARCH,
    GET_ALL_PRODUCTS_BY_CATEGORY,
    GET_ALL_PRODUCTS_BY_BRAND,
    GET_ERROR,
} from "../type";
import { useGetData } from "./../../hooks/useGetData";
import useDeleteData from "./../../hooks/useDeleteData";
import { useUpdateDataWithImage } from "../../hooks/useUpdateData";

// create product action
export const createProduct = (formData) => async (dispatch) => {
    try {
        const res = await useInsertDataWithImage("/api/products", formData);
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
        const url = (limit && limit !== "undefined") ? `/api/products?limit=${limit}` : `/api/products`;
        const res = await useGetData(url);
        if (res && res.data && res.data.products) {
            res.data.products.forEach(p => {
                if (p && p.name && !p.title) p.title = p.name;
            });
            res.paginationResult = res.pagination || {
                currentPage: 1,
                limit: Number(limit) || 20,
                numberOfPages: Math.ceil(res.data.products.length / (limit || 20)) || 1
            };
            res.data = res.data.products;
        }
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
        const res = await useGetData(`/api/products?${queryString}`);
        if (res && res.data && res.data.products) {
            res.data.products.forEach(p => {
                if (p && p.name && !p.title) p.title = p.name;
            });
            res.paginationResult = res.pagination || {
                currentPage: 1,
                limit: 20,
                numberOfPages: Math.ceil(res.data.products.length / 20) || 1
            };
            res.data = res.data.products;
        }
        dispatch({
            type: GET_ALL_PRODUCTS_SEARCH,
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
            `/api/products?page=${page}&limit=${limit}`,
        );
        if (res && res.data && res.data.products) {
            res.data.products.forEach(p => {
                if (p && p.name && !p.title) p.title = p.name;
            });
            res.paginationResult = res.pagination || {
                currentPage: Number(page) || 1,
                limit: Number(limit) || 20,
                numberOfPages: Math.ceil(res.data.products.length / (limit || 20)) || 1
            };
            res.data = res.data.products;
        }
        dispatch({
            type: GET_ALL_PRODUCTS_SEARCH,
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
        const res = await useGetData(`/api/products/${id}`);
        if (res && res.data && res.data.product) {
            if (res.data.product.name && !res.data.product.title) {
                res.data.product.title = res.data.product.name;
            }
            res.data = res.data.product;
        }
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
        const res = await useGetData(`/api/products?category=${id}`);
        if (res && res.data && res.data.products) {
            res.data.products.forEach(p => {
                if (p && p.name && !p.title) p.title = p.name;
            });
            res.paginationResult = res.pagination || {
                currentPage: 1,
                limit: 20,
                numberOfPages: Math.ceil(res.data.products.length / 20) || 1
            };
            res.data = res.data.products;
        }
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
        const res = await useDeleteData(`/api/products/${id}`);
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
            `/api/products/${id}`,
            formData,
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

//get all products by category
export const getAllProductsByCategory =
    (page, limit, categoryID) => async (dispatch) => {
        try {
            const response = await useGetData(
                `/api/products?limit=${limit}&category=${categoryID}&page=${page}`,
            );
            if (response && response.data && response.data.products) {
                response.data.products.forEach(p => {
                    if (p && p.name && !p.title) p.title = p.name;
                });
                response.paginationResult = response.pagination || {
                    currentPage: Number(page) || 1,
                    limit: Number(limit) || 20,
                    numberOfPages: Math.ceil(response.data.products.length / (limit || 20)) || 1
                };
                response.data = response.data.products;
            }
            console.log(
                "response in action getAllProductsByCategory :",
                response,
            );

            dispatch({
                type: GET_ALL_PRODUCTS_BY_CATEGORY,
                payload: response,
                loading: true,
            });
        } catch (e) {
            dispatch({
                type: GET_ALL_PRODUCTS_BY_CATEGORY,
                payload: e.response,
            });
        }
    };

//get all products by brand
export const getAllProductsByBrand =
    (page, limit, brandID) => async (dispatch) => {
        try {
            const response = await useGetData(
                `/api/products?limit=${limit}&brand=${brandID}&page=${page}`,
            );
            if (response && response.data && response.data.products) {
                response.data.products.forEach(p => {
                    if (p && p.name && !p.title) p.title = p.name;
                });
                response.paginationResult = response.pagination || {
                    currentPage: Number(page) || 1,
                    limit: Number(limit) || 20,
                    numberOfPages: Math.ceil(response.data.products.length / (limit || 20)) || 1
                };
                response.data = response.data.products;
            }
            dispatch({
                type: GET_ALL_PRODUCTS_BY_BRAND,
                payload: response,
                loading: true,
            });
        } catch (e) {
            dispatch({
                type: GET_ALL_PRODUCTS_BY_BRAND,
                payload: e.response,
            });
        }
    };
