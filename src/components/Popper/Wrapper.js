import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
    // custom: PropTypes.string,
};

function Wrapper({ children, custom }) {
    return (
        <div
            className={cx('wrapper', {
                custom,
            })}
        >
            {children}
        </div>
    );
}

export default Wrapper;
