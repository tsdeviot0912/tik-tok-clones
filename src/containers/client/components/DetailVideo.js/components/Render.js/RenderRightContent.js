import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';
import Tippy from '@tippyjs/react';
import PropTypes from 'prop-types';
import TippyHelles from '@tippyjs/react/headless';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';

import { IconDip, IconFB, IconShare, IconTeleGram, IconTwitter, IconWhat } from '../../../../../../components/Icons';
import '../../DetailVideo.scss';
import HeaderVideo from '../../../../Layout/Components/HomePage/components/HeaderVideo';
import { Wrapper } from '../../../../../../components/Popper';
import Share from '../../../../../client/Layout/Components/HomePage/components/Share';

RenderRightConent.propTypes = {
    DetailVideoState: PropTypes.object.isRequired,
    linkCopy: PropTypes.string,
};

function RenderRightConent({ DetailVideoState = {}, linkCopy }) {
    const [copied, setCopied] = useState(false);

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

    return (
        <div>
            <div className="header">
                <HeaderVideo data={DetailVideoState} />
            </div>
            <div className="share d-flex justify-content-between align-items-center container">
                <div>
                    <button className="btn">
                        <FontAwesomeIcon icon={faHeart} />
                        <span>11.2k</span>
                    </button>
                    <button className="btn">
                        <FontAwesomeIcon icon={faComment} />
                        <span>11.2k</span>
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
                        <span>{linkCopy}</span>
                    </div>
                    <CopyToClipboard
                        text={linkCopy}
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
        </div>
    );
}

export default RenderRightConent;
