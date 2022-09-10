import { GetVideoLimitType } from '../../services';
import actionTypes from './actionTypes';

export const getVideoLimitType = (type, page) => {
    return async (dispatch, state) => {
        try {
            const Res = await GetVideoLimitType(type, page);

            if (Res.data && Res.data.length > 0) {
                dispatch(getVideoLimitTypeSuccess(Res.data));
                dispatch(getVideoLimitMeta(Res.meta.pagination));
            } else {
                dispatch(getVideoLimitTypeFailed());
            }
        } catch (error) {
            console.log(error);
            dispatch(getVideoLimitTypeFailed());
        }
    };
};

export const getVideoLimitTypeSuccess = (data) => {
    return {
        type: actionTypes.GET_VIDEO_LIMIT_SUCCESS,
        data,
    };
};

export const getVideoLimitTypeFailed = () => {
    return {
        type: actionTypes.GET_VIDEO_LIMIT_FAILED,
    };
};

export const getVideoLimitMeta = (data) => {
    return {
        type: actionTypes.GET_VIDEO_META_DATA_SUCCESS,
        data,
    };
};
