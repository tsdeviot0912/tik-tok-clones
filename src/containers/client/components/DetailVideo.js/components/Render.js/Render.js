import { faFlag } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown, faAngleUp, faClose, faVolumeDown, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { IconLogo, IconMuteVolume, IconNoMuteVolume } from '../../../../../../components/Icons';

function Render({ valueVolume, setValueVolume, handleOnchange = () => {} }) {
    const history = useNavigate();

    const handleback = () => {
        history(-1);
    };

    return (
        <div>
            <div className="header d-flex justify-content-between align-items-center">
                <div>
                    <button className="btn close" onClick={() => handleback()}>
                        <FontAwesomeIcon icon={faClose} />
                    </button>
                    <Link to="/customer/home" className="btn">
                        <IconLogo />
                    </Link>
                </div>
                <div>
                    <button className="btn report">
                        <FontAwesomeIcon icon={faFlag} />
                        Report
                    </button>
                </div>
            </div>
            <div className="next-prev">
                <div>
                    <FontAwesomeIcon icon={faAngleUp} />
                </div>
                <div>
                    <FontAwesomeIcon icon={faAngleDown} />
                </div>
                <div className="prev-next-volume volume">
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
                        <span onClick={() => setValueVolume(0.3)}>
                            <IconMuteVolume />
                        </span>
                    ) : (
                        <span onClick={() => setValueVolume(0)}>
                            <IconNoMuteVolume />
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Render;
