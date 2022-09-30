/* eslint-disable no-unused-vars */
import _, { replace } from 'lodash';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import { useDispatch, useSelector } from 'react-redux';
import Picker from 'emoji-picker-react';
import Tippy from '@tippyjs/react';
import { HashLoader } from 'react-spinners';
import { useBeforeunload } from 'react-beforeunload';

import './DetailVideo.scss';
import Video from './components/video/video';
import { GetDetailVideoByUuid } from '../../../../services';
import RenderRightConent from './components/Render.js/RenderRightContent';
import Comment from '../comments/comment';
import * as Actions from '../../../.././store/actions';
import useGetToken from '../../../../components/hooks/useGetToken';
import ModalRender from '../../../../components/Popper/Modal';
import { IconEmoj } from '../../../../components/Icons';
import Redirect from '../../../.././routes/redirect/Redirect';
import { useRef } from 'react';

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

const handlePushReload = (uuidParams) => {
    window.location.href = `/customer/video-details-with-id-and-user/${uuidParams.uuid}/view=2`;
    window.location.replace(`/customer/video-details-with-id-and-user/b3b57b14-eff1-4d3b-af13-fe9714156b80/view=2`);
};

function DetailVideo() {
    const detailVideo = useSelector((state) => state.SiteReducer.detailVideo);

    const token = useGetToken();
    const history = useNavigate();
    const ref = useRef(null);

    const [linkCopy, setLinkCopy] = useState('http://localhost:3000/customer/home');
    const [DetailVideoState, setDetailVideoState] = useState({});
    const [isLoading, setIsloading] = useState(false);
    const [actions, setActions] = useState(false);
    const [listComment, setComment] = useState([]);
    const [commentText, setCommentText] = useState('');
    const [commentDetail, setCommentDetail] = useState({});
    const [isOpen, setIsOpen] = useState(false);
    const [chosenEmoji, setChosenEmoji] = useState(true);
    const [isOpenEmoji, setIsOpenEmoji] = useState(false);

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
                const Res = await GetDetailVideoByUuid(uuidParams.uuid || '', token);
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
    }, [token, uuidParams.uuid, detailVideo, listComments]);

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        disPatch(Actions.getListComment(uuidParams.uuid, token));
    }, [uuidParams.uuid, isLoggedIn, disPatch, token, detailComments]);

    useEffect(() => {
        setCommentText('');
        setCommentDetail(detailComments);
    }, [detailComments]);

    const handleSubmitComment = () => {
        setIsOpenEmoji(false);
        if (!commentText) {
            alert('Bạn hãy nhập nội dung comments của bạn !');
            return;
        }

        const dataBuild = {
            comment: commentText,
        };

        disPatch(Actions.createNewComment(dataBuild, uuidParams.uuid, token));
    };

    const handleToggleModal = () => {
        setIsOpen(!isOpen);
    };

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
        if (chosenEmoji.emoji) {
            setCommentText((prev) => `${prev} ${chosenEmoji.emoji}`);
        }
    };

    useEffect(() => {
        document.body.onkeydown = (e) => {
            if (e.keyCode === 116 || e.which === 116) {
                // e.preventDefault();
                history(`/customer/video-details-with-id-and-user/${uuidParams.uuid}/view=2`);
            }
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        document.title = `TikTok - Make Your Day`;
    }, []);

    useEffect(() => {
        window.onload = (e) => {
            history(`/customer/video-details-with-id-and-user/${uuidParams.uuid}/view=2`);
        };

        return () => (window.onload = null);
    }, []);

    window.onload = (e) => {
        history(`/customer/video-details-with-id-and-user/${uuidParams.uuid}/view=2`);
    };

    return (
        <div className="detail-video-container">
            <a href="/" hidden ref={ref}>
                click
            </a>
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
                                        {!isLoggedIn ? (
                                            <input
                                                placeholder="Vui lòng đăng nhập để comment"
                                                onClick={handleToggleModal}
                                                onChange={() => {
                                                    if (!isLoggedIn) {
                                                        handleToggleModal();
                                                    }
                                                }}
                                            />
                                        ) : (
                                            <>
                                                <input
                                                    value={commentText}
                                                    onChange={(e) => setCommentText(e.target.value)}
                                                    placeholder="Nhập comment của bạn"
                                                    onKeyDown={(e) => {
                                                        if (e.keyCode === 13) {
                                                            handleSubmitComment();
                                                        }
                                                    }}
                                                    onClick={() => setIsOpenEmoji(false)}
                                                />
                                                <div className="emoij-wrapper">
                                                    <Tippy content="Chọn emoji">
                                                        <div
                                                            className="paswerer"
                                                            onClick={() => setIsOpenEmoji(!isOpenEmoji)}
                                                        >
                                                            <IconEmoj />
                                                        </div>
                                                    </Tippy>
                                                    {isOpenEmoji && (
                                                        <div className="over-emoj">
                                                            <Picker onEmojiClick={onEmojiClick} />
                                                        </div>
                                                    )}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                    <div className="button-submit">
                                        {isLoggedIn ? (
                                            <button className="btn" onClick={handleSubmitComment}>
                                                Đăng
                                            </button>
                                        ) : (
                                            <button className="btn" onClick={handleToggleModal}>
                                                Đăng
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {isOpen && <ModalRender isOpen={isOpen} handleToggleModal={handleToggleModal} />}
                    </>
                )}
            </div>
            {isLoading && (
                <div className="item-loading-detail">
                    <HashLoader color="#36d7b7" />
                </div>
            )}
        </div>
    );
}

export default DetailVideo;
