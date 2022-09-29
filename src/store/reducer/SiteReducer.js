import actionTypes from '../actions/actionTypes';

const initialState = {
    listVideoLimit: [],
    listVideoLimitViewCopy: [],
    MetaVideoType: {},
    detailVideo: {},
    detailOneVideo: {},
    detailUnlikeVideo: {},

    listUserSearch: [],
    nodataSearch: '',
    MetaSearchUser: {},

    listComments: [],
    detailComments: {},
    detailCommentsLike: {},
    detailUnCommentsLike: {},

    listFollow: [],
    listUserSuggestFollow: [],
    metaFollow: {},
    listVideoLimitFollow: [],
    MetaVideoTypeFollow: {},

    detailFollowAndUnFollow: {},

    ListVideoUser: [],
    UserProfile: {},
    listVideoLiked: [],
    CurrentUserProfile: {},

    detailUpdateUser: {},
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

        case actionTypes.GET_VIDEO_LIMIT_VIEW_COPY_SUCCESS: {
            const CloneStateVideoViewCopy = { ...state };

            CloneStateVideoViewCopy.listVideoLimitViewCopy = action.data;

            return {
                ...CloneStateVideoViewCopy,
            };
        }

        case actionTypes.GET_VIDEO_META_DATA_SUCCESS: {
            const CloneStateVideoMeta = { ...state };

            CloneStateVideoMeta.MetaVideoType = action.data;

            return {
                ...CloneStateVideoMeta,
            };
        }

        case actionTypes.GET_LIST_VIDEO_LIMIT_FOLLOW_SUCCESS: {
            const CloneStateVideoFollow = { ...state };

            CloneStateVideoFollow.listVideoLimitFollow = action.data;

            return {
                ...CloneStateVideoFollow,
            };
        }

        case actionTypes.GET_META_VIDEO_LIMIT_FOLLOW_SUCCESS: {
            console.log('check lot vao 2', action.data);
            const CloneStateVideoMetaFollow = { ...state };

            CloneStateVideoMetaFollow.MetaVideoTypeFollow = action.data;

            return {
                ...CloneStateVideoMetaFollow,
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

        case actionTypes.GET_META_FOLLOW_SUCCESS: {
            const cloneStateListUseMeta = { ...state };

            cloneStateListUseMeta.metaFollow = action.data;

            return {
                ...cloneStateListUseMeta,
            };
        }

        case actionTypes.FOLLOW_ONE_ACCOUNT_SUCCESS: {
            const cloneStateFollowAccount = { ...state };

            cloneStateFollowAccount.detailFollowAndUnFollow = action.data;

            return {
                ...cloneStateFollowAccount,
            };
        }

        case actionTypes.FOLLOW_ONE_ACCOUNT_FAILED: {
            return { ...state };
        }

        case actionTypes.GET_USER_VIDEO_SUCCESS: {
            const cloneStateUserVideo = { ...state };

            cloneStateUserVideo.ListVideoUser = action.data;

            return {
                ...cloneStateUserVideo,
            };
        }

        case actionTypes.GET_USER_VIDEO_FAILED: {
            return { ...state };
        }

        case actionTypes.GET_ONE_USER_SUCCESS: {
            const cloneStateUserVideo = { ...state };

            cloneStateUserVideo.UserProfile = action.data;

            return {
                ...cloneStateUserVideo,
            };
        }

        case actionTypes.GET_ONE_USER_FAILED: {
            return { ...state };
        }

        case actionTypes.GET_LIST_VIDEO_LIKED_SUCCESS: {
            const cloneStateListVideoLiked = { ...state };

            cloneStateListVideoLiked.listVideoLiked = action.data;

            return {
                ...cloneStateListVideoLiked,
            };
        }

        case actionTypes.GET_LIST_VIDEO_LIKED_FAILED: {
            return { ...state };
        }

        case actionTypes.GET_CURRENT_USER_SUCCESS: {
            const cloneStateCurrentUser = { ...state };

            cloneStateCurrentUser.CurrentUserProfile = action.data;

            return {
                ...cloneStateCurrentUser,
            };
        }

        case actionTypes.META_SEARCH_USER_SUCCESS: {
            const cloneStateCurrentUserMetaSearch = { ...state };

            cloneStateCurrentUserMetaSearch.MetaSearchUser = action.data;

            return {
                ...cloneStateCurrentUserMetaSearch,
            };
        }

        case actionTypes.GET_CURRENT_USER_FAILED: {
            return { ...state };
        }

        case actionTypes.UPDATE_USER_SUCCESS: {
            const cloneStateUpdateCurrentUser = { ...state };

            cloneStateUpdateCurrentUser.detailUpdateUser = action.data;

            return {
                ...cloneStateUpdateCurrentUser,
            };
        }

        case actionTypes.UPDATE_USER_FAILED: {
            return { ...state };
        }

        case actionTypes.SEARCH_USER_NO_DATA_SUCCESS: {
            const cloneStateSearchNodataUser = { ...state };

            cloneStateSearchNodataUser.nodataSearch = action.data;

            return {
                ...cloneStateSearchNodataUser,
            };
        }

        default:
            return state;
    }
};

export default SiteReducer;
