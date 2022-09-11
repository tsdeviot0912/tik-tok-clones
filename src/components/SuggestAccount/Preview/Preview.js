import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import Button from '../../../components/Button';
import './Preview.scss';
import Image from '../../../components/Image';

Preview.propTypes = {
    data: PropTypes.object.isRequired,
};

function Preview({ data = {} }) {
    return (
        <div className="preview-wrapper" tabIndex={-1}>
            <header>
                <Image src={data.avatar} alt={data.nickname} />
                <Button primary>Follow</Button>
            </header>
            <div className="body">
                <h2>
                    {data.nickname}
                    {data.tick && <FontAwesomeIcon icon={faCheckCircle} />}
                </h2>
                <p>{`${data.first_name} ${data.last_name}`}</p>
            </div>
            <div className="introduce">
                <span>
                    <strong>{data.followers_count}</strong>
                    Follower
                </span>
                <span>
                    <strong>{data.likes_count}</strong>
                    Thích
                </span>
            </div>
        </div>
    );
}

export default Preview;
