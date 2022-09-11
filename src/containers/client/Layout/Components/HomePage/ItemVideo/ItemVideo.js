import { faComment, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import ControlVideo from '../components/ControlVideo';
import HeaderVideo from '../components/HeaderVideo';
import './ItemVideo.scss';
import { useOnScreen } from '../../../../../../components/hooks';

ItemVideo.propTypes = {
    data: PropTypes.object.isRequired,
};

function ItemVideo({ data }) {
    const [play, setPlay] = useState(false);
    const [valueVolume, setValueVolume] = useState(+0);
    const [Check, setCheck] = useState(false);
    const ref = useRef(null);

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

    return (
        <div className="wrapper-item-video">
            {!_.isEmpty(data) && (
                <>
                    <div className="header">
                        <HeaderVideo data={data} />
                    </div>
                    <div className="d-flex">
                        <div className="video-container">
                            <video ref={ref} onClick={handleToggle} loop>
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
                                <button>
                                    <FontAwesomeIcon icon={faHeart} />
                                </button>
                                <strong>{data.likes_count}</strong>
                            </div>
                            <div>
                                <button>
                                    <FontAwesomeIcon icon={faComment} />
                                </button>
                                <strong>{data.comments_count}</strong>
                            </div>
                            <div>
                                <button>
                                    <FontAwesomeIcon icon={faShare} />
                                </button>
                                <strong>{data.shares_count}</strong>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default ItemVideo;
