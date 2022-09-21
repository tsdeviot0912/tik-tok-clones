import axios from '../axios';

export const GetSuggestedAccountLimitAction = (limit = 1, per_page = 5, token) => {
    return axios.get(`/api/users/suggested?page=${limit}&per_page=${per_page}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};

export const Login = (data) => {
    return axios.post(`/api/auth/login`, data);
};

export const Register = (data) => {
    return axios.post(`/api/auth/register`, data);
};
