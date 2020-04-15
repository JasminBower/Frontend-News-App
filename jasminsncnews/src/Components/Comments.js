import React, { Component } from 'react';
import Loading from './Loading';
import * as api from '../utils/api';

class CommentList extends Component {
    state = {
        comments: [],
        isLoading: true

    };

    componentDidMount(){
        this.fetchComments()
  
      };
  
      componentDidUpdate(prevProps, prevState){
          if(prevProps.topic !== this.props.topic){
              this.fetchComments()
  
          }
      };
  
      fetchComments = () => {
          api.getComments(this.props.article_id).then(comments => {
              console.log(comments, '<---comments')
            this.setState({comments, isLoading: false})
          })
      }


    render() {
        const {comments, isLoading} = this.state;
        if(isLoading) return <Loading />;
        return (
            <ul>
                {comments.map(comment => {
                    return <li key={comment.comment_id} {...comment}>{...comment}</li>
                })}
            </ul>
        );
    }
}

export default CommentList;