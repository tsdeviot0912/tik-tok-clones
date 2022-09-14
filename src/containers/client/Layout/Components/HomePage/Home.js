import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import _ from 'lodash';

import ItemVideo from './ItemVideo';
import './Home.scss';
import * as actions from '../../../../.././store/actions';
import useGetToken from '../../../../../components/hooks/useGetToken';
import ModalRender from '../../../../../components/Popper/Modal';

function Home() {
    const disPatch = useDispatch();
    const listVideoLimit = useSelector((state) => state.SiteReducer.listVideoLimit);
    const MetaVideoType = useSelector((state) => state.SiteReducer.MetaVideoType);

    const [listVideo, setListVideo] = useState([]);
    const [metaVideo, setMetaVideo] = useState({});
    const [heightPage, setHeightPage] = useState(+0);
    const [WindowScollY, setWindowScollY] = useState(+0);
    const [type, setType] = useState('for-you');
    const [page, setPage] = useState(1);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setListVideo((prev) => {
            return [...prev, ...listVideoLimit];
        });
    }, [listVideoLimit]);

    useEffect(() => {
        setMetaVideo(MetaVideoType);
    }, [MetaVideoType]);

    const token = useGetToken();

    useEffect(() => {
        disPatch(actions.getVideoLimitType(type, page, token));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    const listenScrollEvent = () => {
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

    return (
        <>
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
            {isOpen && <ModalRender handleToggleModal={handleToggleModal} isOpen={isOpen} />}
        </>
    );
}
export default Home;
