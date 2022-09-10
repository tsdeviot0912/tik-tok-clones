import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';

import ItemVideo from './ItemVideo';
import './Home.scss';
import * as actions from '../../../../.././store/actions';
import _ from 'lodash';

function Home() {
    const disPatch = useDispatch();

    const ref = useRef(null);
    const listVideoLimit = useSelector((state) => state.SiteReducer.listVideoLimit);
    const MetaVideoType = useSelector((state) => state.SiteReducer.MetaVideoType);

    const [listVideo, setListVideo] = useState([]);
    const [metaVideo, setMetaVideo] = useState({});
    const [heightPage, setHeightPage] = useState(+0);
    const [WindowScollY, setWindowScollY] = useState(+0);
    const [type, setType] = useState('for-you');
    const [page, setPage] = useState(1);

    useEffect(() => {
        setListVideo((prev) => {
            return [...prev, ...listVideoLimit];
        });
    }, [listVideoLimit]);

    useEffect(() => {
        setMetaVideo(MetaVideoType);
    }, [MetaVideoType]);

    useEffect(() => {
        disPatch(actions.getVideoLimitType(type, page));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    const handleScrollNextPage = () => {};

    const listenScrollEvent = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            setWindowScollY(Math.floor(window.innerHeight + window.scrollY));
        }

        if (heightPage !== document.documentElement.scrollHeight) {
            setHeightPage(Math.floor(document.documentElement.scrollHeight));
        }

        console.log('check true :', WindowScollY > 2000 && WindowScollY === heightPage);

        handleScrollNextPage();
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

    return (
        <div className="home-page-container" ref={ref}>
            {listVideo &&
                listVideo.length > 0 &&
                listVideo.map((data, index) => (
                    <ItemVideo data={data} key={!_.isEqual(data) && !_.isEqual(data.user) && index} />
                ))}
        </div>
    );
}
export default Home;
