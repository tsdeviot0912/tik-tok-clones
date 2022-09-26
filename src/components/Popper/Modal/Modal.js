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
import { Login, Register } from '../../../services';

ModalRender.propTypes = {
    isOpen: PropTypes.bool,
    handleToggleModal: PropTypes.func,
    isRequired: PropTypes.bool,
};

ModalRender.defaultProps = {
    isOpen: false,
    handleToggleModal: () => {},
};

function ModalRender({ isOpen = false, className, handleToggleModal, isRequired = false }) {
    const disPath = useDispatch();

    const [isShowPassWord, setIsShowPassWord] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Confirmpassword, setConfirmPassword] = useState('');
    const [isLogin, setIslogin] = useState(true);

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

        if (isLogin) {
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
        } else {
            if (Confirmpassword !== password) {
                alert('Mật khẩu nhập lại của bạn không chính xác');
                return;
            }

            const dataBuild = {
                type: 'email',
                email,
                password,
            };

            try {
                const Res = await Register(dataBuild);

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
        }
    };

    useEffect(() => {
        if (isLoggedIn === true) {
            handleToggleModal();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoggedIn]);
    // /isRequired ? isOpen : isLoggedIn ? false : isOpen
    return (
        <div className="modal-container">
            <Modal
                isOpen={isRequired ? isOpen : isLoggedIn ? false : isOpen}
                size="md"
                tabIndex={-1}
                centered={true}
                toggle={() => handleToggleModal()}
                className="modal-rendered"
            >
                <ModalHeader>
                    <strong>{isLogin ? 'Bạn hãy đăng nhập tài khoản của bạn' : 'Đăng ký tài khoản của bạn'}</strong>
                </ModalHeader>
                <ModalBody>
                    <div className="container">
                        <div>
                            <div className="register">
                                <button
                                    className="btn jsx-render-switch mx-3 mb-4 mt-3"
                                    onClick={() => setIslogin(true)}
                                >
                                    Đăng nhập
                                </button>
                                <button
                                    className="btn jsx-render-switch mx-3 mb-4 mt-3"
                                    onClick={() => setIslogin(false)}
                                >
                                    Đăng ký
                                </button>
                            </div>
                            {isLogin ? (
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
                                        <span
                                            className="show-password"
                                            onClick={() => setIsShowPassWord(!isShowPassWord)}
                                        >
                                            {isShowPassWord ? (
                                                <FontAwesomeIcon icon={faEyeSlash} />
                                            ) : (
                                                <FontAwesomeIcon icon={faEye} />
                                            )}
                                        </span>
                                    </div>
                                </div>
                            ) : (
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
                                        <span
                                            className="show-password"
                                            onClick={() => setIsShowPassWord(!isShowPassWord)}
                                        >
                                            {isShowPassWord ? (
                                                <FontAwesomeIcon icon={faEyeSlash} />
                                            ) : (
                                                <FontAwesomeIcon icon={faEye} />
                                            )}
                                        </span>
                                    </div>
                                    <div
                                        className="col-12 my-1"
                                        style={{
                                            position: 'relative',
                                        }}
                                    >
                                        <label className="my-2">Nhập lại password của bạn</label>
                                        <input
                                            type={isShowPassWord ? 'text' : 'password'}
                                            className="form-control"
                                            placeholder="Your password"
                                            value={Confirmpassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                        />
                                        <span
                                            className="show-password"
                                            onClick={() => setIsShowPassWord(!isShowPassWord)}
                                        >
                                            {isShowPassWord ? (
                                                <FontAwesomeIcon icon={faEyeSlash} />
                                            ) : (
                                                <FontAwesomeIcon icon={faEye} />
                                            )}
                                        </span>
                                    </div>
                                </div>
                            )}
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
