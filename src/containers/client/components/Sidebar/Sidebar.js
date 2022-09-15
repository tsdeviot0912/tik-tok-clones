import classNames from 'classnames/bind';
import { useState, useEffect, memo } from 'react';
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

const cx = classNames.bind(styles);

function Sidebar() {
    const Token = useGetToken();

    // defined state react
    const [page, setPage] = useState(1);
    const [pageFollow, setPageFollow] = useState(1);
    const [suggestedUser, SetSuggestedUser] = useState([]);
    const [listFollowAccount, setListFollowAccount] = useState([]);
    const [MetaPage, SetMetaPage] = useState({});
    const [MetaPageFollow, SetMetaPageFollow] = useState({});

    const listUserSuggest = useSelector((state) => state.AccountReducer.listUserSuggest);
    const MetaAccount = useSelector((state) => state.AccountReducer.MetaAccount);
    const listFollow = useSelector((state) => state.SiteReducer.listFollow);
    const metaFollow = useSelector((state) => state.SiteReducer.metaFollow);

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
        disPatch(action.getSuggestedAccountLimitAction(page, 5));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    useEffect(() => {
        emitter.on('PAGE_CURRENT_FOLLOWS', () => {
            handleSellMoreFollow();
        });

        disPatch(action.getListFollowings(pageFollow, Token));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageFollow]);

    useEffect(() => {
        SetSuggestedUser((prev) => {
            return [...prev, ...listUserSuggest];
        });
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

    return (
        <>
            <aside className={cx('wrapper')}>
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
                    <SuggestAccount label="Tài khoản được đề xuất" data={suggestedUser} onSeeAll={handleSellMore} />
                    <SuggestAccount
                        label="Tài khoản bạn đã theo dõi"
                        data={listFollowAccount}
                        onSeeAll={handleSellMoreFollow}
                        isFollow={true}
                    />
                </Scrollbars>
            </aside>
        </>
    );
}

export default memo(Sidebar);
