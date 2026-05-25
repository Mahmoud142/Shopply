import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, USER_WISHLIST } from "../type";

import { useInsertData } from "../../hooks/useInsertData";
import useDeleteData from "./../../hooks/useDeleteData";
import { useGetDataToken } from "../../hooks/useGetData";

// Add Product To WishList
export const addProductToWishList = (body) => async (dispatch) => {
    try {
        const response = await useInsertData("/api/wishlist", body);
        dispatch({
            type: ADD_TO_WISHLIST,
            payload: response,
        });
    } catch (e) {
        dispatch({
            type: ADD_TO_WISHLIST,
            payload: e.response,
        });
    }
};

// Delete Product From WishList
export const removeProductFromWishList = (id) => async (dispatch) => {
    try {
        const response = await useDeleteData(`/api/wishlist/${id}`);
        dispatch({
            type: REMOVE_FROM_WISHLIST,
            payload: response,
            loading: true,
        });
    } catch (e) {
        dispatch({
            type: REMOVE_FROM_WISHLIST,
            payload: e.response,
        });
    }
};

// Get User WishList
// Get User WishList
export const getUserWishList = () => async (dispatch) => {
    try {
        if (!localStorage.getItem("token")) {
            dispatch({
                type: USER_WISHLIST,
                payload: [],
            });
            return;
        }
        const response = await useGetDataToken("/api/wishlist");
        let payloadData = response?.data;
        if (payloadData && payloadData.wishlist) {
            payloadData = payloadData.wishlist;
            payloadData.forEach(p => {
                if (p && p.name && !p.title) p.title = p.name;
            });
        }
        dispatch({
            type: USER_WISHLIST,
            payload: payloadData,
        });
    } catch (e) {
        dispatch({
            type: USER_WISHLIST,
            payload: e.response?.data,
        });
    }
};
