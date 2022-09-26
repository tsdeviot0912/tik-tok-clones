import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare, faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { useSelector } from 'react-redux';
import { faComment, faHeart } from '@fortawesome/free-regular-svg-icons';

import { Wrapper } from '../../../../../components/Popper';
import Share from '../../../Layout/Components/HomePage/components/Share';
import useGetToken from '../../../../../components/hooks/useGetToken';

import PropTypes from 'prop-types';
import { useState } from 'react';
import _ from 'lodash';
import { memo } from 'react';

RenderHeart.propsTypes = {
    handleClickHeart: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    handleToggleModal: PropTypes.func,
};

function RenderHeart({ handleToggleModal, handleClickHeart = () => {}, data }) {
    const Token = useGetToken();
    const [dataDetail, setDataDetail] = useState({});

    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

    useEffect(() => {
        setDataDetail(data);
    }, [data]);

    const PreviewAccount = () => {
        return <Wrapper>{<Share />}</Wrapper>;
    };

    const TippyRender = ({ children }) => {
        return (
            <Tippy interactive delay={[800, 200]} placement="top-start" render={() => PreviewAccount()}>
                {children}
            </Tippy>
        );
    };

    return (
        <>
            <div className="heart-and-share-video">
                {!_.isEmpty(dataDetail) && (
                    <>
                        <div>
                            <button
                                onClick={() => {
                                    if (isLoggedIn) {
                                        handleClickHeart(dataDetail.uuid, Token, dataDetail.is_liked);
                                    } else {
                                        handleToggleModal();
                                    }
                                }}
                            >
                                {dataDetail.is_liked ? (
                                    <FontAwesomeIcon className="heart-with-me" icon={faHeartSolid} />
                                ) : (
                                    <FontAwesomeIcon icon={faHeart} />
                                )}
                            </button>
                            <strong>{dataDetail.likes_count}</strong>
                        </div>
                        <div>
                            <a className="a-jsx" href="#comment">
                                <FontAwesomeIcon icon={faComment} />
                            </a>
                            <strong>{dataDetail.comments_count}</strong>
                        </div>
                        <TippyRender>
                            <div>
                                <button>
                                    <FontAwesomeIcon icon={faShare} />
                                </button>
                                <strong>{dataDetail.shares_count}</strong>
                            </div>
                        </TippyRender>
                    </>
                )}
            </div>
        </>
    );
}

export default memo(RenderHeart);
