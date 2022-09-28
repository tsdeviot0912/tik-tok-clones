import _ from 'lodash';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Picker from 'emoji-picker-react';
import RenderItemViewCopy from './components/RenderItemViewCopy';
import RenderVideo from './components/RenderVideo';
import './ViewCopy.scss';
import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { GetDetailVideoByUuid, GetVideoLimitType } from '../../../../services';
import HeaderVideo from '../../Layout/Components/HomePage/components/HeaderVideo';
import Header from '../Header/Header';
import Sidebar from '../Sidebar';
import Comment from '../comments/comment';
import * as Actions from '../../../.././store/actions';
import useGetToken from '../../../../components/hooks/useGetToken';
import { IconEmoj } from '../../../.././components/Icons';
import ModalRender from '../../../.././components/Popper/Modal';

function ViewCopy() {
    const disPatch = useDispatch();
    const token = useGetToken();

    const [play, setPlay] = useState(true);
    const [listComment, setComment] = useState([]);
    const [DetailVideoState, setDetailVideoState] = useState({});
    const [commentText, setCommentText] = useState('');
    const [commentDetail, setCommentDetail] = useState({});
    const [chosenEmoji, setChosenEmoji] = useState(true);
    const [isOpenEmoji, setIsOpenEmoji] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [listVideo, setListVideo] = useState([]);
    const [metaVideo, setMetaVideo] = useState({});
    const [type, setType] = useState('for-you');
    const [page, setPage] = useState(1);
    const [isRender, setIsRender] = useState(false);
    const [detailFollow, setDetailFollow] = useState({});
    const [heightPage, setHeightPage] = useState(+0);
    const [WindowScollY, setWindowScollY] = useState(+0);

    const paramUuid = useParams();

    const detailFollowAndUnFollow = useSelector((state) => state.SiteReducer.detailFollowAndUnFollow);
    const listComments = useSelector((state) => state.SiteReducer.listComments);
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const detailComments = useSelector((state) => state.SiteReducer.detailComments);
    const MetaVideoType = useSelector((state) => state.SiteReducer.MetaVideoType);
    const detailOneVideo = useSelector((state) => state.SiteReducer.detailOneVideo);

    useEffect(() => {
        const fetch = async () => {
            const Res = await GetVideoLimitType(type, page, token);

            if (Res.data && Res.data.length > 0) {
                setListVideo((prev) => [...prev, ...Res.data]);
            }
        };
        fetch();
    }, [page, token, type]);

    useEffect(() => {
        disPatch(Actions.getListComment(paramUuid.uuid, token));
    }, [paramUuid.uuid, isLoggedIn, disPatch, token, detailComments]);

    useEffect(() => {
        if (!_.isEmpty(detailOneVideo)) {
            setDetailVideoState(detailOneVideo);
        }
    }, [detailOneVideo]);

    useEffect(() => {
        setComment(listComments);
    }, [listComments]);

    useEffect(() => {
        setCommentText('');
        setCommentDetail(detailComments);
    }, [detailComments]);

    useEffect(() => {
        const fetCh = async () => {
            try {
                const Res = await GetDetailVideoByUuid(paramUuid.uuid || '', token);
                if (Res && Res.data && !_.isEmpty(Res.data)) {
                    setDetailVideoState(Res.data);
                }
            } catch (error) {
                console.log(error);
                setDetailVideoState({});
            }
        };

        fetCh();
    }, [token, paramUuid.uuid, listComments]);

    useEffect(() => {
        setMetaVideo(MetaVideoType);
    }, [MetaVideoType]);

    const handleSubmitComment = () => {
        setIsOpenEmoji(false);
        if (!commentText) {
            alert('Bạn hãy nhập nội dung comments của bạn !');
            return;
        }

        const dataBuild = {
            comment: commentText,
        };

        disPatch(Actions.createNewComment(dataBuild, paramUuid.uuid, token));
    };

    const listenScrollEvent = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            setWindowScollY(Math.floor(window.innerHeight + window.scrollY));
        }

        if (heightPage !== document.documentElement.scrollHeight) {
            setHeightPage(Math.floor(document.documentElement.scrollHeight));
        }
    };

    useEffect(() => {
        if (WindowScollY === heightPage || WindowScollY === heightPage - 1) {
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

    const handleToggleModal = () => {
        setIsOpen(!isOpen);
    };

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
        if (chosenEmoji.emoji) {
            setCommentText((prev) => `${prev} ${chosenEmoji.emoji}`);
        }
    };

    const handleClickHeart = (uuid, token, toggle) => {
        if (!toggle) {
            disPatch(Actions.likeOneVideo(uuid, token, type, page));
        } else {
            disPatch(Actions.unLikeOneVideo(uuid, token));
        }
    };

    useEffect(() => {
        setDetailFollow(detailFollowAndUnFollow);
    }, [detailFollowAndUnFollow]);

    console.log('check page :', page);
    console.log('check heightPage :', heightPage);
    console.log('check WindowScollY :', WindowScollY);

    return (
        <div className="view-copy-link-wrapper">
            {!_.isEmpty(DetailVideoState) && (
                <>
                    <div className="header-profile">
                        <Header />
                    </div>
                    <div className="custom-row">
                        <div className="col-2 video-parents">
                            <Sidebar isHiddenTippy={true} classNameCustom="custom-slider" />
                        </div>
                        <div className="customer-10 body-render">
                            <div className="container">
                                <div className="row">
                                    <div className="col-8 video-and-comment">
                                        <Link to="/" className="jsx-back-for-you">
                                            <FontAwesomeIcon icon={faChevronLeft} />
                                            Back to for you
                                        </Link>
                                        <div className="video-up">
                                            <RenderVideo
                                                handleClickHeart={handleClickHeart}
                                                play={play}
                                                data={DetailVideoState}
                                                setPlay={setPlay}
                                                handleToggleModal={handleToggleModal}
                                            />
                                        </div>
                                        <div className="body" id="comment">
                                            <div className="up pb-4">
                                                <HeaderVideo
                                                    data={
                                                        !_.isEmpty(detailFollow)
                                                            ? {
                                                                  user: detailFollow,
                                                              }
                                                            : !_.isEmpty(DetailVideoState.user)
                                                            ? DetailVideoState
                                                            : {}
                                                    }
                                                />
                                            </div>
                                            <div className="center">
                                                <div className="text-input">
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
                                                                                onClick={() =>
                                                                                    setIsOpenEmoji(!isOpenEmoji)
                                                                                }
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
                                                <div className="body-comment">
                                                    <Comment
                                                        uuid={paramUuid.uuid ? paramUuid.uuid : ''}
                                                        listComment={listComment}
                                                        commentDetail={commentDetail}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4 offer-videos">
                                        <div className="container">
                                            <span className="jsx-back-for-you">Offer Videos</span>
                                            <div className="row">
                                                {listVideo &&
                                                    listVideo.length > 0 &&
                                                    listVideo.map((item, index) => (
                                                        <RenderItemViewCopy data={item} key={index} />
                                                    ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {isOpen && <ModalRender isOpen={isOpen} handleToggleModal={handleToggleModal} />}
        </div>
    );
}

export default ViewCopy;
