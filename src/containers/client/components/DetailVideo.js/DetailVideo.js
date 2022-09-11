import _ from 'lodash';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';

import './DetailVideo.scss';
import Video from './components/video/video';
import { GetDetailVideoByUuid } from '../../../../services';

import RenderRightConent from './components/Render.js/RenderRightContent';

function DetailVideo() {
    const [linkCopy, setLinkCopy] = useState('http://localhost:3000/customer/home');
    const [DetailVideoState, setDetailVideoState] = useState({});
    const [isLoading, setIsloading] = useState(false);
    const uuidParams = useParams();

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

    return (
        <div className="detail-video-container">
            <div className="wrapper-detail-video-content">
                {DetailVideoState && !_.isEmpty(DetailVideoState) && (
                    <>
                        <div className="left-content">
                            <div className="video-render">
                                <Video data={DetailVideoState} />
                            </div>
                        </div>
                        <div className="right-content">
                            <div className="up">
                                <RenderRightConent linkCopy={linkCopy} DetailVideoState={DetailVideoState} />
                            </div>
                            <div className="body down">
                                <div className="body-comment"></div>
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
