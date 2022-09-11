import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { memo, useEffect, useState } from 'react';
import { ModalBody, ModalFooter, ModalHeader, Modal } from 'reactstrap';
import validator from 'email-validator';
import Cookies from 'universal-cookie';

import './Modal.scss';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../store/actions';
import { Login } from '../../../services';

ModalRender.propTypes = {
    isOpen: PropTypes.bool,
};

ModalRender.defaultProps = {
    isOpen: false,
};

function ModalRender({ isOpen = false, className, handleToggleModal }) {
    const disPath = useDispatch();

    const [isShowPassWord, setIsShowPassWord] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const cookies = new Cookies();

    const Validate = () => {
        const Arr = [email, password];

        let IsValid = true;

        for (let i = 0; i < Arr.length; i++) {
            if (!Arr[i]) {
                IsValid = false;
                alert('Bạn đã nhập thiếu trường !!');
                break;
            }
        }

        const CheckEmail = validator.validate(email); // true

        if (!CheckEmail) {
            IsValid = false;
            alert('Email phải có @gmail.com !!');
        }

        return IsValid;
    };

    const SubMitLoginAndRegister = async () => {
        const Check = Validate();

        if (!Check) {
            return;
        }

        const dataBuild = {
            email,
            password,
        };

        try {
            const Res = await Login(dataBuild);

            if (Res && Res.data && Res.meta) {
                disPath(actions.userLoginSuccess(Res.data));
                disPath(actions.SaveCookieToken(Res.meta)); //
                cookies.set('token', Res.meta.token, { path: '/' });
            } else {
                disPath(actions.userLoginFail());
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (isLoggedIn === true) {
            handleToggleModal();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoggedIn]);

    return (
        <div className="modal-container">
            <Modal
                isOpen={isLoggedIn ? false : isOpen}
                size="md"
                tabIndex={-1}
                centered={true}
                className="modal-rendered"
            >
                <ModalHeader>
                    <strong>Bạn hãy đăng nhập tài khoản của bạn</strong>
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
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
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
                    <button className="btn btn-primary" onClick={SubMitLoginAndRegister}>
                        Xác nhận
                    </button>
                    <button className="btn btn-warning" onClick={() => handleToggleModal()}>
                        Hủy bỏ
                    </button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default memo(ModalRender);
