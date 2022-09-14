import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import Render from '../Render.js/Render';
import './video.scss';

import PropTypes from 'prop-types';
import moment from 'moment';
import SeekVideo from '../Render.js/SeekVideo';
import _ from 'lodash';

Video.propTypes = {
    data: PropTypes.object.isRequired,
    actions: PropTypes.bool,
};

function Video({ data, actions }) {
    const ref = useRef(null);
    const [play, setPlay] = useState(true);
    const [valueVolume, setValueVolume] = useState(0);
    const [duration, setDuration] = useState('00:00');
    const [currentTime, setCurrentTime] = useState('00:00');
    const [seek, setSeek] = useState(0);
    const [perCent, setPerCent] = useState(0);

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
        const video = ref.current;

        if (video) {
            if (!actions) {
                video.play();
            } else {
                video.pause();
            }
        }
    }, [actions]);

    const handleOnchange = (e) => {
        setValueVolume(+e.target.value);
    };

    const handleSeek = (e) => {
        const video = ref.current;

        if (video && video.duration) {
            const PerCent = e.target.value;

            const currentTimeVideo = (PerCent * video.duration) / 100;

            setSeek(currentTimeVideo);
        }
    };

    useEffect(() => {
        const video = ref.current;

        if (video && video.duration) {
            video.currentTime = seek;
        }
    }, [seek]);

    useEffect(() => {
        const video = ref.current;

        if (video) {
            video.volume = valueVolume;
        }
    }, [valueVolume]);

    useEffect(() => {
        setTimeout(() => {
            const video = ref.current;

            if (video) {
                if (video.duration) {
                    setDuration(moment.utc(video.duration * 1000).format('mm:ss'));
                }
            }
        }, 200);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleTimeUpdate = (e) => {
        const video = ref.current;

        if (video && video.currentTime && video.duration) {
            setCurrentTime(
                video.currentTime
                    ? moment.utc(video.currentTime * 1000).format('mm:ss')
                    : moment.utc(0 * 1000).format('mm:ss'),
            );
            const perCentVideo = Math.floor((video.currentTime * 100) / video.duration);
            setPerCent(perCentVideo);
        }
    };

    return (
        <div className="video-container-details">
            {!_.isEmpty(data) && (
                <>
                    {!play && (
                        <div className="btn-toggle-video-play">
                            <FontAwesomeIcon icon={faPlay} />
                        </div>
                    )}
                    <video
                        onTimeUpdate={(e) => handleTimeUpdate(e)}
                        loop
                        autoPlay
                        ref={ref}
                        onClick={handleTogglePlayVideo}
                    >
                        <source src={data.file_url && data.file_url} />
                    </video>
                    <div className="seek">
                        <SeekVideo
                            perCent={perCent}
                            handleSeek={handleSeek}
                            currentTime={currentTime}
                            duration={duration}
                        />
                    </div>
                    <Render handleOnchange={handleOnchange} valueVolume={valueVolume} setValueVolume={setValueVolume} />
                </>
            )}
        </div>
    );
}

export default Video;
