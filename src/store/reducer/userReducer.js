import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoggedIn: false,
    userInfo: null,
    userPersist: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default userReducer;
