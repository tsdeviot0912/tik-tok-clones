import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Select from 'react-select';

import Button from '../../../components/Button';
import useGetToken from '../../../components/hooks/useGetToken';
import { IconUpload } from '../../../components/Icons';
import { CreateVideo } from '../../../services/AppServices';
import Header from '../../client/components/Header/Header';
import Footer from '../Footer';
import './upload.scss';
import ModalRender from '../../.././components/Popper/Modal/Modal';
import { useNavigate } from 'react-router-dom';

function Upload() {
    const ref = useRef(null);
    const Token = useGetToken();
    const history = useNavigate();

    const [selectedOption, setSelectedOption] = useState(null);
    const [fileVideo, setFileVideo] = useState(null);
    const [description, setDescription] = useState('');
    const [music, setMusic] = useState('');
    const [comment, setComment] = useState(true);
    const [Duet, setDuet] = useState(true);
    const [Stitch, setStitch] = useState(true);
    const [linkPreview, setLinkPreview] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

    const handleClickSelectFile = () => {
        const input = ref.current;

        if (input) {
            input.click();
        }
    };

    const handleToggleModal = () => {
        setIsOpen(!isOpen);
    };

    const options = [
        { value: 'public', label: 'Công khai' },
        { value: 'friends ', label: 'Bạn bè' },
        { value: 'private', label: 'Riêng tư' },
    ];

    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };

    const handleOnchangeFileVideo = async (e) => {
        const file = e.target.files[0];

        if (file) {
            setFileVideo(file);

            const link = URL.createObjectURL(file);
            setLinkPreview(link);
        }
    };

    const handleClickChooseAgainVideo = () => {
        // eslint-disable-next-line no-restricted-globals
        const Check = confirm('Bạn có chắc chắn với hành động của mình?');

        if (Check) {
            setFileVideo(null);
            setLinkPreview('');
        }
    };

    const validate = () => {
        const Arr = [selectedOption, fileVideo, description, music];
        let isValid = true;

        for (let i = 0; i < Arr.length; i++) {
            if (!Arr[i]) {
                alert('Bạn đã nhập thiếu trường');
                isValid = false;
                break;
            }
        }

        return isValid;
    };

    const handleback = () => {
        // eslint-disable-next-line no-restricted-globals
        const Check = confirm('Tiếp tục chỉnh sửa !');

        if (!Check) {
            history(-1);
        }
    };

    const handleSubmit = async () => {
        if (isLoggedIn) {
            const Check = validate();

            if (Check) {
                const dataBuild = {
                    description,
                    upload_file: fileVideo,
                    thumbnail_time: 5,
                    music,
                    viewable: selectedOption.value,
                    allows: ['comment', 'duet', 'stitch'],
                };

                await CreateVideo(dataBuild, Token);
            }
        } else {
            setIsOpen(true);
        }
    };

    return (
        <>
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
                                    className={
                                        fileVideo
                                            ? 'container-item-upload border-color-none d-flex justify-content-center align-items-center'
                                            : 'container-item-upload d-flex justify-content-center align-items-center'
                                    }
                                    onClick={handleClickSelectFile}
                                >
                                    {!fileVideo ? (
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
                                                onChange={(e) => handleOnchangeFileVideo(e)}
                                                style={{
                                                    display: 'none',
                                                }}
                                            />
                                        </div>
                                    ) : (
                                        <video controls loop autoPlay>
                                            <source src={linkPreview} />
                                        </video>
                                    )}
                                </div>
                                {fileVideo && (
                                    <div className="choose-agin-video" onClick={handleClickChooseAgainVideo}>
                                        <span>Chọn lại videos</span>
                                    </div>
                                )}
                            </div>
                            <div className="col-9 right">
                                <div className="render-body">
                                    <div className="header-upload-right">
                                        <h2 className="title">Nhập một sô trường bắt buộc</h2>
                                    </div>
                                    <div className="d-flex mt-2 flex-column align-items-center warper-upload-input-and-label">
                                        <label className="my-3">Chú thích ( description )</label>
                                        <input
                                            value={description}
                                            placeholder="Nhập mô tả video của bạn..."
                                            className="form-custom-upload"
                                            onChange={(e) => setDescription(e.target.value)}
                                        />
                                    </div>
                                    <div className="d-flex mt-2 flex-column align-items-center warper-upload-input-and-label">
                                        <label className="my-3">Nhạc nền video ( music )</label>
                                        <input
                                            placeholder="Nhập tên bài hát video sử dụng..."
                                            className="form-custom-upload"
                                            value={music}
                                            onChange={(e) => setMusic(e.target.value)}
                                        />
                                    </div>
                                    <div className="d-flex mt-2 flex-column warper-upload-input-and-label select-upload">
                                        <label className="my-3">Ai có thể xem video này</label>
                                        <Select
                                            className="form-custom-upload-react-select"
                                            value={selectedOption}
                                            onChange={handleChange}
                                            options={options}
                                        />
                                    </div>
                                    <div className="d-flex mt-2 flex-column warper-upload-input-and-label select-upload">
                                        <label className="my-3">Cho phép người dùng:</label>
                                        <div className="d-flex gap-5">
                                            <div className="d-inline-flex">
                                                <input
                                                    checked={comment}
                                                    type="checkbox"
                                                    className="form-custom-upload-react-check-box"
                                                    onChange={(e) => setComment(e.target.checked)}
                                                />
                                                <span className="ms-3 checkbox-upload">Bình luận</span>
                                            </div>
                                            <div className="d-inline-flex">
                                                <input
                                                    checked={Duet}
                                                    type="checkbox"
                                                    className="form-custom-upload-react-check-box"
                                                    onChange={(e) => setDuet(e.target.checked)}
                                                />
                                                <span className="ms-3 checkbox-upload">Duet</span>
                                            </div>
                                            <div className="d-inline-flex">
                                                <input
                                                    checked={Stitch}
                                                    type="checkbox"
                                                    onChange={(e) => setStitch(e.target.checked)}
                                                    className="form-custom-upload-react-check-box"
                                                />
                                                <span className="ms-3 checkbox-upload">Stitch</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="mt-5 kiem-duyet-title">
                                            Chúng tôi sẽ kiểm tra xem video của bạn có sử dụng âm thanh vi phạm bản
                                            quyền hay không. Nếu chúng tôi phát hiện có vi phạm, bạn có thể chỉnh sửa
                                            video trước khi đăng.
                                        </span>
                                    </div>
                                    <div className="button-submit">
                                        <button className="close-upload" onClick={handleback}>
                                            Hủy bỏ
                                        </button>
                                        <button className="submit-upload" onClick={handleSubmit}>
                                            Đăng
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <ModalRender isOpen={isOpen} handleToggleModal={handleToggleModal} />
        </>
    );
}

export default Upload;
