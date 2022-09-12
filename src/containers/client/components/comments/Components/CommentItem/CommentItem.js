import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _ from 'lodash';
import React from 'react';

import Image from '../../../../../../components/Image';

import './CommentItem.scss';

class CommentItem extends React.Component {
    render() {
        const { data } = this.props;

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
                            <p>
                                <FontAwesomeIcon icon={faEllipsis} />
                            </p>
                            <div>
                                <div>
                                    <FontAwesomeIcon icon={faHeart} />
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

export default CommentItem;
