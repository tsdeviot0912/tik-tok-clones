import axios from '../axios';

export const GetSuggestedAccountLimitAction = (limit = 1, per_page = 5) => {
    return axios.get(`https://tiktok.fullstack.edu.vn/api/users/suggested?page=${limit}&per_page=${per_page}`);
};
