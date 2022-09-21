import _ from 'lodash';
import Cookies from 'universal-cookie';

import reduxStore from '../../redux';

const cookies = new Cookies();

const useGetToken = () => {
    const StorePersist = reduxStore.getState();

    const isLogin = StorePersist.user.isLoggedIn;

    const token = isLogin
        ? cookies.get('token') ||
          (!_.isEmpty(StorePersist) &&
              !_.isEmpty(StorePersist.user) &&
              !_.isEmpty(StorePersist.user.token) &&
              StorePersist.user.token.token)
            ? StorePersist.user.token.token
            : ''
        : '';

    return token;
};

export default useGetToken;
