import { faPause, faPlay, faVolumeXmark, faVolumeDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

import './ControlVideo.scss';

ControlVideo.propTypes = {
    play: PropTypes.bool.isRequired,
    handleToggle: PropTypes.func.isRequired,
    handleOnchange: PropTypes.func.isRequired,
    valueVolume: PropTypes.number.isRequired,
    setValueVolume: PropTypes.func,
};

function ControlVideo({ play, handleToggle, handleOnchange, valueVolume, setValueVolume }) {
    return (
        <div className="control-video-wrapper">
            <div className="d-flex justify-content-between">
                <div className="play-video-icon" onClick={handleToggle}>
                    {play ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
                </div>
                <div className="volume">
                    <input
                        id="progress"
                        type="range"
                        step="0.05"
                        min="0"
                        max="1"
                        onChange={(e) => handleOnchange(e)}
                        value={valueVolume}
                    />
                    {valueVolume === 0 ? (
                        <FontAwesomeIcon icon={faVolumeXmark} onClick={() => setValueVolume(0.3)} />
                    ) : (
                        <FontAwesomeIcon icon={faVolumeDown} onClick={() => setValueVolume(0)} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default ControlVideo;
