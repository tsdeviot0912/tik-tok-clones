import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as actions from '../../../store/actions';

FollowGlobal.propTypes = {
    id: PropTypes.number.isRequired,
    token: PropTypes.string.isRequired,
};

function FollowGlobal(id = 1, token = '') {
    const dispatch = useDispatch();

    const detailFollowAndUnFollow = useSelector((state) => state.SiteReducer.detailFollowAndUnFollow);

    const [DetailFollowUnFollow, setDetailFollowUnFollow] = useState({});

    useEffect(() => {
        setDetailFollowUnFollow(detailFollowAndUnFollow);
    }, [detailFollowAndUnFollow]);

    useEffect(() => {
        dispatch(actions.followingAccount(id, token));
    }, [id, token, dispatch]);

    return DetailFollowUnFollow;
}

export default FollowGlobal;
