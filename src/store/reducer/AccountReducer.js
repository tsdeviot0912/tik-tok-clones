import actionTypes from '../actions/actionTypes';

const initialState = {
    listUserSuggest: [],
    MetaAccount: {},
};

const AccountReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SUGGESTED_ACCOUNTS_SUCCESS: {
            const CloneStateSuggest = { ...state };

            CloneStateSuggest.listUserSuggest = action.data;

            return {
                ...CloneStateSuggest,
            };
        }

        case actionTypes.SUGGESTED_ACCOUNTS_FAGE_SUCCESS: {
            const CloneStateSuggestPage = { ...state };

            CloneStateSuggestPage.MetaAccount = action.data;

            return {
                ...CloneStateSuggestPage,
            };
        }

        case actionTypes.SUGGESTED_ACCOUNTS_FAILED: {
            return state;
        }

        default:
            return state;
    }
};

export default AccountReducer;
