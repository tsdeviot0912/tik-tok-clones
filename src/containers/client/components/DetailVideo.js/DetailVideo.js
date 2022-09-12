/* eslint-disable no-unused-vars */
import _ from 'lodash';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import Cookies from 'universal-cookie';
import { useDispatch, useSelector } from 'react-redux';

import './DetailVideo.scss';
import Video from './components/video/video';
import { GetDetailVideoByUuid } from '../../../../services';
import RenderRightConent from './components/Render.js/RenderRightContent';
import Comment from '../comments/comment';
import * as Actions from '../../../.././store/actions';

let hidden = null;
let visibilityChange = null;
if (typeof document.hidden !== 'undefined') {
    // Opera 12.10 and Firefox 18 and later support
    hidden = 'hidden';
    visibilityChange = 'visibilitychange';
} else if (typeof document.msHidden !== 'undefined') {
    hidden = 'msHidden';
    visibilityChange = 'msvisibilitychange';
} else if (typeof document.webkitHidden !== 'undefined') {
    hidden = 'webkitHidden';
    visibilityChange = 'webkitvisibilitychange';
}

const cookies = new Cookies();

function DetailVideo() {
    const [linkCopy, setLinkCopy] = useState('http://localhost:3000/customer/home');
    const [DetailVideoState, setDetailVideoState] = useState({});
    const [isLoading, setIsloading] = useState(false);
    const [actions, setActions] = useState(false);
    const [listComment, setComment] = useState([]);
    const uuidParams = useParams();

    const disPatch = useDispatch();

    const listComments = useSelector((state) => state.SiteReducer.listComments);

    useEffect(() => {
        const fetCh = async () => {
            if (window && window.Location && window.location.href) {
                setLinkCopy(window.location.href);
            }

            try {
                setIsloading(true);
                const Res = await GetDetailVideoByUuid(uuidParams.uuid || '');
                if (Res && Res.data && !_.isEmpty(Res.data)) {
                    setDetailVideoState(Res.data);
                    setIsloading(false);
                }
            } catch (error) {
                console.log(error);
                setDetailVideoState({});
            }
        };

        fetCh();
    }, [uuidParams.uuid]);

    useEffect(() => {
        document.addEventListener(visibilityChange, handleVisibilityChange, false);

        // clear up function
        return () => document.removeEventListener(visibilityChange, handleVisibilityChange);
    }, []);

    const handleVisibilityChange = () => {
        if (document[hidden]) {
            setActions(true);
        } else {
            setActions(false);
        }
    };
    useEffect(() => {
        setComment(listComments);
    }, [listComments]);

    useEffect(() => {
        disPatch(Actions.getListComment(uuidParams.uuid));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [uuidParams.uuid]);

    console.log('check :', listComment);

    return (
        <div className="detail-video-container">
            <div className="wrapper-detail-video-content">
                {DetailVideoState && !_.isEmpty(DetailVideoState) && (
                    <>
                        <div className="left-content">
                            <div className="video-render">
                                <Video actions={false} data={DetailVideoState} />
                            </div>
                        </div>
                        <div className="right-content">
                            <div className="up">
                                <RenderRightConent linkCopy={linkCopy} DetailVideoState={DetailVideoState} />
                            </div>
                            <div className="body down">
                                <div className="body-comment">
                                    <Comment listComment={listComment} />
                                </div>
                                <div className="input-comment">
                                    <div className="input">
                                        <input placeholder="Nhập comment của bạn" />
                                    </div>
                                    <div className="button-submit">
                                        <button className="btn">Đăng</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
            {isLoading && (
                <ReactLoading
                    type={'bubbles'}
                    color={'blue'}
                    className="loading-fixed"
                    height={'100vh'}
                    width={'100%'}
                />
            )}
        </div>
    );
}

export default DetailVideo;
