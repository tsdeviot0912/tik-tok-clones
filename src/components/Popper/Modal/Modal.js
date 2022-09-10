import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { memo, useState } from 'react';
import { ModalBody, ModalFooter, ModalHeader, Modal } from 'reactstrap';

import './Modal.scss';

ModalRender.propTypes = {
    isOpen: PropTypes.bool,
};

ModalRender.defaultProps = {
    isOpen: false,
};

function ModalRender({ isOpen = false, className, handleToggleModal }) {
    const [isShowPassWord, setIsShowPassWord] = useState(false);
    const [email, setEmail] = useState('');

    return (
        <div className="modal-container">
            <Modal isOpen={isOpen} size="md" tabIndex={-1} centered={true} className="modal-rendered">
                <ModalHeader>
                    <h2>Bạn hãy đăng nhập tài khoản của bạn</h2>
                </ModalHeader>
                <ModalBody>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 my-1">
                                <label className="my-2">Nhập tên email của bạn</label>
                                <input
                                    value={email}
                                    className="form-control"
                                    placeholder="truongson@gmail.co"
                                    onChange={(e) => setEmail(e.target.value)}
                                    // onKeyDown={(e) => {
                                    //     const { keyCode } = e;

                                    //     if (keyCode === 123) {
                                    //         e.preventDefault();
                                    //     }
                                    // }}
                                    onC
                                />
                            </div>
                            <div
                                className="col-12 my-1"
                                style={{
                                    position: 'relative',
                                }}
                            >
                                <label className="my-2">Nhập password của bạn</label>
                                <input
                                    type={isShowPassWord ? 'text' : 'password'}
                                    className="form-control"
                                    placeholder="Your password"
                                />
                                <span className="show-password" onClick={() => setIsShowPassWord(!isShowPassWord)}>
                                    {isShowPassWord ? (
                                        <FontAwesomeIcon icon={faEyeSlash} />
                                    ) : (
                                        <FontAwesomeIcon icon={faEye} />
                                    )}
                                </span>
                            </div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button className="btn btn-primary">Xác nhận</button>
                    <button className="btn btn-warning" onClick={() => handleToggleModal()}>
                        Hủy bỏ
                    </button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default memo(ModalRender);
