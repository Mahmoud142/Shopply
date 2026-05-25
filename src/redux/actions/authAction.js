import {
    CREATE_NEW_USER,
    LOGIN_USER,
    GET_CURRENT_USER,
    FOREGT_PASSWORD,
    VERIFY_PASSWORD,
    VERIFY_EMAIL,
    RESET_PASSWORD,
    UPDATE_USER_PROFILE,
    UPDATE_USER_PASSWORD,
} from "../type";
import { useInsertData } from "../../hooks/useInsertData";
import { useGetDataToken } from "../../hooks/useGetData";
import { useUpdateData } from "../../hooks/useUpdateData";
export const createNewUser = (formData) => async (dispatch) => {
    try {
        const response = await useInsertData("/api/auth/register", formData);
        dispatch({
            type: CREATE_NEW_USER,
            payload: response,
            loading: true,
        });
    } catch (err) {
        dispatch({
            type: CREATE_NEW_USER,
            payload: err.response,
        });
    }
};

export const loginUser = (formData) => async (dispatch) => {
    try {
        const response = await useInsertData("/api/auth/login", formData);
        dispatch({
            type: LOGIN_USER,
            payload: response,
            loading: true,
        });
    } catch (err) {
        dispatch({
            type: LOGIN_USER,
            payload: err.response,
        });
    }
};

// get current user details
export const getLoggedUser = () => async (dispatch) => {
    try {
        const response = await useGetDataToken(`/api/users/getMe`);
        dispatch({
            type: GET_CURRENT_USER,
            payload: response,
            loading: true,
        });
    } catch (e) {
        dispatch({
            type: GET_CURRENT_USER,
            payload: e.response,
        });
    }
};

//1-foregt  passwrod
export const forgetPassword = (data) => async (dispatch) => {
    try {
        const response = await useInsertData(
            `/api/auth/forgotPassword`,
            data,
        );
        dispatch({
            type: FOREGT_PASSWORD,
            payload: response,
            loading: true,
        });
    } catch (e) {
        dispatch({
            type: FOREGT_PASSWORD,
            payload: e.response,
        });
    }
};

//2-verify  passwrod
export const verifyPassword = (data) => async (dispatch) => {
    try {
        const response = await useInsertData(
            `/api/auth/verifyResetCode`,
            data,
        );
        dispatch({
            type: VERIFY_PASSWORD,
            payload: response,
            loading: true,
        });
    } catch (e) {
        dispatch({
            type: VERIFY_PASSWORD,
            payload: e.response,
        });
    }
};

// verify registration email
export const verifyEmail = (data) => async (dispatch) => {
    try {
        const response = await useInsertData(
            `/api/auth/verifyEmail`,
            data,
        );
        dispatch({
            type: VERIFY_EMAIL,
            payload: response,
            loading: true,
        });
    } catch (e) {
        dispatch({
            type: VERIFY_EMAIL,
            payload: e.response,
        });
    }
};

// 2-reset  passwrod
export const resetPassword = (data) => async (dispatch) => {
    try {
        const response = await useUpdateData(
            `/api/auth/resetPassword`,
            data,
        );
        dispatch({
            type: RESET_PASSWORD,
            payload: response,
            loading: true,
        });
    } catch (e) {
        dispatch({
            type: RESET_PASSWORD,
            payload: e.response,
        });
    }
};
//update  user data
export const updateUserProfileData = (body) => async (dispatch) => {
    try {
        const response = await useUpdateData(`/api/users/updateMe`, body);
        console.log(response);
        dispatch({
            type: UPDATE_USER_PROFILE,
            payload: response,
            loading: true,
        });
    } catch (e) {
        dispatch({
            type: UPDATE_USER_PROFILE,
            payload: e.response,
        });
    }
};

//update  user password
export const updateUserPassword = (body) => async (dispatch) => {
    try {
        const response = await useUpdateData(
            `/api/users/changeMyPassword`,
            body,
        );
        console.log(response);
        dispatch({
            type: UPDATE_USER_PASSWORD,
            payload: response,
            loading: true,
        });
    } catch (e) {
        dispatch({
            type: UPDATE_USER_PASSWORD,
            payload: e.response,
        });
    }
};
