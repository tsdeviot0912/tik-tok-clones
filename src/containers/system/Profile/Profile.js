import { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import Tippy from '@tippyjs/react/headless';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import _ from 'lodash';
import { useNavigate, useParams } from 'react-router-dom';

import Button from '../../../components/Button';
import { Wrapper } from '../../../components/Popper';
import {
    IconsUserUnFollow,
    IconUserNotVideos,
    LockIcons,
    LockIconsRegular,
    ShareIcons,
} from '../../../components/Icons';
import Header from '../../client/components/Header/Header';
import Sidebar from '../../client/components/Sidebar';
import Share from '../../client/Layout/Components/HomePage/components/Share';
import * as actions from '../../../store/actions';
import './Profile.scss';
import useGetToken from '../../../components/hooks/useGetToken';
import ModalRender from '../../../components/Popper/Modal';
import { SkelotonLoading } from '../../../components/SkelotonLoading';
import Image from '../../../components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function Profile() {
    // get Token
    const Token = useGetToken();

    // defined dispatch and hook
    const disPatch = useDispatch();
    const history = useNavigate();
    const params = useParams();

    // get state in reduxStore
    const ListVideoUser = useSelector((state) => state.SiteReducer.ListVideoUser);
    const UserProfile = useSelector((state) => state.SiteReducer.UserProfile);
    const listVideoLiked = useSelector((state) => state.SiteReducer.listVideoLiked);
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const detailFollowAndUnFollow = useSelector((state) => state.SiteReducer.detailFollowAndUnFollow);

    // defined state react
    const [isOpenLightBox, setIsOpenLightBox] = useState(false);
    const [isOpenVideo, setIsOpenVideo] = useState(true);
    const [listVideo, setListVideo] = useState([]);
    const [listVIdeoLike, setListVideoLike] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState({});

    useEffect(() => {
        setListVideo(ListVideoUser);
    }, [ListVideoUser]);

    useEffect(() => {
        setUser(UserProfile);
    }, [UserProfile]);

    useEffect(() => {
        setUser(detailFollowAndUnFollow);
    }, [detailFollowAndUnFollow]);

    useEffect(() => {
        setListVideoLike(listVideoLiked);
    }, [listVideoLiked]);

    useEffect(() => {
        disPatch(actions.getUserVideo(params.id, Token));
        disPatch(actions.getListVideoLiked(params.id, Token));
        disPatch(actions.getOneUser(params.nickname, Token));
    }, [Token, disPatch, params.id, params.nickname]);

    const PreviewAccount = () => {
        return <Wrapper>{<Share />}</Wrapper>;
    };

    const TippyRender = ({ children }) => {
        return (
            <Tippy interactive delay={[800, 200]} placement="top-end" render={() => PreviewAccount()}>
                {children}
            </Tippy>
        );
    };

    const handleRedirect = (uuid) => {
        history(`/customer/video-details-with-id-and-user/${uuid}`);
    };

    const handleToggleModal = () => {
        setIsOpen(!isOpen);
    };

    const handleFollowBtn = async (data, toggle) => {
        if (isLoggedIn) {
            if (!toggle) {
                disPatch(actions.followingAccount(data.id ? data.id : 0, Token));
            } else {
                disPatch(actions.unFollowingAccount(data.id ? data.id : 0, Token));
            }
        } else {
            handleToggleModal();
        }
    };

    useEffect(() => {
        if (!_.isEmpty(user)) {
            document.title = `${user.first_name} ${user.last_name} ${user.nickname}`;
        }
    }, [user]);

    return (
        <div className="profile-wrapper">
            <div className="header-profile">
                <Header />
            </div>
            <div className="custom-row">
                <div className="col-2 video-parents">
                    <Sidebar isHiddenTippy={true} classNameCustom="custom-slider" />
                </div>
                <div className="customer-10 body-render">
                    {user && !_.isEmpty(user) ? (
                        <div className="up-profile">
                            <div className="header">
                                <div className="image" onClick={() => setIsOpenLightBox(true)}>
                                    <Image src={user.avatar} alt="img" />
                                    {isOpenLightBox && (
                                        <Lightbox
                                            onCloseRequest={() => setIsOpenLightBox(false)}
                                            mainSrc={user.avatar}
                                        />
                                    )}
                                </div>
                                <div className="center">
                                    <h1>
                                        {user.nickname}
                                        {user.tick && <FontAwesomeIcon icon={faCheckCircle} />}
                                    </h1>
                                    <h2>{`${user.first_name} ${user.last_name}`}</h2>
                                    <div className="btn-edit-or-follow">
                                        {isLoggedIn ? (
                                            user.is_followed ? (
                                                <>
                                                    <Button outLine>Tin nhắn</Button>
                                                    <span
                                                        className="unfollow"
                                                        title="Unfollow"
                                                        onClick={() => handleFollowBtn(user, user.is_followed)}
                                                    >
                                                        <IconsUserUnFollow />
                                                        Unfollow
                                                    </span>
                                                </>
                                            ) : (
                                                <Button primary onClick={() => handleFollowBtn(user, user.is_followed)}>
                                                    Follow
                                                </Button>
                                            )
                                        ) : (
                                            <Button primary onClick={() => handleFollowBtn(user, user.is_followed)}>
                                                Follow
                                            </Button>
                                        )}
                                        {/* <button className="edit-information">
                                            <EditIcons />
                                            <span>
                                                <strong>Sửa hồ sơ</strong>
                                            </span>
                                        </button> */}
                                    </div>
                                </div>
                                <div className="right">
                                    <TippyRender>
                                        <button className="btn">
                                            <ShareIcons />
                                        </button>
                                    </TippyRender>
                                </div>
                            </div>
                            <div className="detail-user">
                                <div className="follow-and-liked">
                                    <span>
                                        <b>{user.followers_count}</b>
                                        Đang follow
                                    </span>
                                    <span>
                                        <b>{user.followings_count}</b>
                                        Follower
                                    </span>
                                    <span>
                                        <b>{user.likes_count}</b>
                                        Thích
                                    </span>
                                </div>
                                <div className="description">{user.bio}</div>
                            </div>
                        </div>
                    ) : (
                        <SkelotonLoading />
                    )}
                    <div className="down-profile">
                        <div className="navigate">
                            <div
                                className={isOpenVideo ? 'video-btn active' : 'video-btn'}
                                onClick={() => setIsOpenVideo(true)}
                            >
                                <span>Video</span>
                            </div>
                            <div
                                className={isOpenVideo ? 'video-btn-like' : 'video-btn-like active'}
                                onClick={() => setIsOpenVideo(false)}
                            >
                                <span>
                                    <LockIcons />
                                    Đã thích
                                </span>
                            </div>
                            <div className="navigate-scroll">
                                <div
                                    className={!isOpenVideo ? 'progress-bar progress-bar-active' : 'progress-bar'}
                                ></div>
                            </div>
                        </div>
                        <div className="render-item-video">
                            <div className="container">
                                <div className="row">
                                    {isOpenVideo ? (
                                        listVideo && listVideo.length > 0 ? (
                                            listVideo.map((item) => (
                                                <div
                                                    className="col-2 video-parents"
                                                    key={item.uuid}
                                                    onClick={() => handleRedirect(item.uuid)}
                                                >
                                                    <video loop>
                                                        <source src={item.file_url} />
                                                    </video>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="no-video">
                                                <div className="body-no-video">
                                                    <IconUserNotVideos />
                                                    <h2>Không có nội dung</h2>
                                                    <p>Người dùng này chưa đăng bất kỳ video nào.</p>
                                                </div>
                                            </div>
                                        )
                                    ) : listVIdeoLike && listVIdeoLike.length > 0 ? (
                                        listVIdeoLike.map((item) => (
                                            <div
                                                className="col-2 video-parents"
                                                key={item.uuid}
                                                onClick={() => handleRedirect(item.uuid)}
                                            >
                                                <video loop>
                                                    <source src={item.file_url} />
                                                </video>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="no-video">
                                            <div className="body-no-video">
                                                <LockIconsRegular />
                                                <h2>
                                                    Video đã thích của người dùng này ở trạng thái riêng tư hoặc chưa
                                                    thích video nào
                                                </h2>
                                                <p>
                                                    Các video được thích bởi {user.nickname && user.nickname} hiện đang
                                                    ẩn.
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && <ModalRender isOpen={isOpen} handleToggleModal={handleToggleModal} />}
        </div>
    );
}

export default Profile;
