import PropTypes from 'prop-types';
import _ from 'lodash';
import { faCheckCircle, faMusic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../../../../../../components/Button';
import Image from '../../../../../../../components/Image';
import './HeaderVideo.scss';
import { Wrapper } from '../../../../../../../components/Popper';
import Preview from '../../../../../../../components/SuggestAccount/Preview';
import ModalRender from '../../../../../../../components/Popper/Modal';
import * as actions from '../../../../../../.././store/actions';
import useGetToken from '../../../../../../../components/hooks/useGetToken';

HeaderVideo.propTypes = {
    data: PropTypes.object.isRequired,
};

function HeaderVideo({ data }) {
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

    const disPatch = useDispatch();
    const Token = useGetToken();

    const history = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const userInfo = useSelector((state) => state.user.userInfo) || {};

    const handleToggleModal = () => {
        setIsOpen(!isOpen);
    };

    const PreviewAccount = () => {
        return (
            <Wrapper>
                <Preview data={!_.isEmpty(data) && data.user && data.user} />
            </Wrapper>
        );
    };

    const TippyRender = ({ children }) => {
        return (
            <div>
                <Tippy interactive delay={[800, 20]} placement="bottom-start" render={() => PreviewAccount()}>
                    {children}
                </Tippy>
            </div>
        );
    };

    const handleBtnFollowClick = () => {
        if (isLoggedIn) {
            disPatch(actions.followingAccount(data && data.user && data.user.id ? data.user.id : 0, Token));
        } else {
            handleToggleModal();
        }
    };

    const handleRedirect = (nickname, id) => {
        if (id && userInfo && id === userInfo.id) {
            history(`/profile/me-tai-khoan-cua-toi`);
        } else {
            history(`/profile/@${nickname}/${id}`);
        }
    };

    return (
        <div className="header-video-container">
            <div className="container">
                {!_.isEmpty(data) && (
                    <div className="d-flex justify-content-between">
                        <TippyRender>
                            <div className="d-flex">
                                <div className="logo" onClick={() => handleRedirect(data.user.nickname, data.user.id)}>
                                    <Image
                                        src={!_.isEmpty(data.user) ? data.user.avatar : ''}
                                        className="image-item-home"
                                    />
                                </div>
                                <div className="center">
                                    <div
                                        className="name-nick"
                                        onClick={() => handleRedirect(data.user.nickname, data.user.id)}
                                    >
                                        <span>
                                            <h2>{!_.isEmpty(data.user) ? data.user.nickname : ''}</h2>
                                            {!_.isEmpty(data.user) && data.user.tick && (
                                                <FontAwesomeIcon icon={faCheckCircle} />
                                            )}
                                        </span>
                                        <span>
                                            {!_.isEmpty(data.user)
                                                ? `${data.user.first_name} ${data.user.last_name}`
                                                : ''}
                                        </span>
                                    </div>
                                    <div className="description">
                                        <span>{data.description}</span>
                                        <span>
                                            <a href="/">
                                                <b>#huyseoul</b>
                                            </a>
                                            <a href="/">
                                                <b>#huyseoul1</b>
                                            </a>
                                            <a href="/">
                                                <b>#huyseoul2</b>
                                            </a>
                                        </span>
                                    </div>
                                    <div className="music">
                                        <span>
                                            <FontAwesomeIcon icon={faMusic} />
                                            <span>{data.music || 'Đang cập nhập'}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </TippyRender>
                        <div className="button-jsx-header-video">
                            {userInfo.id === data.user.id ? (
                                <Button outLine onClick={() => handleRedirect(data.user.nickname, data.user.id)}>
                                    Xem Profile
                                </Button>
                            ) : (
                                !data.user.is_followed && (
                                    <Button outLine onClick={() => handleBtnFollowClick()}>
                                        Follow
                                    </Button>
                                )
                            )}
                        </div>
                    </div>
                )}
            </div>
            {isOpen && <ModalRender isOpen={isOpen} handleToggleModal={handleToggleModal} />}
        </div>
    );
}

export default HeaderVideo;
