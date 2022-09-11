import actionTypes from '../actions/actionTypes';

const initialState = {
    listVideoLimit: [],
    MetaVideoType: {},
    detailVideo: {},
};

export const SiteReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_VIDEO_LIMIT_SUCCESS: {
            const CloneStateVideo = { ...state };

            CloneStateVideo.listVideoLimit = action.data;

            return {
                ...CloneStateVideo,
            };
        }

        case actionTypes.GET_VIDEO_META_DATA_SUCCESS: {
            const CloneStateVideoMeta = { ...state };

            CloneStateVideoMeta.MetaVideoType = action.data;

            return {
                ...CloneStateVideoMeta,
            };
        }

        case actionTypes.GET_ONE_VIDEO_LIMIT_UUID_SUCCESS: {
            const ConeDetailVideo = { ...state };

            ConeDetailVideo.detailVideo = action.data;

            return {
                ...ConeDetailVideo,
            };
        }

        case actionTypes.GET_ONE_VIDEO_LIMIT_UUID_FAILED: {
            return { ...state };
        }

        default:
            return state;
    }
};

export default SiteReducer;
