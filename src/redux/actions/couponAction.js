import {
    ADD_COUPON,
    GET_ALL_COUPON,
    EDIT_COUPON,
    GET_ONE_COUPON,
    DELETE_COUPON,
} from "../type";

import { useInsertData } from "../../hooks/useInsertData";
import { useGetDataToken } from "../../hooks/useGetData";
import useDeleteData from "./../../hooks/useDeleteData";
import { useUpdateData } from "../../hooks/useUpdateData";
//add coupon
export const addCoupon = (body) => async (dispatch) => {
    try {
        const response = await useInsertData(`/api/coupons`, body);
        if (response && response.data && response.data.data && response.data.data.coupon) {
            response.data.data = response.data.data.coupon;
        }
        dispatch({
            type: ADD_COUPON,
            payload: response,
        });
    } catch (e) {
        dispatch({
            type: ADD_COUPON,
            payload: e.response,
        });
    }
};
//get all coupon
export const getAllCoupon = () => async (dispatch) => {
    try {
        const response = await useGetDataToken(`/api/coupons`);
        if (response && response.data && response.data.coupons) {
            response.data = response.data.coupons;
        }
        dispatch({
            type: GET_ALL_COUPON,
            payload: response,
        });
    } catch (e) {
        dispatch({
            type: GET_ALL_COUPON,
            payload: e.response,
        });
    }
};

//get one coupon
export const getOneCoupon = (id) => async (dispatch) => {
    try {
        const response = await useGetDataToken(`/api/coupons/${id}`);
        if (response && response.data && response.data.coupon) {
            response.data = response.data.coupon;
        }
        dispatch({
            type: GET_ONE_COUPON,
            payload: response,
        });
    } catch (e) {
        dispatch({
            type: GET_ONE_COUPON,
            payload: e.response,
        });
    }
};

//delete coupon
export const deleteCoupon = (id) => async (dispatch) => {
    try {
        const response = await useDeleteData(`/api/coupons/${id}`);
        dispatch({
            type: DELETE_COUPON,
            payload: response,
        });
    } catch (e) {
        dispatch({
            type: DELETE_COUPON,
            payload: e.response,
        });
    }
};

//edit coupon
export const editCoupon = (id, body) => async (dispatch) => {
    try {
        const response = await useUpdateData(`/api/coupons/${id}`, body);
        if (response && response.data && response.data.data && response.data.data.coupon) {
            response.data.data = response.data.data.coupon;
        }
        dispatch({
            type: EDIT_COUPON,
            payload: response,
        });
    } catch (e) {
        dispatch({
            type: EDIT_COUPON,
            payload: e.response,
        });
    }
};
