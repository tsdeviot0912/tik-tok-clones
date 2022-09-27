import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare, faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import _ from 'lodash';
import { faPause, faPlay, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useGetToken from '../../../../../../components/hooks/useGetToken';
import { useOnScreen } from '../../../../../../components/hooks';
import * as Actions from '../../../../../../store/actions';
import Comment from '../../../../components/comments/comment';

function ViewMobile({
    TippyRender,
    data,
    isLoggedIn,
    handleClickHeart,
    handleToggleModal,
    setVolume = () => {},
    volume = 0,
    setIsShowParents = () => {},
}) {
    const Token = useGetToken();
    const ref = useRef(null);
    const disPatch = useDispatch();

    const listComments = useSelector((state) => state.SiteReducer.listComments);
    const detailComments = useSelector((state) => state.SiteReducer.detailComments);

    const [play, setPlay] = useState(false);
    const [Check, setCheck] = useState(false);
    const [timePercent, setTimePercent] = useState(0);
    const [open, setOpen] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const [dataComment, setDataShowComment] = useState({});
    const [isShowComment, setIsShowComment] = useState(false);
    const [listCommentMobile, setListCommentMobile] = useState([]);
    const [commentDetail, setCommentDetail] = useState({});
    const [commentText, setCommentText] = useState('');

    const handleTogglePlayVideo = () => {
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

    useEffect(() => {
        setCommentText('');
        setCommentDetail(detailComments);
    }, [detailComments]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const TrueFalse = useOnScreen(ref);

    useEffect(() => {
        setCheck(TrueFalse);
    }, [TrueFalse]);

    useEffect(() => {
        setListCommentMobile(listComments);
    }, [listComments]);

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
                setIsShowComment(false);
                setIsShowParents(true);
            }
        };

        Player();
    }, [Check, setIsShowParents]);

    useEffect(() => {
        window.addEventListener('visibilitychange', () => {
            const video = ref.current;

            if (document.visibilityState === 'visible') {
                if (Check) {
                    if (video && (video.paused || video.ended)) {
                        setPlay(true);
                        video.play();
                    }
                } else {
                    if (video) {
                        setPlay(false);
                        video.pause();
                    }
                }
            } else {
                if (Check) {
                    if (video && (video.paused || video.ended)) {
                        setPlay(false);
                        video.pause();
                    }
                } else {
                    if (video) {
                        setPlay(false);
                        video.pause();
                    }
                }
            }
        });

        return () => window.removeEventListener('visibilitychange', () => {});
    });

    const handleTimeUpdate = () => {
        const video = ref.current;

        if (play) {
            if (video) {
                if (video.duration && video.currentTime) {
                    const Percent = Math.floor((video.currentTime * 100) / video.duration);
                    setTimePercent(Percent);
                }
            }
        }
    };

    const handleChangeinput = (e) => {
        const Percent = e.target.value;
        const video = ref.current;
        setTimePercent(e.target.value);
        if (video) {
            if (Percent) {
                const currentTime = (+Percent * video.duration) / 100;
                video.currentTime = currentTime;
            }
        }
    };

    const handleOnChangeVolume = (e) => {
        setVolume(e.target.value);
    };

    const handleEnded = () => {
        const video = ref.current;

        if (video) {
            video.play();
        }
    };

    useEffect(() => {
        const video = ref.current;

        if (video) {
            if (volume) {
                video.volume = volume;
            } else {
                video.volume = 0;
            }

            video.play();
        }
    }, [volume]);

    useEffect(() => {
        if (!_.isEmpty(dataComment)) {
            disPatch(Actions.getListComment(dataComment.uuid, Token));
        }
    }, [dataComment, Token, disPatch]);

    return (
        <>
            <div className="wrapper-item-video-mobile">
                {!_.isEmpty(data) && (
                    <>
                        <div className="mobile-item-video">
                            <video
                                onEnded={handleEnded}
                                onTimeUpdate={handleTimeUpdate}
                                ref={ref}
                                loop
                                onClick={handleTogglePlayVideo}
                                onMouseEnter={() => {
                                    setOpen(true);
                                    setIsShow(true);
                                }}
                                onMouseLeave={() => {
                                    setOpen(false);
                                    setIsShow(false);
                                }}
                            >
                                <source src={data.file_url} />
                            </video>
                        </div>
                        <div className="video-progress-control-mobile">
                            <span className="play-center">{!play && <FontAwesomeIcon icon={faPlay} />}</span>
                            <div className="center-up">
                                {isShow && (
                                    <>
                                        <span onClick={handleTogglePlayVideo}>
                                            {play ? (
                                                <FontAwesomeIcon icon={faPause} />
                                            ) : (
                                                <FontAwesomeIcon icon={faPlay} />
                                            )}
                                        </span>
                                        <span className="volume-control">
                                            <FontAwesomeIcon
                                                className="volume-click"
                                                icon={faVolumeUp}
                                                onClick={() => setVolume(0)}
                                            />
                                            <span className="om-jsx">
                                                <input
                                                    onChange={(e) => {
                                                        handleOnChangeVolume(e);
                                                    }}
                                                    className="volume-progress-control"
                                                    type="range"
                                                    value={volume}
                                                    step=".1"
                                                    min="0"
                                                    max="1"
                                                    onMouseEnter={() => {
                                                        setOpen(true);
                                                        setIsShow(true);
                                                    }}
                                                    onMouseLeave={() => {
                                                        setOpen(false);
                                                        setIsShow(false);
                                                    }}
                                                />
                                            </span>
                                        </span>
                                    </>
                                )}
                            </div>
                            <div
                                className="center-down"
                                style={{
                                    backgroundColor: open && 'transparent',
                                }}
                            >
                                {open ? (
                                    <input
                                        className="scroll-bar-input"
                                        value={timePercent}
                                        type="range"
                                        min="0"
                                        max="100"
                                        onChange={(e) => handleChangeinput(e)}
                                        // style={{
                                        //     width: `${timePercent}%`,
                                        // }}
                                        step=".5"
                                        onMouseEnter={() => setOpen(true)}
                                        onMouseLeave={() => setOpen(false)}
                                    />
                                ) : (
                                    <div
                                        className="scroll-bar"
                                        style={{
                                            width: `${timePercent}%`,
                                        }}
                                    ></div>
                                )}
                            </div>
                        </div>
                        <div className="heart-and-share-video mobile">
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
                                        <FontAwesomeIcon icon={faHeart} />
                                    )}
                                </button>
                                <strong>{data.likes_count}</strong>
                            </div>
                            <div>
                                <button
                                    onClick={() => {
                                        setIsShowComment(true);
                                        setDataShowComment(data);
                                        setIsShowParents(false);
                                    }}
                                >
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
                    </>
                )}
                (
                <div
                    className={isShowComment ? 'comment-mobile' : 'comment-mobile d-none'}
                    onClick={() => {
                        setIsShowComment(false);
                        setIsShowParents(true);
                    }}
                >
                    <div
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                        className={isShowComment ? 'comment-body-mobile active' : 'comment-body d-none'}
                    >
                        <div className="comment-jsx-mobile">
                            <Comment
                                uuid={dataComment.uuid ? dataComment.uuid : ''}
                                listComment={listCommentMobile}
                                commentDetail={commentDetail}
                            />
                        </div>
                        <div className="input">
                            <input />
                        </div>
                    </div>
                </div>
                )
            </div>
        </>
    );
}

export default memo(ViewMobile);
