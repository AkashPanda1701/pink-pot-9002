import {
    AUTH_LOGIN_FAILURE,
    AUTH_LOGIN_REQUEST,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGOUT_FAILURE,
    AUTH_LOGOUT_REQUEST,
    AUTH_LOGOUT_SUCCESS,
    AUTH_REGISTER_FAILURE,
    AUTH_REGISTER_REQUEST,
    AUTH_REGISTER_RESET,
    AUTH_REGISTER_SUCCESS,
  } from "./actionTypes";
  
  const TOKEN = localStorage.getItem("token");
  const initialState = {
    userLogin: { loading: false, error: false , message:''},
    userRegister: { loading: false, error: false, message:'' },
    userLogout: { loading: false, error: false, message:'' },
    data: {
      isAuthenticated: !!TOKEN,
      token: TOKEN,
      user: null,
    },
  };
  
  export default function authReducer(state = initialState, { type, payload }) {
    switch (type) {
      case AUTH_LOGIN_REQUEST:
        return {
          ...state,
          userLogin: { loading: true, error: false },
        };
      case AUTH_LOGIN_SUCCESS:
        localStorage.setItem("token", payload.token);
        return {
          ...state,
          userLogin: { loading: false, error: false ,message:payload.message},
          data: {
            isAuthenticated: true,
            token: payload.token,
            user: payload.user,
          },
        };
      case AUTH_LOGIN_FAILURE:
        return {
          ...state,
          userLogin: { loading: false, error: true ,message:payload.message},
        };
      case AUTH_LOGOUT_REQUEST:
        return {
          ...state,
          userLogout: { loading: true, error: false },
        };
      case AUTH_LOGOUT_SUCCESS:
        localStorage.removeItem("token");
        return {
          ...state,
          userLogout: { loading: false, error: false ,message:payload.message},
          data: {
            isAuthenticated: false,
            token: null,
            user: null,
          },
        };
      case AUTH_LOGOUT_FAILURE:
        return {
          ...state,
          userLogout: { loading: false, error: true ,message:payload.message},
        };
      case AUTH_REGISTER_REQUEST:
        return {
          ...state,
          userRegister: { loading: true, error: false },
        };
      case AUTH_REGISTER_SUCCESS:
        return {
          ...state,
          userRegister: { loading: false, error: false ,message:payload.message},
        };
      case AUTH_REGISTER_FAILURE:
        return {
          ...state,
          userRegister: { loading: false, error: true ,message:payload.message},
        };

        case AUTH_REGISTER_RESET:
          return {
            ...state,
            userRegister: { loading: false, error: false ,message:''},
          };
          
      default:
        return state;
    }
  }
  