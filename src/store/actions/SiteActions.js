import _ from 'lodash';
import { GetDetailVideoByUuid, GetVideoLimitType } from '../../services';
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

export const getDetailVideoByUuid = (type, page) => {
    return async (dispatch, state) => {
        try {
            const Res = await GetDetailVideoByUuid(type, page);

            if (Res && Res.data && !_.isEmpty(Res.data)) {
                dispatch(getDetailVideoByUuidSuccess(Res.data));
            } else {
                dispatch(getDetailVideoByUuidFailed());
            }
        } catch (error) {
            console.log(error);
            dispatch(getDetailVideoByUuidFailed());
        }
    };
};

export const getDetailVideoByUuidSuccess = (data) => {
    return {
        type: actionTypes.GET_ONE_VIDEO_LIMIT_UUID_SUCCESS,
        data,
    };
};

export const getDetailVideoByUuidFailed = () => {
    return {
        type: actionTypes.GET_ONE_VIDEO_LIMIT_UUID_FAILED,
    };
};
