import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Button from '../../../../components/Button/Button';
import styles from './Header.module.scss';
import images from '../../../.././assets/img';
import { Menu } from '../../../../components/Popper';
import { UploadIcon, MessageIcon, IconAddUpload } from '../../../../components/Icons';
import Search from '../Search';
import Image from '../../../../components/Image';
import ModalRender from '../../../../components/Popper/Modal';
// import * as action from '../../../../store/actions';
import _ from 'lodash';

const cx = classNames.bind(styles);

const MenuItem = [
    {
        icon: <img src={images.language} alt="LG" />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'eng',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vie',
                    title: 'Tiếng Việt (Việt Nam)',
                },
            ],
        },
    },
    {
        icon: <img src={images.faqs} alt="LFAQ" />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <img src={images.keyboard} alt="BS" />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    // user login
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const userInfo = useSelector((state) => state.user.userInfo);
    const CurrentUserProfile = useSelector((state) => state.SiteReducer.CurrentUserProfile);

    // defined state react
    const [isOpen, setIsOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState(isLoggedIn);
    const [user, setSetUser] = useState(userInfo);

    useEffect(() => {
        setCurrentUser(isLoggedIn);
    }, [isLoggedIn]);

    useEffect(() => {
        setSetUser(userInfo);
    }, [userInfo]);

    // handle logic
    function handleMenuChange(menuItem) {
        // console.log(menuItem);
    }

    useEffect(() => {
        if (!_.isEmpty(CurrentUserProfile)) {
            setSetUser(CurrentUserProfile);
        }
    }, [CurrentUserProfile]);

    // when user login
    const userMenu = [
        {
            icon: <img src={images.user} alt="LFAQ" />,
            title: 'View profile',
            to: '/profile/me-tai-khoan-cua-toi',
        },
        {
            icon: <img src={images.coins} alt="LFAQ" />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <img src={images.settings} alt="LFAQ" />,
            title: 'Settings',
            to: '/setting',
        },
        ...MenuItem,
        {
            icon: <img src={images.logout} alt="LFAQ" />,
            title: 'Log out',
            to: '/logout',
            separate: 'HT',
        },
    ];

    const handleToggleModal = useCallback(() => {
        setIsOpen(!isOpen);
    }, [isOpen]);

    return (
        <>
            <header className={cx('wrapper')}>
                <div className={cx('container customize')}>
                    <div className={cx('inner')}>
                        <div className={cx('logo')}>
                            <Link to="/">
                                <img src={images.logo} alt="Có lỗi xảy ra với API" />
                            </Link>
                        </div>
                        <Search />
                        <div className={cx('actions')}>
                            {currentUser ? (
                                <>
                                    <Tippy
                                        delay={[0, 200]}
                                        content="Upload video"
                                        placement="bottom"
                                        zIndex={99999999999}
                                    >
                                        <Link
                                            to="/upload/stepone"
                                            className={cx('btn-currentUser', 'chuk-jsx-npc-s-add-upload')}
                                        >
                                            <IconAddUpload />
                                            <span>Tải lên</span>
                                        </Link>
                                    </Tippy>
                                    <Tippy delay={[0, 200]} content="Message" placement="bottom" zIndex={99999999999}>
                                        <button className={cx('btn-currentUser', 'btn-currentUser-2')}>
                                            <MessageIcon />
                                        </button>
                                    </Tippy>
                                    <Tippy delay={[0, 200]} content="Inbox" placement="bottom" zIndex={99999999999}>
                                        <button className={cx('btn-currentUser')}>
                                            <img className={cx('img-btn-user')} src={images.maill} alt="" />
                                        </button>
                                    </Tippy>
                                </>
                            ) : (
                                <>
                                    <Button text to="/upload">
                                        <span className="chuk-jsx-npc-s-add-upload">
                                            <IconAddUpload />
                                            Tải lên
                                        </span>
                                    </Button>
                                    <Button
                                        primary
                                        onClick={() => {
                                            handleToggleModal();
                                        }}
                                    >
                                        Log in
                                    </Button>
                                </>
                            )}
                            <Menu items={currentUser ? userMenu : MenuItem} onChange={handleMenuChange}>
                                {currentUser ? (
                                    !_.isEmpty(user) && (
                                        <Image
                                            src={user.avatar}
                                            alt="Nguyễn Trường Sơn"
                                            className={cx('user-avatar')}
                                            fallback="https://gcdnb.pbrd.co/images/r39nV6NMtqjW.jpg"
                                        />
                                    )
                                ) : (
                                    <button className={cx('more-btn')}>
                                        <FontAwesomeIcon className={cx('icon-login')} icon={faEllipsisVertical} />
                                    </button>
                                )}
                            </Menu>
                        </div>
                    </div>
                </div>
            </header>
            {isOpen && <ModalRender handleToggleModal={handleToggleModal} isOpen={isOpen} />}
        </>
    );
}

export default Header;
