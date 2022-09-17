import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _ from 'lodash';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import Lightbox from 'react-image-lightbox';

import { IconsEdit } from '../Icons';
import './ModalEditUser.scss';
import { useState } from 'react';

function ModalEditUser({ isOpen, handleToggle, userCurrent = {} }) {
    const [isOpenLightBox, setIsOpenLightBox] = useState(false);

    return (
        <div className="modal-edit-user-wrapper">
            <Modal
                toggle={handleToggle}
                isOpen={isOpen}
                size="large"
                centered
                className="modal-edit-user"
                //
            >
                <ModalHeader>
                    <h2>Sửa hồ sơ</h2>
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
                                        <img src={userCurrent.avatar} alt="" onClick={() => setIsOpenLightBox(true)} />
                                        <label className="choose-file" htmlFor="select-file">
                                            <IconsEdit />
                                            <input type="file" id="select-file" hidden />
                                        </label>
                                    </div>
                                    {isOpenLightBox && (
                                        <Lightbox
                                            className="lightbox-container-image"
                                            onCloseRequest={() => setIsOpenLightBox(false)}
                                            mainSrc={userCurrent.avatar}
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
                                            <input className="form-control" value={userCurrent.first_name} />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <label>Last Name</label>
                                            <input className="form-control" value={userCurrent.last_name} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="edit-chuk">
                                <div className="title-edit">Giới tính và ngày sinh</div>
                                <div className="body-edit">
                                    <div className="row mt-3">
                                        <div className="col-12 col-md-6">
                                            <label>Ngày sinh</label>
                                            <input className="form-control" value={userCurrent.date_of_birth} />
                                        </div>
                                        <div className="col-12 col-md-6">
                                            <label>Giới tính</label>
                                            <input className="form-control" />
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
                                            <input className="form-control" value={userCurrent.website_url} />
                                        </div>
                                        <div className="col-12 mt-2">
                                            <label>Facebook</label>
                                            <input className="form-control" value={userCurrent.facebook_url} />
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
                                            <textarea className="form-control" value={userCurrent.bio} />
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
                        <button className="btn-chuk btn-close-btn px-2 mx-2">Hủy</button>
                        <button className="btn-chuk btn-submit px-2 mx-2">Lưu</button>
                    </div>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalEditUser;
