import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import _ from 'lodash';
import { BrowserView, MobileView } from 'react-device-detect';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { useCallback } from 'react';

import ItemVideo from './ItemVideo';
import './Home.scss';
import * as actions from '../../../../.././store/actions';
import useGetToken from '../../../../../components/hooks/useGetToken';
import ModalRender from '../../../../../components/Popper/Modal';
import { LoadingHome } from '../../../../../components/SkelotonLoading';
import { GetVideoLimitType } from '../../../../../services';
import {
    IconHomeMobile,
    IconSearch,
    IconsUserUnFollow,
    IconUploadMobile,
    MessageIcon,
} from '../../../../../components/Icons';

function Home() {
    const settings = {
        dots: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        arrow: false,
        beforeChange: (currentIndex, nextIndex) => {
            if (currentIndex === nextIndex) {
                if (!_.isEmpty(metaVideo) && page === metaVideo.total_pages) {
                    setPage((prev) => prev);
                } else {
                    setPage((prev) => prev + 1);
                }
            }
        },
    };

    const ref = useRef(null);

    const disPatch = useDispatch();
    const listVideoLimit = useSelector((state) => state.SiteReducer.listVideoLimit);
    const MetaVideoType = useSelector((state) => state.SiteReducer.MetaVideoType);
    const detailOneVideo = useSelector((state) => state.SiteReducer.detailOneVideo);
    const detailFollowAndUnFollow = useSelector((state) => state.SiteReducer.detailFollowAndUnFollow);

    const [listVideo, setListVideo] = useState([]);
    const [metaVideo, setMetaVideo] = useState({});
    const [heightPage, setHeightPage] = useState(+0);
    const [WindowScollY, setWindowScollY] = useState(+0);
    const [type, setType] = useState('for-you');
    const [page, setPage] = useState(1);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenSkeloton, setIsOpenSkeloton] = useState(false);
    const [isShow, setIsShow] = useState(true);
    const [view, setView] = useState('');

    // useEffect(() => {
    //     setListVideo((prev) => [...prev, ...listVideoLimit]);

    //     return;
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [listVideoLimit]);

    useEffect(() => {
        if (listVideo && listVideo.length > 0) {
            const UpdateListVideo = listVideo.map((item) => {
                if (item.uuid === detailOneVideo.uuid) {
                    return detailOneVideo;
                }

                return item;
            });

            setListVideo(UpdateListVideo);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [detailOneVideo]);

    useEffect(() => {
        setMetaVideo(MetaVideoType);
    }, [MetaVideoType]);

    useEffect(() => {
        if (listVideo && listVideo.length === 0) {
            setIsOpenSkeloton(true);
        } else {
            setIsOpenSkeloton(false);
        }
    }, [listVideo]);

    const token = useGetToken();

    useEffect(() => {
        // disPatch(actions.getVideoLimitType(type, page, token));

        const fetch = async () => {
            const Res = await GetVideoLimitType(type, page, token);

            if (Res && Res.data && Res.data.length > 0) {
                setListVideo((prev) => [...prev, ...Res.data]);
            }
        };

        fetch();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    const listenScrollEvent = () => {
        if (window.scrollY <= 70) {
            setView('');
        } else if (window.scrollY >= 70) {
            setView('view__slide__down');
        }

        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            setWindowScollY(Math.floor(window.innerHeight + window.scrollY));
        }

        if (heightPage !== document.documentElement.scrollHeight) {
            setHeightPage(Math.floor(document.documentElement.scrollHeight));
        }
    };

    useEffect(() => {
        if ((WindowScollY === heightPage || WindowScollY === heightPage - 1) && WindowScollY > 6000) {
            if (!_.isEmpty(metaVideo) && page === metaVideo.total_pages) {
                setPage((prev) => prev);
            } else {
                setPage((prev) => prev + 1);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [WindowScollY, heightPage]);

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);

        return () => {
            window.removeEventListener('scroll', listenScrollEvent);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleClickHeart = (uuid, token, toggle) => {
        if (!toggle) {
            disPatch(actions.likeOneVideo(uuid, token, type, page));
        } else {
            disPatch(actions.unLikeOneVideo(uuid, token));
        }
    };

    const handleToggleModal = () => {
        setIsOpen(!isOpen);
    };

    const Skeloton = useCallback(() => {
        return <LoadingHome />;
    }, []);

    useEffect(() => {
        setListVideo((prev) => {
            const dataBuild = prev.map((item) => {
                if (item.user_id === detailFollowAndUnFollow.id) {
                    item.user = detailFollowAndUnFollow;
                }

                return item;
            });

            return [...dataBuild];
        });
    }, [detailFollowAndUnFollow]);

    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        document.title = 'TikTok - Make Your Day';
    }, []);

    return (
        <>
            <BrowserView>
                <div className="home-page-container">
                    {listVideo &&
                        listVideo.length > 0 &&
                        listVideo.map((data, index) => (
                            <ItemVideo
                                handleToggleModal={handleToggleModal}
                                data={data}
                                handleClickHeart={handleClickHeart}
                                key={!_.isEqual(data) && !_.isEqual(data.user) && index}
                            />
                        ))}
                </div>
                {isOpenSkeloton && <Skeloton />}
                {isOpen && <ModalRender handleToggleModal={handleToggleModal} isOpen={isOpen} />}
                <div className={view ? 'scroll-top animation-btn' : 'scroll-top'} onClick={handleScroll}>
                    <button type="submit">
                        <FontAwesomeIcon icon={faAngleUp} />
                    </button>
                </div>
            </BrowserView>
            <MobileView>
                <div className="home-page-container-mobile">
                    <Slider {...settings} ref={ref}>
                        {listVideo &&
                            listVideo.length > 0 &&
                            listVideo.map((data, index) => (
                                <ItemVideo
                                    setIsShow={setIsShow}
                                    handleToggleModal={handleToggleModal}
                                    data={data}
                                    handleClickHeart={handleClickHeart}
                                    key={!_.isEqual(data) && !_.isEqual(data.user) && index}
                                />
                            ))}
                    </Slider>
                </div>
                {isShow && (
                    <div className="nav-fixed-mobile">
                        <div className="container">
                            <div className="parents-nav-mobile">
                                <div className="item-nav-mobile">
                                    <IconHomeMobile />
                                </div>
                                <div className="item-nav-mobile">
                                    <IconSearch />
                                </div>
                                <div className="item-nav-mobile">
                                    <IconUploadMobile />
                                </div>
                                <div className="item-nav-mobile">
                                    <MessageIcon />
                                </div>
                                <div className="item-nav-mobile">
                                    <IconsUserUnFollow />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <div className="nav-fixed-mobile-top">
                    <div className="container">
                        <div className="parents-nav-mobile-top">
                            <div className="item-nav-mobile-top">
                                <span>Đang Follow</span>
                            </div>
                            <div className="item-nav-mobile-top active">
                                <span>Dành Cho Bạn</span>
                            </div>
                        </div>
                    </div>
                </div>
                {isOpenSkeloton && <Skeloton />}
                {isOpen && <ModalRender handleToggleModal={handleToggleModal} isOpen={isOpen} />}
            </MobileView>
        </>
    );
}
export default Home;
