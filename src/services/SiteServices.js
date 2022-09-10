import axios from '../axios';

export const GetVideoLimitType = (type = 'for-you', page = 1) => {
    return axios.get(`https://tiktok.fullstack.edu.vn/api/videos?type=${type}&page=${page}`);
};
