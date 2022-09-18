import { useRef } from 'react';

import Button from '../../../components/Button';
import { IconUpload } from '../../../components/Icons';
import Header from '../../client/components/Header/Header';
import './upload.scss';

function Upload() {
    const ref = useRef(null);

    const handleClickSelectFile = () => {
        const input = ref.current;

        if (input) {
            input.click();
        }
    };

    return (
        <div className="upload-wrapper">
            <div className="header">
                <Header />
            </div>
            <div className="body">
                <div className="container warpper-none-body">
                    <div className="header-upload">
                        <h2>Tải video lên</h2>
                        <p>Đăng video vào tài khoản của bạn</p>
                    </div>
                    <div className="row">
                        <div className="col-3 left">
                            <div
                                className="container-item-upload d-flex justify-content-center align-items-center"
                                onClick={handleClickSelectFile}
                            >
                                <div>
                                    <div className="jsx-render-name text-align-center">
                                        <IconUpload />
                                    </div>
                                    <div className="jsx-render-name title-upload d-flex justify-content-center">
                                        Chọn video để tải lên
                                    </div>
                                    <div className="jsx-render-name title-item-rule d-flex justify-content-center">
                                        Hoặc kéo và thả tập tin
                                    </div>
                                    <div className="jsx-render-name title-item-rule d-flex justify-content-center">
                                        MP4 hoặc WebM
                                    </div>
                                    <div className="jsx-render-name title-item-rule d-flex justify-content-center">
                                        Độ phân giải 720x1280 trở
                                    </div>
                                    <div className="jsx-render-name title-item-rule d-flex justify-content-center">
                                        lên
                                    </div>
                                    <div className="jsx-render-name title-item-rule d-flex justify-content-center">
                                        Tối đa 10 phút
                                    </div>
                                    <div className="jsx-render-name title-item-rule d-flex justify-content-center">
                                        Ít hơn 2 GB
                                    </div>
                                    <div
                                        className="jsx-render-name title-item-rule  d-flex justify-content-center"
                                        onClick={handleClickSelectFile}
                                    >
                                        <Button primary>Chọn tập tin</Button>
                                    </div>
                                    <input
                                        ref={ref}
                                        hidden
                                        type="file"
                                        style={{
                                            display: 'none',
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-9 right"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Upload;
