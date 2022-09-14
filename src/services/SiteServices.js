import axios from '../axios';

export const GetVideoLimitType = (type = 'for-you', page = 1, token) => {
    return axios.get(`/api/videos?type=${type}&page=${page}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export const GetDetailVideoByUuid = (uuid, token) => {
    return axios.get(`/api/videos/${uuid}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};
