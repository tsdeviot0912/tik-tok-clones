import actionTypes from '../actions/actionTypes';

const initialState = {
    listVideoLimit: [],
    MetaVideoType: {},
    detailVideo: {},
    detailOneVideo: {},
    detailUnlikeVideo: {},

    listUserSearch: [],

    listComments: [],
    detailComments: {},
    detailCommentsLike: {},
    detailUnCommentsLike: {},

    listFollow: [],
    listUserSuggestFollow: [],
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

        case actionTypes.GET_LIST_COMMENT_SUCCESS: {
            const CloneStateVideo = { ...state };

            CloneStateVideo.listComments = action.data;

            return {
                ...CloneStateVideo,
            };
        }

        case actionTypes.GET_LIST_COMMENT_FAILED: {
            return { ...state };
        }

        case actionTypes.CREATE_NEW_COMMENT_SUCCESS: {
            const cloneStateDetailComment = { ...state };

            cloneStateDetailComment.detailComments = action.data;

            return {
                ...cloneStateDetailComment,
            };
        }

        case actionTypes.CREATE_NEW_COMMENT_FAILED: {
            return { ...state };
        }

        case actionTypes.LIKE_COMMENT_SUCCESS: {
            const CloneStateLikeComment = { ...state };

            CloneStateLikeComment.detailCommentsLike = action.data;

            return {
                ...CloneStateLikeComment,
            };
        }

        case actionTypes.LIKE_COMMENT_FAILED: {
            return { ...state };
        }

        case actionTypes.UN_LIKE_COMMENT_SUCCESS: {
            const CloneStateUnLikeComment = { ...state };

            CloneStateUnLikeComment.detailUnCommentsLike = action.data;

            return {
                ...CloneStateUnLikeComment,
            };
        }

        case actionTypes.UN_LIKE_COMMENT_FAILED: {
            return { ...state };
        }

        case actionTypes.LIKE_ONE_VIDEO_SUCCESS: {
            const cloneStateLikeOeVideo = { ...state };

            cloneStateLikeOeVideo.detailOneVideo = action.data;

            return {
                ...cloneStateLikeOeVideo,
            };
        }

        case actionTypes.LIKE_ONE_VIDEO_FAILED: {
            return { ...state };
        }

        case actionTypes.SEARCH_USER_SUCCESS: {
            const cloneStateSearchUser = { ...state };

            cloneStateSearchUser.listUserSearch = action.data;

            return {
                ...cloneStateSearchUser,
            };
        }

        case actionTypes.SEARCH_USER_FAILED: {
            return { ...state };
        }

        case actionTypes.UN_LIKE_ONE_VIDEO_SUCCESS: {
            const cloneStateUnLikeVideo = { ...state };

            cloneStateUnLikeVideo.detailOneVideo = action.data;

            return {
                ...cloneStateUnLikeVideo,
            };
        }

        case actionTypes.UN_LIKE_ONE_VIDEO_FAILED: {
            return { ...state };
        }

        case actionTypes.GET_LIST_FOLLOW_SUCCESS: {
            const cloneStateListFollow = { ...state };

            cloneStateListFollow.listFollow = action.data;

            return {
                ...cloneStateListFollow,
            };
        }

        case actionTypes.GET_LIST_FOLLOW_FAILED: {
            return { ...state };
        }

        case actionTypes.GET_LIST_USER_SUGGEST_FOLLOW_SUCCESS: {
            const cloneStateListUserSuggestFollow = { ...state };

            cloneStateListUserSuggestFollow.listUserSuggestFollow = action.data;

            return {
                ...cloneStateListUserSuggestFollow,
            };
        }

        case actionTypes.GET_LIST_USER_SUGGEST_FOLLOW_FAILED: {
            return { ...state };
        }

        default:
            return state;
    }
};

export default SiteReducer;
