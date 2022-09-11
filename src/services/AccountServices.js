import axios from '../axios';

export const GetSuggestedAccountLimitAction = (limit = 1, per_page = 5) => {
    return axios.get(`/api/users/suggested?page=${limit}&per_page=${per_page}`);
};

export const Login = (data) => {
    return axios.post(`/api/auth/login`, data);
};
