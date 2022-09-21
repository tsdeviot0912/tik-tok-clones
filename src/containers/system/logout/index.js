import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import * as actions from '../../.././store/actions';
import useGetToken from '../../../components/hooks/useGetToken';
import { LogoutApp } from '../../../services/AppServices';

function Logout() {
    const disPatch = useDispatch();
    const Token = useGetToken();
    const history = useNavigate();

    useEffect(() => {
        const fetch = async () => {
            await LogoutApp(Token);
            disPatch(actions.processLogout());
            history(`/`);
        };

        fetch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <div className="logouts"></div>;
}

export default Logout;
