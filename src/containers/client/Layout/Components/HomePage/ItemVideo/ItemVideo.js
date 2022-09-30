import { faShare, faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Tippy from '@tippyjs/react/headless';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';
import { BrowserView, MobileView } from 'react-device-detect';

import ControlVideo from '../components/ControlVideo';
import HeaderVideo from '../components/HeaderVideo';
import './ItemVideo.scss';
import { useOnScreen } from '../../../../../../components/hooks';
import Share from '../components/Share';
import { Wrapper } from '../../../../../../components/Popper';
import useGetToken from '../../../../../../components/hooks/useGetToken';
import ViewMobile from './ViewMobile';

ItemVideo.propTypes = {
    data: PropTypes.object.isRequired,
    handleClickHeart: PropTypes.func,
    handleToggleModal: PropTypes.func,
    isFollow: PropTypes.bool,
    setIsShow: PropTypes.func,
};

function ItemVideo({ data, handleClickHeart, handleToggleModal, isFollow = false, setIsShow = () => {} }) {
    const userInfo = useSelector((state) => state.user.userInfo);
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

    const [linkCopy, setLinkCopy] = useState('http://localhost:3000/customer/home');
    const [play, setPlay] = useState(false);
    const [valueVolume, setValueVolume] = useState(+0);
    const [Check, setCheck] = useState(false);
    const ref = useRef(null);
    const [user, setUser] = useState(userInfo);
    const [volume, setVolume] = useState(0.3);

    const history = useNavigate();

    const PreviewAccount = () => {
        return <Wrapper>{<Share linkCopy={linkCopy} />}</Wrapper>;
    };

    useEffect(() => {
        setUser(userInfo);
    }, [userInfo]);

    const TippyRender = ({ children }) => {
        return (
            <Tippy interactive delay={[800, 200]} placement="top-start" render={() => PreviewAccount()}>
                {children}
            </Tippy>
        );
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const TrueFalse = useOnScreen(ref);

    const handleToggle = () => {
        const video = ref.current;

        if (video) {
            if (video.paused || video.ended) {
                video.play();
                setPlay(true);
            } else {
                video.pause();
                setPlay(false);
            }
        }
    };

    const handleOnchange = (e) => {
        setValueVolume(+e.target.value);
    };

    const video = ref.current;

    if (video) {
        video.volume = valueVolume;
    }

    useEffect(() => {
        setCheck(TrueFalse);
    }, [TrueFalse]);

    useEffect(() => {
        const Player = async () => {
            const video = ref.current;

            if (Check) {
                if (video && (video.paused || video.ended)) {
                    setPlay(true);
                    await video.play();
                }
            } else {
                if (video) {
                    setValueVolume(0);
                    setPlay(false);
                    await video.pause();
                }
            }
        };

        Player();
    }, [Check]);

    const handleClickRedirect = (item) => {
        history(`/customer/video-details-with-id-and-user/${item.uuid}`);
    };
    const Token = useGetToken();

    const handleClickCommentBtn = (uuid, token) => {
        if (isLoggedIn) {
            handleClickRedirect({ uuid });
        } else {
            handleToggleModal();
        }
    };

    useEffect(() => {
        if (window && window.location && window.location.href) {
            setLinkCopy(
                `${window.location.host}/customer/video-details-with-id-and-user/${
                    data && data.uuid ? data.uuid : ''
                }/view=2`,
            );
        }
    }, [data]);

    return (
        <>
            <BrowserView>
                <div className="wrapper-item-video">
                    {!_.isEmpty(data) && (
                        <>
                            <div className="header">
                                <HeaderVideo data={data} isFollow={isFollow} />
                            </div>
                            <div className="d-flex">
                                <div className="video-container">
                                    <div
                                        className="backgroundImage-video-wrapper"
                                        style={{
                                            backgroundImage: `url(${data.thumb_url})`,
                                        }}
                                    >
                                        <video ref={ref} onClick={() => handleClickRedirect(data)} loop>
                                            <source src={data.file_url} />
                                        </video>
                                        <div className="hover">
                                            <ControlVideo
                                                play={play}
                                                handleToggle={handleToggle}
                                                handleOnchange={handleOnchange}
                                                valueVolume={valueVolume}
                                                setValueVolume={setValueVolume}
                                            />
                                        </div>
                                    </div>
                                    <div className="heart-and-share-video">
                                        <div>
                                            <button
                                                onClick={() => {
                                                    if (isLoggedIn) {
                                                        handleClickHeart(data.uuid, Token, data.is_liked);
                                                    } else {
                                                        handleToggleModal();
                                                    }
                                                }}
                                            >
                                                {data.is_liked ? (
                                                    <FontAwesomeIcon className="heart-with-me" icon={faHeartSolid} />
                                                ) : (
                                                    <FontAwesomeIcon icon={faHeartSolid} />
                                                )}
                                            </button>
                                            <strong className="information-number">{data.likes_count}</strong>
                                        </div>
                                        <div>
                                            <button onClick={() => handleClickCommentBtn(data.uuid, Token)}>
                                                <FontAwesomeIcon icon={faCommentDots} />
                                            </button>
                                            <strong className="information-number">{data.comments_count}</strong>
                                        </div>
                                        <TippyRender>
                                            <div>
                                                <button>
                                                    <FontAwesomeIcon icon={faShare} />
                                                </button>
                                                <strong className="information-number">{data.shares_count}</strong>
                                            </div>
                                        </TippyRender>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </BrowserView>
            <MobileView>
                <ViewMobile
                    data={data}
                    TippyRender={TippyRender}
                    isLoggedIn={isLoggedIn}
                    handleClickHeart={handleClickHeart}
                    handleToggleModal={handleToggleModal}
                    setVolume={setVolume}
                    volume={volume}
                    setIsShowParents={setIsShow}
                />
            </MobileView>
        </>
    );
}

export default ItemVideo;
