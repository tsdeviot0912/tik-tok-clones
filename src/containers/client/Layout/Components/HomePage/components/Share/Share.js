import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import {
    IconDip,
    IconEmail,
    IconFB,
    IconLink,
    IconLinkedIn,
    IconTeleGram,
    IconTwitter,
    IconWhat,
} from '../../../../../../../components/Icons';

import './Share.scss';

class Share extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            value: this.props.linkCopy,
            copied: false,
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.linkCopy !== this.props.linkCopy) {
            this.setState({
                value: this.props.linkCopy,
            });
        }
    }

    render() {
        const { isOpen, value } = this.state;

        return (
            <div className={`${isOpen ? 'share-wrapper-container max-height-item' : 'share-wrapper-container'}`}>
                <a href="/">
                    <IconDip />
                    Nhúng
                </a>
                <a href="/">
                    <IconFB />
                    Chia sẻ với Facebook
                </a>
                <a href="/">
                    <IconWhat />
                    Chia sẻ với WhatsApp
                </a>
                <CopyToClipboard text={this.state.value} onCopy={() => this.setState({ copied: true })}>
                    <a
                        href="/"
                        onClick={(e) => {
                            e.preventDefault();
                            alert('Copy link to dasbosh');
                        }}
                    >
                        <IconLink />
                        Sao Chép liên kết
                    </a>
                </CopyToClipboard>
                {!isOpen && (
                    <a
                        href="/"
                        className="
                    d-flex align-items-center
                    justify-content-center
                    icon-next-max
                    "
                        style={{
                            height: 30,
                            fontSize: 18,
                        }}
                        onClick={(e) => {
                            e.preventDefault();

                            this.setState({
                                isOpen: true,
                            });
                        }}
                    >
                        <FontAwesomeIcon icon={faAngleDown} />
                    </a>
                )}
                <a href="/">
                    <IconTwitter />
                    Chia sẻ với Twitter
                </a>
                <a href="/">
                    <IconTeleGram />
                    Chia sẻ với Telegram
                </a>

                <a href="/">
                    <IconLinkedIn />
                    Chia sẻ với LinkedIn
                </a>
                <a href="/">
                    <IconEmail />
                    Chia sẻ với Email
                </a>
            </div>
        );
    }
}

export default Share;
