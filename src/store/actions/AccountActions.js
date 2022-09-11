import actionTypes from './actionTypes';

import { GetSuggestedAccountLimitAction } from '../../services';

import _ from 'lodash';

export const getSuggestedAccountLimitAction = (limit, perPage) => {
    return async (dispatch, state) => {
        try {
            const Res = await GetSuggestedAccountLimitAction(limit, perPage);

            const { data } = Res;

            if (data && data.length > 0) {
                dispatch(getSuggestedAccountLimitActionSuccess(data));
                dispatch(getSuggestedAccountPage(Res.meta));
            } else {
                dispatch(getSuggestedAccountLimitActionFailed());
            }
        } catch (error) {
            console.log(error);
            dispatch(getSuggestedAccountLimitActionFailed());
        }
    };
};

export const getSuggestedAccountLimitActionSuccess = (data) => {
    return {
        type: actionTypes.SUGGESTED_ACCOUNTS_SUCCESS,
        data,
    };
};

export const getSuggestedAccountLimitActionFailed = () => {
    return {
        type: actionTypes.SUGGESTED_ACCOUNTS_FAILED,
    };
};

export const getSuggestedAccountPage = (data) => {
    return {
        type: actionTypes.SUGGESTED_ACCOUNTS_FAGE_SUCCESS,
        data,
    };
};
