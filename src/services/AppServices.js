import axios from '../axios';

export const SearchUserAndVideo = (q, type = 'less', page = 1) => {
    if (type === 'less') {
        return axios.get(`/api/users/search?q=${q}&type=${type}`);
    }

    if (type === 'more') {
        return axios.get(`/api/users/search?q=${q}&type=more&page=${page}`);
    }
};

export const GetListComment = (uuid, token) => {
    return axios.get(`/api/videos/${uuid}/comments`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export const CreateNewComment = (data, uuid, token) => {
    return axios.post(`/api/videos/${uuid}/comments`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export const DeleteComment = (id, token) => {
    return axios.delete(`/api/comments/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export const LikeComment = (id, token) => {
    return axios.post(
        `/api/comments/${id}/like`,
        {},
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    );
};

export const UnLikeComment = (id, token) => {
    return axios.post(
        `/api/comments/${id}/unlike`,
        {},
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    );
};

export const LikeOneVideo = (uuid, token) => {
    return axios.post(
        `/api/videos/${uuid}/like`,
        {},
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    );
};

export const UnLikeOneVideo = (uuid, token) => {
    return axios.post(
        `/api/videos/${uuid}/unlike`,
        {},
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    );
};

export const GetListFollowings = (page, token) => {
    return axios.get(`/api/me/followings?page=${page}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export const FollowingAccount = (id, token) => {
    return axios.post(
        `/api/users/${id}/follow`,
        {},
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    );
};

export const UnFollowingAccount = (id, token) => {
    return axios.post(
        `/api/users/${id}/unfollow`,
        {},
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    );
};

export const GetUserVideo = (id, token) => {
    return axios.get(`/api/users/${id}/videos`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export const GetOneUser = (nickName, token) => {
    return axios.get(`/api/users/@${nickName}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export const GetListVideoLiked = (id, token) => {
    return axios.get(`/api/users/${id}/liked-videos`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export const GetCurrentUser = (token) => {
    return axios.get(`/api/auth/me`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export const UpdateUser = (data, token) => {
    return axios.post(`/api/auth/me?_method=PATCH`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
            Accept: 'application/json',
        },
    });
};

export const CreateVideo = (data, token) => {
    return axios.post(`/api/videos`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
            Accept: 'application/json',
        },
    });
};

export const LogoutApp = (token) => {
    return axios.post(
        `/api/auth/logout`,
        {},
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        },
    );
};
