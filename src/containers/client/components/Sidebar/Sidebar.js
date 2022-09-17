import classNames from 'classnames/bind';
import { useState, useEffect, memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { Scrollbars } from 'react-custom-scrollbars';

import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import { HomeActiveIcon, HomeIcon, LiveIcon, UserGroupIcon } from '../../../../components/Icons';
import { UserGroupActiveIcon, LiveActiveIcon } from '../../../../components/Icons/Icons';
import SuggestAccount from '../../../../components/SuggestAccount';
import { path } from '../../../../utils/constant';
import * as action from '../../../../store/actions';
import useGetToken from '../../../../components/hooks/useGetToken';
import { emitter } from '../../../../utils/emitter';
import ModalRender from '../../../../components/Popper/Modal';

const cx = classNames.bind(styles);

function Sidebar({ classNameCustom = '', isHiddenTippy = false }) {
    const Token = useGetToken();

    // defined state react
    const [page, setPage] = useState(1);
    const [pageFollow, setPageFollow] = useState(1);
    const [suggestedUser, SetSuggestedUser] = useState([]);
    const [listFollowAccount, setListFollowAccount] = useState([]);
    const [MetaPage, SetMetaPage] = useState({});
    const [MetaPageFollow, SetMetaPageFollow] = useState({});
    const [isOpen, setIsOpen] = useState(false);
    const detailFollowAndUnFollow = useSelector((state) => state.SiteReducer.detailFollowAndUnFollow);
    const [count, setCount] = useState(5);

    const listUserSuggest = useSelector((state) => state.AccountReducer.listUserSuggest);
    const MetaAccount = useSelector((state) => state.AccountReducer.MetaAccount);
    const listFollow = useSelector((state) => state.SiteReducer.listFollow);
    const metaFollow = useSelector((state) => state.SiteReducer.metaFollow);
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

    useEffect(() => {
        SetSuggestedUser((prev) => {
            const dataBuild = prev.map((data) => {
                if (data.id === detailFollowAndUnFollow.id) {
                    return detailFollowAndUnFollow;
                }

                return data;
            });

            return [...dataBuild];
        });
    }, [detailFollowAndUnFollow]);

    const disPatch = useDispatch();

    const handleSellMore = () => {
        setPage((prev) => {
            if (!_.isEmpty(MetaPage.pagination) && page === +MetaPage.pagination.total_pages) {
                return 1;
            } else {
                return prev + 1;
            }
        });
    };

    const handleSellMoreFollow = () => {
        setPageFollow((prev) => {
            if (!_.isEmpty(MetaPageFollow.pagination) && pageFollow === +MetaPageFollow.pagination.total_pages) {
                return prev;
            } else {
                return prev + 1;
            }
        });
    };

    useEffect(() => {
        disPatch(action.getSuggestedAccountLimitAction(page, count, Token));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, count]);

    useEffect(() => {
        emitter.on('PAGE_CURRENT_FOLLOWS', () => {
            handleSellMoreFollow();
        });

        if (isLoggedIn) {
            disPatch(action.getListFollowings(pageFollow, Token));
        }
    }, [pageFollow, disPatch, isLoggedIn, Token]);

    const handleToggleModal = useCallback(() => {
        setIsOpen(!isOpen);
    }, [isOpen]);

    useEffect(() => {
        if (listUserSuggest && listUserSuggest.length > 3) {
            SetSuggestedUser((prev) => {
                const ArrClone = [...prev, ...listUserSuggest];

                let data = [];

                if (ArrClone && ArrClone.length > 0) {
                    data = ArrClone.filter((item) => !item.is_followed);
                }

                return data;
            });
        }
    }, [listUserSuggest]);

    useEffect(() => {
        setListFollowAccount((prev) => [...prev, ...listFollow]);
    }, [listFollow]);

    useEffect(() => {
        SetMetaPage(MetaAccount);
    }, [MetaAccount]);

    useEffect(() => {
        SetMetaPageFollow(metaFollow);
    }, [metaFollow]);

    useEffect(() => {
        if (suggestedUser && suggestedUser.length > 0 && suggestedUser.length <= 3) {
            console.log('check dieu kien :', suggestedUser && suggestedUser.length <= 3);
            setPage((prev) => prev + 1);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <aside className={cx('wrapper', `${classNameCustom}`)}>
                <Scrollbars
                    styles={{
                        height: '100vh',
                    }}
                    autoHide={true}
                    // onAnimationStart="none"
                >
                    <Menu>
                        <MenuItem
                            title="For You"
                            to="/customer/home"
                            icon={<HomeIcon />}
                            activeIcon={<HomeActiveIcon />}
                        />
                        <MenuItem
                            title="Following"
                            to={path.sliDebar.follow}
                            icon={<UserGroupIcon />}
                            activeIcon={<UserGroupActiveIcon />}
                        />
                        <MenuItem
                            title="Live"
                            to={path.sliDebar.live}
                            icon={<LiveIcon />}
                            activeIcon={<LiveActiveIcon />}
                        />
                    </Menu>
                    <SuggestAccount
                        label="Tài khoản được đề xuất"
                        data={suggestedUser}
                        onSeeAll={handleSellMore}
                        isHiddenTippy={isHiddenTippy}
                    />
                    {isLoggedIn ? (
                        <SuggestAccount
                            label="Tài khoản bạn đã theo dõi"
                            data={listFollowAccount}
                            onSeeAll={handleSellMoreFollow}
                            isFollow={true}
                        />
                    ) : (
                        <>
                            <p className="my-2 text-center no-login-title">Tài khoản theo dõi</p>
                            <div className="d-flex justify-content-center my-2">
                                <button className="btn no-login-btn" onClick={handleToggleModal}>
                                    Đăng nhập để xem những tài khoản theo dõi
                                </button>
                            </div>
                        </>
                    )}
                </Scrollbars>
            </aside>
            {isOpen && <ModalRender isOpen={isOpen} handleToggleModal={handleToggleModal} />}
        </>
    );
}

export default memo(Sidebar);
