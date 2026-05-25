import {
    GET_ALL_ORDER,
    GET_ONE_ORDER,
    UPDATE_ORDER_PAY,
    UPDATE_ORDER_DELIVER,
} from "../type";
import { useGetDataToken } from "../../hooks/useGetData";
import { useUpdateData } from "../../hooks/useUpdateData";

export const getAllOrders = (page, limit) => async (dispatch) => {
    try {
        if (!localStorage.getItem("token")) {
            dispatch({
                type: GET_ALL_ORDER,
                payload: [],
            });
            return;
        }
        const response = await useGetDataToken(
            `/api/orders?limit=${limit}&page=${page}`,
        );
        if (response && response.data && Array.isArray(response.data)) {
            response.data.forEach(order => {
                if (order && order.cartItems) {
                    order.cartItems.forEach(item => {
                        if (item && item.product && item.product.name && !item.product.title) {
                            item.product.title = item.product.name;
                        }
                    });
                }
            });
        }
        dispatch({
            type: GET_ALL_ORDER,
            payload: response,
        });
    } catch (e) {
        dispatch({
            type: GET_ALL_ORDER,
            payload: e.response,
        });
    }
};

export const getOneOrders = (id) => async (dispatch) => {
    try {
        const response = await useGetDataToken(`/api/orders/${id}`);
        if (response && response.data) {
            const order = response.data;
            if (order && order.cartItems) {
                order.cartItems.forEach(item => {
                    if (item && item.product && item.product.name && !item.product.title) {
                        item.product.title = item.product.name;
                    }
                });
            }
        }
        dispatch({
            type: GET_ONE_ORDER,
            payload: response,
        });
    } catch (e) {
        dispatch({
            type: GET_ONE_ORDER,
            payload: e.response,
        });
    }
};

export const changeOrderPay = (id) => async (dispatch) => {
    try {
        const response = await useUpdateData(`/api/orders/${id}/pay`);

        dispatch({
            type: UPDATE_ORDER_PAY,
            payload: response,
        });
    } catch (e) {
        dispatch({
            type: UPDATE_ORDER_PAY,
            payload: e.response,
        });
    }
};

export const changeOrderDeliver = (id) => async (dispatch) => {
    try {
        const response = await useUpdateData(`/api/orders/${id}/deliver`);

        dispatch({
            type: UPDATE_ORDER_DELIVER,
            payload: response,
        });
    } catch (e) {
        dispatch({
            type: UPDATE_ORDER_DELIVER,
            payload: e.response,
        });
    }
};
