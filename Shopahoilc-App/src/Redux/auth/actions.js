import { AUTH_LOGIN_FAILURE, AUTH_LOGIN_REQUEST, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT_FAILURE, AUTH_LOGOUT_REQUEST, AUTH_LOGOUT_SUCCESS, AUTH_REGISTER_FAILURE, AUTH_REGISTER_REQUEST, AUTH_REGISTER_SUCCESS } from "./actionTypes";
import axios from "axios";


export const authRegister  = (data) => async (dispatch) => {
    try {
        dispatch({ type: AUTH_REGISTER_REQUEST });
    
        const res = await axios.post("https://shopaholic.onrender.com/user/register", data);
        // console.log('res: ', res);
    
        dispatch({ type: AUTH_REGISTER_SUCCESS,
            payload: {
                message: res.data.message,
            },
            });
    } catch (error) {
        dispatch({
        type: AUTH_REGISTER_FAILURE,
        payload: {
            message: error.response.data.message,
        },
        });
    }
    }


export const authLogin = (data) => async (dispatch) => {
    try {
        dispatch({ type: AUTH_LOGIN_REQUEST });
    
        const res = await axios.post("/api/auth/login", data);
    
        dispatch({ type: AUTH_LOGIN_SUCCESS, payload: res.data });
    } catch (error) {
        dispatch({
        type: AUTH_LOGIN_FAILURE,
        });
    }
    }

export const authLogout = () => async (dispatch) => {
    try {
        dispatch({ type: AUTH_LOGOUT_REQUEST });
    
        await axios.post("/api/auth/logout");
    
        dispatch({ type: AUTH_LOGOUT_SUCCESS });
    } catch (error) {
        dispatch({
        type: AUTH_LOGOUT_FAILURE,
        });
    }
    }