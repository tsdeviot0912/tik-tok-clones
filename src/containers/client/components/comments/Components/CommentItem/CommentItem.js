import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faEllipsis, faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import useGetToken from '../../../../../../components/hooks/useGetToken';
import Image from '../../../../../../components/Image';
import * as actions from '../../../../../.././store/actions';

import './CommentItem.scss';

class CommentItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detailCommentsLike: {},
            userInfo: null,
        };
    }

    componentDidUpdate(prevProps, nextProps, next) {
        const { detailCommentsLike, userInfo } = this.props;

        if (prevProps.detailCommentsLike !== detailCommentsLike) {
            this.setState({
                detailCommentsLike: detailCommentsLike,
            });
        }

        if (prevProps.userInfo !== userInfo) {
            this.setState({
                userInfo: userInfo,
            });
        }
    }

    handleDeletedComment = (id, token, uuid) => {
        const { deleteComment } = this.props;

        deleteComment(id, token, uuid);
    };

    handleHeartComment = async (id, token, uuid, toggle) => {
        const { likeComment, unLikeComment } = this.props;

        if (!toggle) {
            likeComment(id, token, uuid);
        } else {
            unLikeComment(id, token, uuid);
        }
    };

    render() {
        const { data, uuid } = this.props;

        // eslint-disable-next-line react-hooks/rules-of-hooks
        const Token = useGetToken();

        return (
            <div className="comment-item-wrapper">
                {!_.isEmpty(data) && (
                    <div className="d-flex justify-content-between">
                        <div className="image">
                            <Image src={!_.isEmpty(data.user) && data.user.avatar} alt="anh dai dien" />
                        </div>
                        <div className="body">
                            <h2>{!_.isEmpty(data.user) && `${data.user.first_name} ${data.user.last_name}`}</h2>
                            <p>
                                <span>{data.comment}</span>
                            </p>
                        </div>
                        <div className="site">
                            <p className="">
                                <FontAwesomeIcon icon={faEllipsis} />
                                <span className="hover-deleted">
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => this.handleDeletedComment(data.id, Token, uuid)}
                                    >
                                        Xóa
                                    </button>
                                </span>
                            </p>
                            <div>
                                <div onClick={() => this.handleHeartComment(data.id, Token, uuid, data.is_liked)}>
                                    {data.is_liked ? (
                                        <FontAwesomeIcon className="heart-with-me" icon={faHeartSolid} />
                                    ) : (
                                        <FontAwesomeIcon icon={faHeart} />
                                    )}
                                </div>
                                <span>{data.likes_count}</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        // detailCommentsLike: state.SiteReducer.detailCommentsLike,
        userInfo: state.user.userInfo,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteComment: (id, token, uuid) => dispatch(actions.deleteComment(id, token, uuid)),
        likeComment: (id, token, uuid) => dispatch(actions.likeComment(id, token, uuid)),
        unLikeComment: (id, token, uuid) => dispatch(actions.unLikeComment(id, token, uuid)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentItem);
