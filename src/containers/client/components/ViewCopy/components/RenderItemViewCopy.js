import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useRef, useState } from 'react';

import PropTypes from 'prop-types';
import _ from 'lodash';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

RenderItemViewCopy.propTypes = {
    data: PropTypes.object.isRequired,
};

function RenderItemViewCopy({ data = {} }) {
    const ref = useRef(null);
    const history = useNavigate();

    const [time, setTime] = useState('00 : 00');

    const handlePlayItem = () => {
        const video = ref.current;

        if (video) {
            video.play();
        }
    };

    const handlePauseItem = () => {
        const video = ref.current;

        if (video) {
            video.currentTime = 0;

            video.pause();
        }
    };

    useEffect(() => {
        const video = ref.current;

        if (video) {
            setTime(
                video.duration
                    ? moment.utc(video.duration * 1000).format('mm:ss')
                    : moment.utc(0 * 1000).format('mm:ss'),
            );
        }
    }, []);

    const handleRedirect = (uuid) => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        history(`/customer/video-details-with-id-and-user/${uuid}/view=2`);
    };

    return (
        <div className="col-6 mb-4">
            {!_.isEmpty(data) && (
                <>
                    <div className="jsx-offer-video" onClick={() => handleRedirect(data.uuid)}>
                        <img src={data.thumb_url} alt="" />
                        <video ref={ref} onMouseLeave={handlePauseItem} onMouseEnter={handlePlayItem} muted>
                            <source src={data.file_url} />
                        </video>
                        <span className="duration">
                            {ref.current && ref.current.duration
                                ? moment.utc(ref.current.duration * 1000).format('mm:ss')
                                : moment.utc(0 * 1000).format('mm:ss')}
                        </span>
                    </div>
                    <div className="body">
                        <p>
                            <strong>{data.description}</strong>
                        </p>
                        <span className="jsx-title-name">
                            {!_.isEmpty(data.user) && (
                                <>
                                    {data.user.nickname}
                                    {data.user.tick && <FontAwesomeIcon icon={faCheckCircle} />}
                                </>
                            )}
                        </span>
                        <p className="b-block">
                            <span>{data.created_at.slice(0, 10)}</span>
                            <span>
                                <FontAwesomeIcon icon={faHeart} />
                                {data.likes_count}
                            </span>
                        </p>
                    </div>
                </>
            )}
        </div>
    );
}

export default RenderItemViewCopy;
