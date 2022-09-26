import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import Button from '../../../components/Button';
import './Preview.scss';
import Image from '../../../components/Image';
import ModalRender from '../../../components/Popper/Modal';
import useGetToken from '../../hooks/useGetToken';
import * as actions from '../../../store/actions';
import _ from 'lodash';
import { useNavigate } from 'react-router-dom';

Preview.propTypes = {
    data: PropTypes.object.isRequired,
};

function Preview({ data = {} }) {
    const dispatch = useDispatch();
    const history = useNavigate();

    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const userInfo = useSelector((state) => state.user.userInfo) || {};

    const Token = useGetToken();

    const [isOpen, setIsOpen] = useState(false);

    const handleToggleModal = () => {
        setIsOpen(!isOpen);
    };

    const handleClickRedirect = (nickname, id) => {
        history(`/profile/@${nickname}/${id}`);
    };

    const handleFollowBtn = async (data, toggle) => {
        if (isLoggedIn) {
            if (!toggle) {
                dispatch(actions.followingAccount(data.id ? data.id : 0, Token));
            } else {
                handleClickRedirect(data.nickname, data.id);
            }
        } else {
            handleToggleModal();
        }
    };

    const handleRedirect = () => {
        history(`/profile/me-tai-khoan-cua-toi`);
    };

    return (
        <div className="preview-wrapper" tabIndex={-1}>
            {!_.isEmpty(data) && (
                <>
                    <header>
                        <Image
                            src={data.avatar}
                            alt={data.nickname}
                            onClick={() => handleClickRedirect(data.nickname, data.id)}
                        />
                        {userInfo.id === data.id ? (
                            <Button primary onClick={() => handleRedirect(data.nickname, data.id)}>
                                Xem Profile
                            </Button>
                        ) : (
                            <Button primary onClick={() => handleFollowBtn(data, data.is_followed)}>
                                {data.is_followed ? 'Xem Profile' : 'Follow'}
                            </Button>
                        )}
                    </header>
                    <div className="body" onClick={() => handleClickRedirect(data.nickname, data.id)}>
                        <h2>
                            {data.nickname}
                            {data.tick && <FontAwesomeIcon icon={faCheckCircle} />}
                        </h2>
                        <p>{`${data.first_name} ${data.last_name}`}</p>
                    </div>
                    <div className="introduce">
                        <span>
                            <strong>{data.followers_count}</strong>
                            Follower
                        </span>
                        <span>
                            <strong>{data.likes_count}</strong>
                            Thích
                        </span>
                    </div>
                    {isOpen && <ModalRender isOpen={isOpen} handleToggleModal={handleToggleModal} />}
                </>
            )}
        </div>
    );
}

export default Preview;
