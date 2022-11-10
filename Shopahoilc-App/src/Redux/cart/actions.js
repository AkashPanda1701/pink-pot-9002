import axios from "axios";
import { ADD_TO_CART_FAILURE, ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_FROM_CART_FAILURE, REMOVE_FROM_CART_REQUEST, REMOVE_FROM_CART_SUCCESS, UPDATE_CART_FAILURE, UPDATE_CART_REQUEST, UPDATE_CART_SUCCESS } from "./actionTypes";

export const getCart = () => async (dispatch) => {
    try {
        dispatch({ type: GET_CART_REQUEST });

        const res = await axios.get("/api/cart", {
            headers: {
                token: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        console.log('res: ', res);

        dispatch({ type: GET_CART_SUCCESS, payload: res.data });
    } catch (error) {
        dispatch({
        type: GET_CART_FAILURE,
        });
    }
    }

export const addProductToCart = (id) => async (dispatch) => {
    try {
        dispatch({ type: ADD_TO_CART_REQUEST });

        const res = await axios.post(`/api/cart`, {
            body : {
                productId: id,
                quantity : 1
            },
            headers: {
                token: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        console.log('res: ', res);

        dispatch({ type: ADD_TO_CART_SUCCESS,
             payload: {
                newCartItem :res.data.newCartItem,
                message : res.data.message} });
           
    } catch (error) {
        dispatch({
        type: ADD_TO_CART_FAILURE,
        payload : {message:error.message}
        });
    }
    }

    export const updateProductInCart = (id, quantity) => async (dispatch) => {
        try {
            dispatch({ type: UPDATE_CART_REQUEST });

            const res = await axios.put(`/api/cart/${id}`, {
                body : {
                    quantity : quantity
                },
                headers: {
                    token: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            console.log('res: ', res);

            dispatch({ type: UPDATE_CART_SUCCESS,

                    payload: {
                        updatedItem :res.data.updatedItem,
                        message : res.data.message} });
        } catch (error) {
            dispatch({
            type: UPDATE_CART_FAILURE,
            payload : {message:error.message}
            });
        }
        }




export const removeProductFromCart = (id) => async (dispatch) => {
    try {
        dispatch({ type: REMOVE_FROM_CART_REQUEST });

        const res = await axios.delete(`/api/cart/${id}`, {
            headers: {
                token: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        console.log('res: ', res);

        dispatch({ type: REMOVE_FROM_CART_SUCCESS,
             payload: {
                id ,
                message : res.data.message} });
           
    } catch (error) {
        dispatch({
        type: REMOVE_FROM_CART_FAILURE,
        payload : {message:error.message}
        });
    }
    }