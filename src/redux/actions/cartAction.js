import {
    ADD_TO_CART,
    APPLY_COUPON_CART,
    GET_ALL_USER_CART,
    UPDATE_ITEM_FROM_CART,
    DELETE_ITEM_FROM_CART,
    CLEAR_ALL_USER_CART,
} from "../type";
import { useGetDataToken } from "../../hooks/useGetData";
import { useInsertData } from "../../hooks/useInsertData";
import useDeleteData from "./../../hooks/useDeleteData";
import { useUpdateData } from "./../../hooks/useUpdateData";

//add to cart
export const addProductToCart = (body) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/cart`, body);
        dispatch({
            type: ADD_TO_CART,
            payload: response,
        });
    } catch (e) {
        dispatch({
            type: ADD_TO_CART,
            payload: e.response,
        });
    }
};

//get all cart items
export const getAllUserCartItems = () => async (dispatch) => {
    try {
        if (!localStorage.getItem("token")) {
            dispatch({
                type: GET_ALL_USER_CART,
                payload: [],
            });
            return;
        }
        const response = await useGetDataToken(`/api/cart`);
        if (response && response.data && response.data.cart) {
            response.numOfCartItems = response.numberOfItems;
            response.data = response.data.cart;
            if (response.data.products) {
                response.data.products.forEach(item => {
                    if (item && item.product && item.product.name && !item.product.title) {
                        item.product.title = item.product.name;
                    }
                });
            }
        }
        dispatch({
            type: GET_ALL_USER_CART,
            payload: response,
        });
    } catch (e) {
        dispatch({
            type: GET_ALL_USER_CART,
            payload: e.response,
        });
    }
};

//clearAll cart Item
export const clearAllCartItem = () => async (dispatch) => {
    try {
        const response = await useDeleteData(`/api/cart`);
        dispatch({
            type: CLEAR_ALL_USER_CART,
            payload: response,
        });
    } catch (e) {
        dispatch({
            type: CLEAR_ALL_USER_CART,
            payload: e.response,
        });
    }
};
//delete cart Item
export const deleteCartItem = (id) => async (dispatch) => {
    try {
        const response = await useDeleteData(`/api/cart/${id}`);
        if (response && response.data && response.data.cart) {
            response.numOfCartItems = response.numberOfItems;
            response.data = response.data.cart;
            if (response.data.products) {
                response.data.products.forEach(item => {
                    if (item && item.product && item.product.name && !item.product.title) {
                        item.product.title = item.product.name;
                    }
                });
            }
        }

        dispatch({
            type: DELETE_ITEM_FROM_CART,
            payload: response,
        });
    } catch (e) {
        dispatch({
            type: DELETE_ITEM_FROM_CART,
            payload: e.response,
        });
    }
};

//update cart Item
export const updateCartItem = (id, body) => async (dispatch) => {
    try {
        const response = await useUpdateData(`/api/cart/${id}`, body);
        if (response && response.data && response.data.data && response.data.data.cart) {
            response.data.numOfCartItems = response.data.numberOfItems;
            response.data.data = response.data.data.cart;
            if (response.data.data.products) {
                response.data.data.products.forEach(item => {
                    if (item && item.product && item.product.name && !item.product.title) {
                        item.product.title = item.product.name;
                    }
                });
            }
        }
        dispatch({
            type: UPDATE_ITEM_FROM_CART,
            payload: response,
        });
    } catch (e) {
        dispatch({
            type: UPDATE_ITEM_FROM_CART,
            payload: e.response,
        });
    }
};

//update cart Item
export const applyCouponCart = (body) => async (dispatch) => {
    try {
        const response = await useUpdateData(`/api/cart/applyCoupon`, body);
        if (response && response.data && response.data.data && response.data.data.cart) {
            response.data.numOfCartItems = response.data.numberOfItems;
            response.data.data = response.data.data.cart;
            if (response.data.data.products) {
                response.data.data.products.forEach(item => {
                    if (item && item.product && item.product.name && !item.product.title) {
                        item.product.title = item.product.name;
                    }
                });
            }
        }
        dispatch({
            type: APPLY_COUPON_CART,
            payload: response,
        });
    } catch (e) {
        dispatch({
            type: APPLY_COUPON_CART,
            payload: e.response,
        });
    }
};
