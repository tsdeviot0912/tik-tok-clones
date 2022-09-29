import { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import Tippy from '@tippyjs/react/headless';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import _ from 'lodash';
import { useNavigate } from 'react-router-dom';

import Button from '../../../components/Button';
import { Wrapper } from '../../../components/Popper';
import { EditIcons, IconUserNotVideos, LockIcons, LockIconsRegular, ShareIcons } from '../../../components/Icons';
import Header from '../../client/components/Header/Header';
import Sidebar from '../../client/components/Sidebar';
import Share from '../../client/Layout/Components/HomePage/components/Share';
import * as actions from '../../../store/actions';
import '../Profile/Profile.scss';
import useGetToken from '../../../components/hooks/useGetToken';
import { dispatch } from '../../../redux';
import ModalEditUser from '../../../components/ModalEditUser';
import { SkelotonLoading } from '../../../components/SkelotonLoading';
import Image from '../../../components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function MeProfile() {
    // get Token
    const Token = useGetToken();

    // defined dispatch and hook
    const disPatch = useDispatch();
    const history = useNavigate();

    // get state in reduxStore
    const ListVideoUser = useSelector((state) => state.SiteReducer.ListVideoUser);
    const listVideoLiked = useSelector((state) => state.SiteReducer.listVideoLiked);
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const userInfo = useSelector((state) => state.user.userInfo);
    const CurrentUserProfile = useSelector((state) => state.SiteReducer.CurrentUserProfile);
    const detailUpdateUser = useSelector((state) => state.SiteReducer.detailUpdateUser);

    // defined state react
    const [isOpenLightBox, setIsOpenLightBox] = useState(false);
    const [isOpenVideo, setIsOpenVideo] = useState(true);
    const [listVideo, setListVideo] = useState([]);
    const [listVIdeoLike, setListVideoLike] = useState([]);
    const [user, setUser] = useState({});
    const [userCurrent, setUserCurrent] = useState({});
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setListVideo(ListVideoUser);
    }, [ListVideoUser]);

    useEffect(() => {
        setUser(userInfo);
    }, [userInfo]);

    useEffect(() => {
        setListVideoLike(listVideoLiked);
    }, [listVideoLiked]);

    useEffect(() => {
        setUserCurrent(CurrentUserProfile);
    }, [CurrentUserProfile]);

    useEffect(() => {
        setUserCurrent(detailUpdateUser);
    }, [detailUpdateUser]);

    useEffect(() => {
        if (!_.isEmpty(user)) {
            dispatch(actions.getUserVideo(user.id, Token));
            dispatch(actions.getListVideoLiked(user.id, Token));
            dispatch(actions.getCurrentUser(Token));
        }
    }, [Token, disPatch, user]);

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

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleRedirect = (uuid) => {
        history(`/customer/video-details-with-id-and-user/${uuid}`);
    };

    useEffect(() => {
        document.title = 'Tài khoản của tôi';
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
                    {userCurrent && !_.isEmpty(userCurrent) ? (
                        <div className="up-profile">
                            <div className="header">
                                <div className="image" onClick={() => setIsOpenLightBox(true)}>
                                    <Image src={userCurrent.avatar} alt="img" />
                                    {isOpenLightBox && (
                                        <Lightbox
                                            onCloseRequest={() => setIsOpenLightBox(false)}
                                            mainSrc={userCurrent.avatar}
                                        />
                                    )}
                                </div>
                                <div className="center">
                                    <h1>
                                        {userCurrent.nickname}
                                        {user.tick && <FontAwesomeIcon icon={faCheckCircle} />}
                                    </h1>
                                    <h2>{`${userCurrent.first_name} ${userCurrent.last_name}`}</h2>
                                    <div className="btn-edit-or-follow">
                                        {isLoggedIn ? (
                                            <button className="edit-information" onClick={() => setIsOpen(true)}>
                                                <EditIcons />
                                                <span>
                                                    <strong>Sửa hồ sơ</strong>
                                                </span>
                                            </button>
                                        ) : (
                                            <Button primary>Follow</Button>
                                        )}
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
                                        <b>{user.followers_count ? user.followers_count : 0}</b>
                                        Đang follow
                                    </span>
                                    <span>
                                        <b>{user.followings_count ? user.followings_count : 0}</b>
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
            {isOpen && (
                <ModalEditUser
                    userCurrent={!_.isEmpty(userCurrent) ? userCurrent : {}}
                    isOpen={isOpen}
                    handleToggle={handleToggle}
                />
            )}
        </div>
    );
}

export default MeProfile;
