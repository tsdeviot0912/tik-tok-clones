import Cookies from 'universal-cookie';

import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoggedIn: false,
    userInfo: null,
    userPersist: null,
    token: null,
};

const cookies = new Cookies();

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.USER_LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                userInfo: action.userInfo,
                // userPersist: action.userInfo,
            };
        case actionTypes.UPDATE_USER_SUCCESS:
            return {
                ...state,
                userInfo: action.data,
            };
        case actionTypes.USER_LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                userInfo: null,
            };
        case actionTypes.PROCESS_LOGOUT:
            cookies.set('token', null, { path: '/' });
            return {
                ...state,
                isLoggedIn: false,
                userInfo: null,
                token: null,
            };

        case actionTypes.LOGIN_SAVE_COOKIE_SUCCESS: {
            cookies.set('token', action.token, { path: '/' });
            return {
                ...state,
                token: action.token,
            };
        }

        default:
            return state;
    }
};

export default appReducer;
