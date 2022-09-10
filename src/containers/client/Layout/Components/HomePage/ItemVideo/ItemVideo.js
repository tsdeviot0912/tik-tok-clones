import { faComment, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import ControlVideo from '../components/ControlVideo';
import HeaderVideo from '../components/HeaderVideo';
import './ItemVideo.scss';

ItemVideo.propTypes = {
    data: PropTypes.object.isRequired,
};

function ItemVideo({ data }) {
    const [play, setPlay] = useState(false);
    const [valueVolume, setValueVolume] = useState(+0.2);
    const ref = useRef(null);

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
                            <ControlVideo
                                play={play}
                                handleToggle={handleToggle}
                                handleOnchange={handleOnchange}
                                valueVolume={valueVolume}
                                setValueVolume={setValueVolume}
                            />
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
