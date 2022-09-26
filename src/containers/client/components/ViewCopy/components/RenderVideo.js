import { useRef } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { useEffect } from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay, faVolumeUp } from '@fortawesome/free-solid-svg-icons';

import RenderHeart from './RenderHert';

RenderVideo.propTypes = {
    setPlay: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    handleClickHeart: PropTypes.func.isRequired,
};

function RenderVideo({ handleToggleModal, handleClickHeart = () => {}, setPlay = () => {}, play, data = {} }) {
    const ref = useRef(null);

    const [timePercent, setTimePercent] = useState(0);
    const [open, setOpen] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const [volume, setVolume] = useState(0);

    const handleEnded = () => {
        const video = ref.current;

        if (video) {
            video.play();
        }
    };

    const handleClickPlay = () => {
        const video = ref.current;

        if (video) {
            if (video.paused || video.ended) {
                setPlay(true);
                video.play();
            } else {
                video.pause();
                setPlay(false);
            }
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
    }, [data, volume]);

    const handleTimeUpdate = () => {
        const video = ref.current;

        if (video) {
            if (video.duration && video.currentTime) {
                const Percent = Math.floor((video.currentTime * 100) / video.duration);

                setTimePercent(Percent);
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

    useEffect(() => {
        const video = ref.current;

        if (video) {
            video.volume = volume;
        }
    }, [volume]);

    return (
        <>
            {!_.isEmpty(data) && (
                <video
                    className="video-parents"
                    onTimeUpdate={handleTimeUpdate}
                    src={data.file_url}
                    ref={ref}
                    onEnded={handleEnded}
                    onClick={handleClickPlay}
                    onMouseEnter={() => {
                        setOpen(true);
                        setIsShow(true);
                    }}
                    onMouseLeave={() => {
                        setOpen(false);
                        setIsShow(false);
                    }}
                ></video>
            )}
            <div className="video-progress-control">
                <span className="play-center">{!play && <FontAwesomeIcon icon={faPlay} />}</span>
                <div className="nav-lef">
                    <RenderHeart
                        handleToggleModal={handleToggleModal}
                        data={data}
                        handleClickHeart={handleClickHeart}
                    />
                </div>
                <div className="center-up">
                    {isShow && (
                        <>
                            <span onClick={handleClickPlay}>
                                {play ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
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
                <div className="center-down">
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
        </>
    );
}

export default RenderVideo;
