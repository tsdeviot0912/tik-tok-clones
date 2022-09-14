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
import { CustomScrollbars } from '../../../../components/Customs/Scrollbar';

const cx = classNames.bind(styles);

function Sidebar() {
    // defined state react
    const [page, setPage] = useState(1);
    const [suggestedUser, SetSuggestedUser] = useState([]);
    const [MetaPage, SetMetaPage] = useState({});

    const listUserSuggest = useSelector((state) => state.AccountReducer.listUserSuggest);
    const MetaAccount = useSelector((state) => state.AccountReducer.MetaAccount);

    const disPatch = useDispatch();

    const handleSellMore = () => {
        setPage((prev) => {
            if (!_.isEmpty(MetaPage.pagination) && page === MetaPage.pagination.total_pages) {
                return 1;
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
        SetSuggestedUser((prev) => {
            return [...prev, ...listUserSuggest];
        });
    }, [listUserSuggest]);

    useEffect(() => {
        SetMetaPage(MetaAccount);
    }, [MetaAccount]);

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
                    <SuggestAccount label="Tài khoản bạn đã theo dõi" />
                </Scrollbars>
            </aside>
        </>
    );
}

export default memo(Sidebar);
