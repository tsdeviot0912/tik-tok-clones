/* eslint-disable no-unused-vars */
import _ from 'lodash';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import { useDispatch, useSelector } from 'react-redux';

import './DetailVideo.scss';
import Video from './components/video/video';
import { GetDetailVideoByUuid } from '../../../../services';
import RenderRightConent from './components/Render.js/RenderRightContent';
import Comment from '../comments/comment';
import * as Actions from '../../../.././store/actions';
import useGetToken from '../../../../components/hooks/useGetToken';

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

function DetailVideo() {
    const token = useGetToken();

    const [linkCopy, setLinkCopy] = useState('http://localhost:3000/customer/home');
    const [DetailVideoState, setDetailVideoState] = useState({});
    const [isLoading, setIsloading] = useState(false);
    const [actions, setActions] = useState(false);
    const [listComment, setComment] = useState([]);
    const [commentText, setCommentText] = useState('');
    const [commentDetail, setCommentDetail] = useState({});
    const uuidParams = useParams();

    const disPatch = useDispatch();

    const listComments = useSelector((state) => state.SiteReducer.listComments);
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const detailComments = useSelector((state) => state.SiteReducer.detailComments);

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
        disPatch(Actions.getListComment(uuidParams.uuid, token));
    }, [uuidParams.uuid, isLoggedIn, disPatch, token, detailComments]);

    useEffect(() => {
        setCommentText('');
        setCommentDetail(detailComments);
    }, [detailComments]);

    const handleSubmitComment = () => {
        if (!commentText) {
            alert('Bạn hãy nhập nội dung comments của bạn !');
            return;
        }

        const dataBuild = {
            comment: commentText,
        };

        disPatch(Actions.createNewComment(dataBuild, uuidParams.uuid, token));
    };

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
                                    <Comment
                                        uuid={uuidParams.uuid ? uuidParams.uuid : ''}
                                        listComment={listComment}
                                        commentDetail={commentDetail}
                                    />
                                </div>
                                <div className="input-comment">
                                    <div className="input">
                                        <input
                                            value={commentText}
                                            onChange={(e) => setCommentText(e.target.value)}
                                            placeholder="Nhập comment của bạn"
                                            onKeyDown={(e) => {
                                                if (e.keyCode === 13) {
                                                    handleSubmitComment();
                                                }
                                            }}
                                        />
                                    </div>
                                    <div className="button-submit" onClick={handleSubmitComment}>
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
