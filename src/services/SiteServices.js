import axios from '../axios';

export const GetVideoLimitType = (type = 'for-you', page = 1) => {
    return axios.get(`/api/videos?type=${type}&page=${page}`);
};

export const GetDetailVideoByUuid = (uuid) => {
    return axios.get(`/api/videos/${uuid}`);
};
