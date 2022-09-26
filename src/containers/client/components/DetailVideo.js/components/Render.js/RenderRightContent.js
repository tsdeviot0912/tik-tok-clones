import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import PropTypes from 'prop-types';
import TippyHelles from '@tippyjs/react/headless';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';
import _ from 'lodash';

import { IconDip, IconFB, IconShare, IconTeleGram, IconTwitter, IconWhat } from '../../../../../../components/Icons';
import { useDispatch, useSelector } from 'react-redux';

import '../../DetailVideo.scss';
import HeaderVideo from '../../../../Layout/Components/HomePage/components/HeaderVideo';
import { Wrapper } from '../../../../../../components/Popper';
import Share from '../../../../../client/Layout/Components/HomePage/components/Share';
import useGetToken from '../../../../../../components/hooks/useGetToken';
import * as actions from '../../../../../../store/actions';
import ModalRender from '../../../../../../components/Popper/Modal';

RenderRightConent.propTypes = {
    DetailVideoState: PropTypes.object.isRequired,
    linkCopy: PropTypes.string,
};

function RenderRightConent({ DetailVideoState = {}, linkCopy }) {
    const disPatch = useDispatch();
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

    const [copied, setCopied] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const PreviewAccount = () => {
        return <Wrapper>{<Share />}</Wrapper>;
    };

    const TippyRender = ({ children }) => {
        return (
            <TippyHelles interactive delay={[800, 200]} render={() => PreviewAccount()}>
                {children}
            </TippyHelles>
        );
    };

    const handleToggleModal = () => {
        setIsOpen(!isOpen);
    };

    const Token = useGetToken();

    const handleToggleHeart = (uuid, token, toggle) => {
        const isDetail = true;

        if (isLoggedIn) {
            if (toggle) {
                disPatch(actions.unLikeOneVideo(uuid, token, isDetail));
            } else {
                disPatch(actions.likeOneVideo(uuid, token, isDetail));
            }
        } else {
            handleToggleModal();
        }
    };

    return (
        <div>
            {!_.isEmpty(DetailVideoState) && (
                <>
                    <div className="header">
                        <HeaderVideo data={DetailVideoState} />
                    </div>
                    <div className="share d-flex justify-content-between align-items-center container">
                        <div>
                            <button
                                className="btn"
                                onClick={() =>
                                    handleToggleHeart(DetailVideoState.uuid, Token, DetailVideoState.is_liked)
                                }
                            >
                                {DetailVideoState.is_liked ? (
                                    <FontAwesomeIcon className="heart-with-me" icon={faHeartSolid} />
                                ) : (
                                    <FontAwesomeIcon icon={faHeart} />
                                )}
                                <span>{DetailVideoState.likes_count}</span>
                            </button>
                            <button className="btn">
                                <FontAwesomeIcon icon={faComment} />
                                <span>{DetailVideoState.comments_count}</span>
                            </button>
                        </div>
                        <div
                            style={{
                                position: 'relative',
                            }}
                        >
                            <Tippy content="Nhúng">
                                <a href="/" className="btn">
                                    <IconDip />
                                </a>
                            </Tippy>
                            <Tippy content="Chia sẻ với bạn bè Intagram">
                                <a href="/" className="btn">
                                    <IconTeleGram />
                                </a>
                            </Tippy>
                            <Tippy content="Chia sẻ với bạn bè Facebook">
                                <a href="/" className="btn">
                                    <IconFB />
                                </a>
                            </Tippy>
                            <Tippy content="Chia sẻ với bạn bè Whatshap">
                                <a href="/" className="btn">
                                    <IconWhat />
                                </a>
                            </Tippy>
                            <Tippy content="Chia sẻ với bạn bè Twitter">
                                <a href="/" className="btn">
                                    <IconTwitter />
                                </a>
                            </Tippy>
                            <TippyRender>
                                <a href="/" className="btn">
                                    <IconShare />
                                </a>
                            </TippyRender>
                        </div>
                    </div>
                    <div className="copPy-link container">
                        <div className="d-flex align-items-center">
                            <div className="text-render-coppy">
                                <span>{linkCopy.concat('/view=2')}</span>
                            </div>
                            <CopyToClipboard
                                text={linkCopy.concat('/view=2')}
                                onCopy={() => {
                                    setCopied(true);
                                }}
                            >
                                <div className="text-button">
                                    <span>{copied ? 'Đã sao chép vào bộ nhớ tạm' : 'Sao chép liên kết'}</span>
                                </div>
                            </CopyToClipboard>
                        </div>
                    </div>
                </>
            )}
            {isOpen && <ModalRender isOpen={isOpen} handleToggleModal={handleToggleModal} />}
        </div>
    );
}

export default RenderRightConent;
