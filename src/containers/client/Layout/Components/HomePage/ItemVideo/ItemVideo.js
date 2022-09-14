import { faShare, faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import Tippy from '@tippyjs/react/headless';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';

import ControlVideo from '../components/ControlVideo';
import HeaderVideo from '../components/HeaderVideo';
import './ItemVideo.scss';
import { useOnScreen } from '../../../../../../components/hooks';
import Share from '../components/Share';
import { Wrapper } from '../../../../../../components/Popper';
import useGetToken from '../../../../../../components/hooks/useGetToken';

ItemVideo.propTypes = {
    data: PropTypes.object.isRequired,
    handleClickHeart: PropTypes.func,
    handleToggleModal: PropTypes.func,
};

function ItemVideo({ data, handleClickHeart, handleToggleModal }) {
    const userInfo = useSelector((state) => state.user.userInfo);
    const detailOneVideo = useSelector((state) => state.SiteReducer.detailOneVideo);
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

    const [play, setPlay] = useState(false);
    const [valueVolume, setValueVolume] = useState(+0);
    const [Check, setCheck] = useState(false);
    const ref = useRef(null);
    const [user, setUser] = useState(userInfo);
    const [dataLike, setDataLike] = useState({});

    const history = useNavigate();

    const PreviewAccount = () => {
        return <Wrapper>{<Share />}</Wrapper>;
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

    useEffect(() => {
        setDataLike(detailOneVideo);
    }, [detailOneVideo]);

    const handleClickCommentBtn = (uuid, token) => {
        if (isLoggedIn) {
            handleClickRedirect({ uuid });
        } else {
            handleToggleModal();
        }
    };

    return (
        <div className="wrapper-item-video">
            {!_.isEmpty(data) && (
                <>
                    <div className="header">
                        <HeaderVideo data={data} />
                    </div>
                    <div className="d-flex">
                        <div className="video-container">
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
                                    onClick={() =>
                                        handleClickHeart(
                                            data.uuid,
                                            Token,
                                            !_.isEmpty(dataLike) ? dataLike.is_liked : data.is_liked,
                                        )
                                    }
                                >
                                    {!_.isEmpty(dataLike) ? (
                                        dataLike.is_liked ? (
                                            <FontAwesomeIcon className="heart-with-me" icon={faHeartSolid} />
                                        ) : (
                                            <FontAwesomeIcon icon={faHeart} />
                                        )
                                    ) : data.is_liked ? (
                                        <FontAwesomeIcon className="heart-with-me" icon={faHeartSolid} />
                                    ) : (
                                        <FontAwesomeIcon icon={faHeart} />
                                    )}
                                </button>
                                <strong>{!_.isEmpty(dataLike) ? dataLike.likes_count : data.likes_count}</strong>
                            </div>
                            <div>
                                <button onClick={() => handleClickCommentBtn(data.uuid, Token)}>
                                    <FontAwesomeIcon icon={faComment} />
                                </button>
                                <strong>{data.comments_count}</strong>
                            </div>
                            <TippyRender>
                                <div>
                                    <button>
                                        <FontAwesomeIcon icon={faShare} />
                                    </button>
                                    <strong>{data.shares_count}</strong>
                                </div>
                            </TippyRender>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default ItemVideo;
