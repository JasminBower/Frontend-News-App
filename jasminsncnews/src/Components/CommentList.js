import React, { Component } from "react";

import * as api from "../utils/api";
import CommentForm from "./CommentForm";
import DeleteComment from "./DeleteComment";

class CommentList extends Component {
	state = {
		comments: [],
	};

	componentDidMount() {
		this.fetchComments();
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.topic !== this.props.topic) {
			this.fetchComments();
		}
	}

	fetchComments = () => {
		api.getComments(this.props.article_id).then((comments) => {
			this.setState({ comments });
		});
	};

	addComment = (newComment) => {
		this.setState((currentState) => {
			return { comments: [newComment, ...currentState.comments] };
		});
	};

	render() {
		const { comments } = this.state;

		return (
			<div>
				<CommentForm
					article_id={this.props.article_id}
					username={this.props.loggedInUser}
					addComment={this.addComment}
				/>
				<ul>
					{comments.map((comment) => {
						return (
							<li key={comment.comment_id}>
								<h1>{comment.body}</h1>
								<p>by: {comment.author}</p>
								{comment.author === this.props.loggedInUser && (
									<DeleteComment comment_id={comment.comment_id} />
								)}
								<p>votes: {comment.votes}</p>
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default CommentList;
