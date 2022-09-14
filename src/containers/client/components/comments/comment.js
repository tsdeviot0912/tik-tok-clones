import { Component } from 'react';

import './comment.scss';
import CommentItem from './Components/CommentItem';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: [],
            detailComment: [],
            uuid: '',
        };
    }

    componentDidUpdate(prevProps, nextProps, props) {
        const { listComment, uuid } = this.props;
        if (prevProps.listComment !== listComment) {
            this.setState({
                comment: listComment,
            });
        }

        if (prevProps.uuid !== uuid) {
            this.setState({
                uuid: uuid,
            });
        }
    }

    render() {
        const { comment } = this.state;
        const { uuid } = this.props;

        return (
            <div className="comment-wrapper">
                <div className="comment-body">
                    {comment && comment.length > 0 ? (
                        comment.map((data) => <CommentItem key={data.id} uuid={uuid} data={data} />)
                    ) : (
                        <span className="comment-not-comment">Bạn hãy trở thành người bình luận đầu tiên</span>
                    )}
                </div>
                <div className="comment-rep">
                    {/*                     
                    <CommentItem />
                    <CommentItem />
                    <CommentItem /> */}
                </div>
            </div>
        );
    }
}

export default Comment;
