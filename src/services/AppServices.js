import Cookies from 'universal-cookie';
import axios from '../axios';

const cookies = new Cookies();

const Token = cookies.get('token') || ' ';

const config = {
    headers: {
        Authorization: `Bearer ${Token}`,
    },
};

export const GetListComment = (uuid) => {
    return axios.get(`/api/videos/${uuid}/comments`, config);
};
