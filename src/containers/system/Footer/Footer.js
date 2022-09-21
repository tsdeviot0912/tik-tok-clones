import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

import './Footer.scss';

function Footer() {
    const history = useNavigate();

    const handleRedirect = () => {
        history('/');
    };

    return (
        <div className="footer-wrapper">
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 justify-content-between">
                    <div className="logo">
                        <div onClick={handleRedirect}>
                            <img
                                src="https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/web/node/_next/static/images/logo-7328701c910ebbccb5670085d243fc12.svg"
                                alt=""
                            />
                            <img
                                src="https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/web/node/_next/static/images/logotext-9b4d14640f93065ec36dab71c806e135.svg"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="item">
                        <p className="title-footer">Công ty</p>
                        <ul className="ul-footer">
                            <li className="li-footer">
                                <a href="/">Giới thiệu</a>
                            </li>
                            <li className="li-footer">
                                <a href="/">TikTok Browse</a>
                            </li>
                            <li className="li-footer">
                                <a href="/">Bảng tin</a>
                            </li>
                            <li className="li-footer">
                                <a href="/">Liên hệ</a>
                            </li>
                            <li className="li-footer">
                                <a href="/">Sự nghiệp</a>
                            </li>
                            <li className="li-footer">
                                <a href="/">ByteDance</a>
                            </li>
                        </ul>
                    </div>
                    <div className="item">
                        <p className="title-footer">Chương trình</p>
                        <ul className="ul-footer">
                            <li className="li-footer">
                                <a href="/">TikTok for Good</a>
                            </li>
                            <li className="li-footer">
                                <a href="/">Quảng cáo</a>
                            </li>
                            <li className="li-footer">
                                <a href="/">Developers</a>
                            </li>
                            <li className="li-footer">
                                <a href="/">TikTok Rewards</a>
                            </li>
                        </ul>
                    </div>
                    <div className="item">
                        <p className="title-footer">Hỗ trợ</p>
                        <ul className="ul-footer">
                            <li className="li-footer">
                                <a href="/">Trung tâm Trợ giúp</a>
                            </li>
                            <li className="li-footer">
                                <a href="/">Trung tâm An toàn</a>
                            </li>
                            <li className="li-footer">
                                <a href="/">Creator Portal</a>
                            </li>
                            <li className="li-footer">
                                <a href="/">Hướng dẫn Cộng đồng</a>
                            </li>
                            <li className="li-footer">
                                <a href="/">Minh bạch</a>
                            </li>
                            <li className="li-footer">
                                <a href="/">Accessibility</a>
                            </li>
                        </ul>
                    </div>
                    <div className="item">
                        <p className="title-footer">Pháp lý</p>
                        <ul className="ul-footer">
                            <li className="li-footer">
                                <a href="/">Terms of Use</a>
                            </li>
                            <li className="li-footer">
                                <a href="/">Privacy Policy</a>
                            </li>
                            <li className="li-footer">
                                <a href="/">NGUYÊN TẮC THỰC THI PHÁP</a>
                            </li>
                            <li className="li-footer">
                                <a href="/">LUẬT CỦA TIKTOK</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="the-end d-flex justify-content-between align-items-center">
                    <div className="d-inline-flex justify-content-center align-items-center button-change-language">
                        <span>Tiếng Việt</span>
                        <span>
                            <FontAwesomeIcon icon={faAngleDown} />
                        </span>
                    </div>

                    <span className="copy-barn">© 2022 TikTok</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
