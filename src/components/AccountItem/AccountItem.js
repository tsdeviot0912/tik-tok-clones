import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './AccountItem.module.scss';
import PropTypes from 'prop-types';

import img from '../../assets/img';
import Image from '../../components/Image';
import { useSelector } from 'react-redux';

const cx = classNames.bind(styles);

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

function AccountItem({ data }) {
    const userInfo = useSelector((state) => state.user.userInfo) || {};

    return (
        <Link
            to={data.id === userInfo.id ? '/profile/me-tai-khoan-cua-toi' : `/profile/@${data.nickname}/${data.id}`}
            className={cx('wrapper')}
        >
            <span className={cx('avata')}>
                <Image src={data.avatar} alt={data.last_name} />
            </span>
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    {data.nickname}
                    {data.tick && <img src={img.check} alt="Người nổi tiếng" />}
                </h4>
                <p className={cx('name')}>{data.full_name}</p>
            </div>
        </Link>
    );
}

export default AccountItem;
