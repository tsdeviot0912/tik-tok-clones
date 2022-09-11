import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};

function MenuItem({ title, to, icon, activeIcon }) {
    return (
        <NavLink
            to={to}
            className={(nav) => {
                return cx('menu-item', { active: nav.isActive });
            }}
        >
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('icon-active')}>{activeIcon}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

export default MenuItem;
