import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import _ from 'lodash';

import './SearchPage.scss';
import * as actions from '../../../../.././store/actions';
import Image from '../../../../../components/Image';
import { SkeletonLoadingSearchPage } from '../../../../../components/SkelotonLoading';

function SearchPage() {
    const disPatch = useDispatch();
    const listUserSearch = useSelector((state) => state.SiteReducer.listUserSearch);
    const nodataSearch = useSelector((state) => state.SiteReducer.nodataSearch);
    const MetaSearchUser = useSelector((state) => state.SiteReducer.MetaSearchUser);
    const history = useNavigate();
    const userInfo = useSelector((state) => state.user.userInfo) || {};

    const [isUser, setIsUser] = useState(true);
    const [isTop, setIsTop] = useState(false);
    const [isuser, setIsUserNavi] = useState(true);
    const [isVideo, setIsVideo] = useState(false);
    const [listUser, setListUser] = useState([]);
    const [meta, setMeta] = useState({});
    const [page, setPage] = useState(1);
    const [isOpenBtnMore, setIsOpenMore] = useState(true);
    const [nodata, setNodata] = useState('');

    const params = useParams();

    useEffect(() => {
        setIsUser(true);
    }, []);

    useEffect(() => {
        setNodata(nodataSearch);
    }, [nodataSearch]);

    useEffect(() => {
        disPatch(actions.searchUserAndVideo(params.q, 'more', page));
    }, [disPatch, params.q, page]);

    useEffect(() => {
        setListUser([]);
    }, [params.q]);

    useEffect(() => {
        setListUser((prev) => [...prev, ...listUserSearch]);
    }, [listUserSearch]);

    useEffect(() => {
        setMeta(MetaSearchUser);

        if (!_.isEmpty(MetaSearchUser)) {
            if (MetaSearchUser.total_pages === page) {
                setIsOpenMore(false);
            }
        }
    }, [MetaSearchUser, page]);

    const handleRedirect = (data) => {
        if (userInfo.id === data.id) {
            history(`/profile/me-tai-khoan-cua-toi`);
        } else {
            history(`/profile/@${data.nickname}/${data.id} `);
        }
    };

    const handleClickSeeMore = () => {
        if (meta.total_pages > page) {
            setPage(page + 1);
        } else {
            setIsOpenMore(false);
        }
    };

    useEffect(() => {
        if (params.q) {
            document.title = `Tìm kiếm ${params.q} trên Tik Tok`;
        }
    }, [params.q]);

    return (
        <div className="search-wrapper-page">
            <div className="navigate">
                <span
                    className={isTop ? 'active' : ''}
                    onMouseOver={() => {
                        setIsTop(true);
                        setIsUserNavi(false);
                        setIsVideo(false);
                    }}
                    onMouseOut={() => {
                        setIsTop(false);
                        setIsUserNavi(true);
                        setIsVideo(false);
                    }}
                >
                    Top
                    {isTop && <div className="hover-scroll"></div>}
                </span>
                <span className={isuser ? 'active' : ''}>
                    Tài khoản
                    {isuser && <div className="hover-scroll"></div>}
                </span>
                <span
                    onMouseOver={() => {
                        setIsVideo(true);
                        setIsTop(false);
                        setIsUserNavi(false);
                    }}
                    onMouseOut={() => {
                        setIsVideo(false);
                        setIsTop(false);
                        setIsUserNavi(true);
                    }}
                    className={isVideo ? 'active' : ''}
                >
                    Video
                    {isVideo && <div className="hover-scroll"></div>}
                </span>
            </div>
            <div className="body">
                {isUser && (
                    <div className="content-user">
                        {!nodata ? (
                            listUser && listUser.length > 0 ? (
                                listUser.map((item) => (
                                    <div className="item-user" key={item.id} onClick={() => handleRedirect(item)}>
                                        <div className="logo">
                                            <Image src={item.avatar ? item.avatar : ''} alt="" />
                                        </div>
                                        <div className="content-and-title">
                                            <p className="top">
                                                <strong>{item.nickname}</strong>
                                                {item.tick && <FontAwesomeIcon icon={faCheckCircle} />}
                                            </p>
                                            <p className="center">
                                                <span>{`${item.first_name} ${item.last_name}`}</span>
                                                <span>
                                                    <b>{item.followers_count}</b> Follow
                                                </span>
                                            </p>
                                            <p className="bottom">
                                                <span>{item.bio || 'Đang cập nhật'}</span>
                                            </p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <SkeletonLoadingSearchPage />
                            )
                        ) : (
                            <p>{nodata}</p>
                        )}

                        {isOpenBtnMore && (
                            <div className="call-more" onClick={() => handleClickSeeMore()}>
                                <button className="btn">Xem Thêm</button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default SearchPage;
