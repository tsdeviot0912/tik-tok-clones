import { Component } from 'react';

import './comment.scss';
import CommentItem from './Components/CommentItem';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: [],
        };
    }

    componentDidUpdate(prevProps, nextProps, props) {
        const { listComment } = this.props;
        if (prevProps.listComment !== listComment) {
            this.setState({
                comment: listComment,
            });
        }
    }

    render() {
        const { comment } = this.state;

        return (
            <div className="comment-wrapper">
                <div className="comment-body">
                    {comment && comment.length > 0 && comment.map((data) => <CommentItem data={data} />)}
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
