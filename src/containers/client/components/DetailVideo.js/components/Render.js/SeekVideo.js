import PropTypes from 'prop-types';

SeekVideo.propTypes = {
    handleSeek: PropTypes.func.isRequired,
    currentTime: PropTypes.string,
    duration: PropTypes.string,
    perCent: PropTypes.number,
};

function SeekVideo({ handleSeek, currentTime, duration, perCent }) {
    return (
        <div className="video-container-details-seek">
            <input
                onChange={(e) => handleSeek(e)}
                value={perCent}
                className="seek"
                type="range"
                step="1"
                min="0"
                max="100"
            />
            <div>
                <span>{currentTime}</span>
                <span> / </span>
                <span>{duration}</span>
            </div>
        </div>
    );
}

export default SeekVideo;
