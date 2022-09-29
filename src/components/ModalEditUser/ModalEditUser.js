import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _ from 'lodash';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import Lightbox from 'react-image-lightbox';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';

import { IconsEdit } from '../Icons';
import './ModalEditUser.scss';
import * as actions from '../../store/actions';
import useGetToken from '../hooks/useGetToken';
import { toast } from 'react-toastify';

function ModalEditUser({ isOpen, handleToggle, userCurrent = {} }) {
    const Token = useGetToken();
    const disPath = useDispatch();

    const [isOpenLightBox, setIsOpenLightBox] = useState(false);
    const [selected, setSelected] = useState({
        value: userCurrent.gender,
        label: userCurrent.gender,
    });
    const [firstName, setFirstName] = useState(userCurrent.first_name);
    const [lastName, setLastName] = useState(userCurrent.last_name);
    const [birthDay, setBirthDay] = useState(userCurrent.date_of_birth);
    const [websiteUrl, setWebsiteUrl] = useState(userCurrent.website_url);
    const [websiteFB, setWebsiteFb] = useState(userCurrent.facebook_url);
    const [bio, setBio] = useState(userCurrent.bio);
    const [fileImage, setFileImage] = useState(userCurrent.avatar);
    const [linkFile, setLinkFile] = useState(userCurrent.avatar);

    const handleChange = (selectedOption) => {
        setSelected(selectedOption);
    };

    const handleOnChangeFile = (e) => {
        const file = e.target.files[0];

        if (file) {
            const linkPreview = URL.createObjectURL(file);

            setLinkFile(linkPreview);
            setFileImage(file);
        }
    };

    const handleValidate = () => {
        let isValid = true;

        const Arr = [
            isOpenLightBox,
            selected,
            firstName,
            lastName,
            birthDay,
            websiteUrl,
            websiteFB,
            bio,
            fileImage,
            linkFile,
        ];

        for (let i = 0; i < Arr.length; i++) {
            if (!Arr[i]) {
                alert('Bạn đã nhập thiếu trường !');
                isValid = false;
                break;
            }
        }

        return isValid;
    };

    const handleSubmit = () => {
        // const Check = handleValidate();

        if (true) {
            const dataBuild = {
                first_name: firstName,
                last_name: lastName,
                gender: selected.value,
                bio: bio,
                date_of_birth: birthDay,
                website_url: websiteUrl,
                facebook_url: websiteFB,
                avatar: fileImage,
            };

            disPath(actions.updateUser(dataBuild, Token));
            toast('Bạn đã sửa thành công trang cá nhân! Chúng tôi sẽ sớm cập nhật ');
            setTimeout(() => {
                handleToggle();
            }, 2000);
        }
    };

    const options = [
        { value: 'male', label: 'Nam' },
        { value: 'female', label: 'Nữ' },
    ];

    return (
        <div className="modal-edit-user-wrapper">
            <Modal
                toggle={handleToggle}
                isOpen={isOpen}
                size="lg"
                centered
                className="modal-edit-user"
                //
            >
                <ModalHeader>
                    <p>Sửa hồ sơ</p>
                    <button onClick={handleToggle}>
                        <FontAwesomeIcon icon={faClose} />
                    </button>
                </ModalHeader>
                <ModalBody>
                    {!_.isEmpty(userCurrent) && (
                        <>
                            <div className="edit-chuk">
                                <div className="title-edit">Ảnh hồ sơ</div>
                                <div className="body-edit">
                                    <div className="img">
                                        <img src={linkFile} alt="" onClick={() => setIsOpenLightBox(true)} />
                                        <label className="choose-file" htmlFor="select-file">
                                            <IconsEdit />
                                            <input
                                                type="file"
                                                onChange={(e) => handleOnChangeFile(e)}
                                                id="select-file"
                                                hidden
                                            />
                                        </label>
                                    </div>
                                    {isOpenLightBox && (
                                        <Lightbox
                                            className="lightbox-container-image"
                                            onCloseRequest={() => setIsOpenLightBox(false)}
                                            mainSrc={linkFile}
                                        />
                                    )}
                                </div>
                            </div>
                            <div className="edit-chuk">
                                <div className="title-edit">Tên của bạn</div>
                                <div className="body-edit">
                                    <div className="row mt-3">
                                        <div className="col-12 col-md-6">
                                            <label>First Name</label>
                                            <input
                                                className="form-control"
                                                value={firstName}
                                                onChange={(e) => setFirstName(e.target.value)}
                                            />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <label>Last Name</label>
                                            <input
                                                className="form-control"
                                                value={lastName}
                                                onChange={(e) => setLastName(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="edit-chuk">
                                <div className="title-edit">Giới tính và ngày sinh</div>
                                <div className="body-edit">
                                    <div className="row mt-3">
                                        <div className="col-12 col-md-6">
                                            <label>Giới tính</label>
                                            <Select
                                                className="customize-react-select"
                                                value={selected}
                                                onChange={handleChange}
                                                options={options}
                                            />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <label>Ngày sinh</label>
                                            <input
                                                className="form-control customize-input-edit-user"
                                                value={birthDay}
                                                onChange={(e) => setBirthDay(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="edit-chuk">
                                <div className="title-edit">Trang wesite của bạn</div>
                                <div className="body-edit">
                                    <div className="row mt-3">
                                        <div className="col-12 mt-2">
                                            <label>Wesite</label>
                                            <input
                                                className="form-control"
                                                value={websiteUrl}
                                                onChange={(e) => setWebsiteUrl(e.target.value)}
                                            />
                                        </div>
                                        <div className="col-12 mt-2">
                                            <label>Facebook</label>
                                            <input
                                                className="form-control"
                                                value={websiteFB}
                                                onChange={(e) => setWebsiteFb(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="edit-chuk end-stop">
                                <div className="title-edit">Mô tả của bạn</div>
                                <div className="body-edit">
                                    <div className="row mt-3">
                                        <div className="col-12 mt-2">
                                            <label>Bio...</label>
                                            <textarea
                                                className="form-control"
                                                onChange={(e) => setBio(e.target.value)}
                                                value={bio}
                                            />
                                        </div>
                                        <span>1/180</span>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </ModalBody>
                <ModalFooter>
                    <div className="ms-auto">
                        <button className="btn-chuk btn-close-btn px-2 mx-2" onClick={() => handleToggle()}>
                            Hủy
                        </button>
                        <button className="btn-chuk btn-submit px-2 mx-2" onClick={handleSubmit}>
                            Lưu
                        </button>
                    </div>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalEditUser;
