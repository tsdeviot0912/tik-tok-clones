import _ from 'lodash';
import { GetDetailVideoByUuid, GetSuggestedAccountLimitAction, GetVideoLimitType } from '../../services';
import {
    CreateNewComment,
    DeleteComment,
    FollowingAccount,
    GetCurrentUser,
    GetListComment,
    GetListFollowings,
    GetListVideoLiked,
    GetOneUser,
    GetUserVideo,
    LikeComment,
    LikeOneVideo,
    SearchUserAndVideo,
    UnFollowingAccount,
    UnLikeComment,
    UnLikeOneVideo,
    UpdateUser,
} from '../../services/AppServices';
import actionType from './actionTypes';
import actionTypes from './actionTypes';

export const getVideoLimitType = (type, page, token, view) => {
    return async (dispatch, state) => {
        try {
            const Res = await GetVideoLimitType(type, page, token);

            if (Res.data && Res.data.length > 0) {
                if (type === 'for-you') {
                    dispatch(getVideoLimitTypeSuccess(Res.data));
                    dispatch(getVideoLimitMeta(Res.meta.pagination));
                }

                if (type === 'following') {
                    dispatch(getVideoLimitTypeSuccessFollow(Res.data));
                    dispatch(getVideoLimitMetaFollow(Res.meta.pagination));
                }

                if (view === 'view-2') {
                    dispatch(getVideoLimitViewCopyTypeSuccess(Res.data));
                }
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

export const getVideoLimitViewCopyTypeSuccess = (data) => {
    return {
        type: actionTypes.GET_VIDEO_LIMIT_VIEW_COPY_SUCCESS,
        data,
    };
};

export const getVideoLimitTypeSuccessFollow = (data) => {
    return {
        type: actionTypes.GET_LIST_VIDEO_LIMIT_FOLLOW_SUCCESS,
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

export const getVideoLimitMetaFollow = (data) => {
    return {
        type: actionTypes.GET_META_VIDEO_LIMIT_FOLLOW_SUCCESS,
        data,
    };
};

export const getDetailVideoByUuid = (uuid, token) => {
    return async (dispatch, state) => {
        try {
            const Res = await GetDetailVideoByUuid(uuid, token);

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

export const getListComment = (uuid, token) => {
    return async (dispatch, state) => {
        try {
            const Res = await GetListComment(uuid, token);

            if (Res && Res.data) {
                dispatch(getListCommentSuccess(Res.data));
            } else {
                dispatch(getListCommentFailed());
            }
        } catch (error) {
            console.log(error);
            dispatch(getListCommentFailed());
        }
    };
};

export const getListCommentSuccess = (data) => {
    return {
        type: actionTypes.GET_LIST_COMMENT_SUCCESS,
        data,
    };
};

export const getListCommentFailed = () => {
    return {
        type: actionTypes.GET_LIST_COMMENT_FAILED,
    };
};

export const createNewComment = (data, uuid, token) => {
    return async (dispatch, state) => {
        try {
            const Res = await CreateNewComment(data, uuid, token);

            if (Res && Res.data && !_.isEmpty(Res.data)) {
                dispatch(createNewCommentSuccess(Res.data));
            } else {
                dispatch(createNewCommentFailed());
            }
        } catch (error) {
            console.log(error);
            dispatch(createNewCommentFailed());
        }
    };
};

export const createNewCommentSuccess = (data) => {
    return {
        type: actionTypes.CREATE_NEW_COMMENT_SUCCESS,
        data,
    };
};

export const createNewCommentFailed = () => {
    return {
        type: actionTypes.CREATE_NEW_COMMENT_FAILED,
    };
};

export const deleteComment = (id, token, uuid) => {
    return async (dispatch, state) => {
        try {
            await DeleteComment(id, token);

            setTimeout(() => {
                dispatch(getListComment(uuid, token));
            }, 300);
        } catch (error) {
            console.log(error);
        }
    };
};

export const likeComment = (id, token, uuid) => {
    return async (dispatch, state) => {
        try {
            const Res = await LikeComment(id, token);

            if (Res && Res.data) {
                dispatch(likeCommentSuccess(Res.data));
            }

            // setTimeout(() => {
            dispatch(getListComment(uuid, token));
            // }, 500);
        } catch (error) {
            console.log(error);
            dispatch(likeCommentFailed());
        }
    };
};

export const likeCommentSuccess = (data) => {
    return {
        type: actionTypes.LIKE_COMMENT_SUCCESS,
        data,
    };
};

export const likeCommentFailed = () => {
    return {
        type: actionTypes.LIKE_COMMENT_FAILED,
    };
};

export const unLikeComment = (id, token, uuid) => {
    return async (dispatch, state) => {
        try {
            const Res = await UnLikeComment(id, token);

            if (Res && Res.data) {
                dispatch(unLikeCommentSuccess(Res.data));
            }

            // setTimeout(() => {
            dispatch(getListComment(uuid, token));
            // }, 500);
        } catch (error) {
            console.log(error);
            dispatch(unLikeCommentFailed());
        }
    };
};

export const unLikeCommentSuccess = (data) => {
    return {
        type: actionTypes.UN_LIKE_COMMENT_SUCCESS,
        data,
    };
};

export const unLikeCommentFailed = () => {
    return {
        type: actionTypes.UN_LIKE_COMMENT_FAILED,
    };
};

export const likeOneVideo = (uuid, token, isDetail) => {
    return async (dispatch, state) => {
        try {
            const Res = await LikeOneVideo(uuid, token);

            if (Res && Res.data) {
                dispatch(likeOneVideoSuccess(Res.data));
            }

            if (isDetail) {
                dispatch(getDetailVideoByUuid(uuid, token));
            }
        } catch (error) {
            console.log(error);
            dispatch(likeOneVideoFailed());
        }
    };
};

export const likeOneVideoSuccess = (data) => {
    return {
        type: actionTypes.LIKE_ONE_VIDEO_SUCCESS,
        data,
    };
};

export const likeOneVideoFailed = () => {
    return {
        type: actionTypes.LIKE_ONE_VIDEO_FAILED,
    };
};

export const unLikeOneVideo = (uuid, token, isDetail) => {
    return async (dispatch, state) => {
        try {
            const Res = await UnLikeOneVideo(uuid, token);

            if (Res && Res.data) {
                dispatch(unLikeOneVideoSuccess(Res.data));
            }
            if (isDetail) {
                dispatch(getDetailVideoByUuid(uuid, token));
            }
        } catch (error) {
            console.log(error);
            dispatch(unLikeOneVideoFailed());
        }
    };
};

export const unLikeOneVideoSuccess = (data) => {
    return {
        type: actionTypes.UN_LIKE_ONE_VIDEO_SUCCESS,
        data,
    };
};

export const unLikeOneVideoFailed = () => {
    return {
        type: actionTypes.UN_LIKE_ONE_VIDEO_FAILED,
    };
};

export const searchUserAndVideo = (q, type, page) => {
    return async (dispatch, state) => {
        try {
            const Res = await SearchUserAndVideo(q, type, page);

            if (Res && Res.data.length > 0) {
                dispatch(searchUserAndVideoSuccess(Res.data));
            } else {
                dispatch(searchUserAndVideoNodataSuccess('Xin lỗi chúng tôi không tìm thấy kết quả tìm kiếm nào ?'));
            }

            if (Res && Res.meta && Res.meta.pagination) {
                dispatch(searchUserAndVideoMetaSuccess(Res.meta.pagination));
            }
        } catch (error) {
            console.log(error);
            dispatch(searchUserAndVideoFailed());
        }
    };
};

export const searchUserAndVideoSuccess = (data) => {
    return {
        type: actionTypes.SEARCH_USER_SUCCESS,
        data,
    };
};

export const searchUserAndVideoNodataSuccess = (data) => {
    return {
        type: actionTypes.SEARCH_USER_NO_DATA_SUCCESS,
        data,
    };
};

export const searchUserAndVideoMetaSuccess = (data) => {
    return {
        type: actionTypes.META_SEARCH_USER_SUCCESS,
        data,
    };
};

export const searchUserAndVideoFailed = () => {
    return {
        type: actionTypes.SEARCH_USER_FAILED,
    };
};

export const getListFollowings = (page, token) => {
    return async (dispatch, state) => {
        try {
            const Res = await GetListFollowings(page, token);

            if (Res && Res.data && Res.data.length > 0) {
                dispatch(getListFollowingsSuccess(Res.data));
                dispatch(getMetaFollowList(Res.meta));
            }
        } catch (error) {
            dispatch(getListFollowingsFailed());
        }
    };
};

export const getListFollowingsSuccess = (data) => {
    return {
        type: actionTypes.GET_LIST_FOLLOW_SUCCESS,
        data,
    };
};

export const getListFollowingsFailed = () => {
    return {
        type: actionTypes.GET_LIST_FOLLOW_FAILED,
    };
};

export const getMetaFollowList = (data) => {
    return {
        type: actionType.GET_META_FOLLOW_SUCCESS,
        data,
    };
};

export const getSuggestedAccountLimitActionSite = (limit, per_page, Token) => {
    return async (dispatch, state) => {
        try {
            const Res = await GetSuggestedAccountLimitAction(limit, per_page, Token);

            if (Res && Res.data && Res.data.length > 0) {
                dispatch(getSuggestedAccountLimitActionSiteSuccess(Res.data));
                dispatch(getSuggestedAccountSitePage(Res.meta));
            }
        } catch (error) {
            dispatch(getSuggestedAccountLimitActionSiteFailed());
        }
    };
};

export const getSuggestedAccountLimitActionSiteSuccess = (data) => {
    return {
        type: actionTypes.GET_LIST_USER_SUGGEST_FOLLOW_SUCCESS,
        data,
    };
};

export const getSuggestedAccountLimitActionSiteFailed = () => {
    return {
        type: actionTypes.GET_LIST_USER_SUGGEST_FOLLOW_FAILED,
    };
};

export const getSuggestedAccountSitePage = (data) => {
    return {
        type: actionTypes.SUGGESTED_ACCOUNTS_FAGE_SUCCESS,
        data,
    };
};

export const followingAccount = (id, token) => {
    return async (dispatch, state) => {
        try {
            const Res = await FollowingAccount(id, token);

            if (Res && Res.data && !_.isEmpty(Res.data)) {
                dispatch(followingAccountSuccess(Res.data));
            }
        } catch (error) {
            dispatch(followingAccountFailed());
        }
    };
};

export const followingAccountSuccess = (data) => {
    return {
        type: actionTypes.FOLLOW_ONE_ACCOUNT_SUCCESS,
        data,
    };
};

export const followingAccountFailed = () => {
    return {
        type: actionTypes.FOLLOW_ONE_ACCOUNT_SUCCESS,
    };
};

export const unFollowingAccount = (id, token) => {
    return async (dispatch, state) => {
        try {
            const Res = await UnFollowingAccount(id, token);

            if (Res && Res.data && !_.isEmpty(Res.data)) {
                dispatch(unFollowingAccountSuccess(Res.data));
            }
        } catch (error) {
            dispatch(unFollowingAccountFailed());
        }
    };
};

export const unFollowingAccountSuccess = (data) => {
    return {
        type: actionTypes.FOLLOW_ONE_ACCOUNT_SUCCESS,
        data,
    };
};

export const unFollowingAccountFailed = () => {
    return {
        type: actionTypes.FOLLOW_ONE_ACCOUNT_SUCCESS,
    };
};

export const getUserVideo = (id, token) => {
    return async (dispatch, state) => {
        try {
            const Res = await GetUserVideo(id, token);

            if (Res && Res.data) {
                dispatch(getUserVideoSuccess(Res.data));
            }
        } catch (error) {
            dispatch(getUserVideoFailed());
        }
    };
};

export const getUserVideoSuccess = (data) => {
    return {
        type: actionTypes.GET_USER_VIDEO_SUCCESS,
        data,
    };
};

export const getUserVideoFailed = () => {
    return {
        type: actionTypes.GET_USER_VIDEO_FAILED,
    };
};

export const getOneUser = (nickname, token) => {
    return async (dispatch, state) => {
        try {
            const Res = await GetOneUser(nickname, token);

            if (Res && Res.data) {
                dispatch(getOneUserSuccess(Res.data));
            }
        } catch (error) {
            dispatch(getOneUserFailed());
        }
    };
};

export const getOneUserSuccess = (data) => {
    return {
        type: actionTypes.GET_ONE_USER_SUCCESS,
        data,
    };
};

export const getOneUserFailed = () => {
    return {
        type: actionTypes.GET_ONE_USER_FAILED,
    };
};

export const getListVideoLiked = (id, token) => {
    return async (dispatch, state) => {
        try {
            const Res = await GetListVideoLiked(id, token);

            if (Res && Res.data) {
                dispatch(getListVideoLikedSuccess(Res.data));
            }
        } catch (error) {
            dispatch(getListVideoLikedFailed());
        }
    };
};

export const getListVideoLikedSuccess = (data) => {
    return {
        type: actionTypes.GET_LIST_VIDEO_LIKED_SUCCESS,
        data,
    };
};

export const getListVideoLikedFailed = () => {
    return {
        type: actionTypes.GET_LIST_VIDEO_LIKED_FAILED,
    };
};

export const getCurrentUser = (token) => {
    return async (dispatch, state) => {
        try {
            const Res = await GetCurrentUser(token);

            if (Res && Res.data) {
                dispatch(getCurrentUserSuccess(Res.data));
            }
        } catch (error) {
            dispatch(getCurrentUserFailed());
        }
    };
};

export const getCurrentUserSuccess = (data) => {
    return {
        type: actionTypes.GET_CURRENT_USER_SUCCESS,
        data,
    };
};

export const getCurrentUserFailed = () => {
    return {
        type: actionTypes.GET_CURRENT_USER_FAILED,
    };
};

export const updateUser = (data, token) => {
    return async (dispatch, state) => {
        try {
            const Res = await UpdateUser(data, token);

            console.log('check Res :', Res.data);

            if (Res && Res.data) {
                dispatch(updateUserSuccess(Res.data));
                dispatch(updateUserInfoSuccess(Res.data));
            }
        } catch (error) {
            dispatch(updateUserFailed());
        }
    };
};

export const updateUserSuccess = (data) => {
    return {
        type: actionTypes.GET_CURRENT_USER_SUCCESS,
        data,
    };
};

export const updateUserFailed = () => {
    return {
        type: actionTypes.UPDATE_USER_FAILED,
    };
};

export const updateUserInfoSuccess = (data) => {
    return {
        type: actionTypes.UPDATE_USER_SUCCESS,
        data,
    };
};
