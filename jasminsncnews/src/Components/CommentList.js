import React, { Component } from "react";

import * as api from "../utils/api";
import CommentForm from "./CommentForm";
import DeleteComment from "./DeleteComment";
import Votes from "./Votes";
import DisplayError from "./DisplayError";

class CommentList extends Component {
	state = {
		comments: [],
		hasError: null,
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
		api
			.getComments(this.props.article_id)
			.then((comments) => {
				this.setState({ comments });
			})
			.catch((err) => {
				const { status, data } = err.response;
				this.setState({
					hasError: {
						status: status,
						msg: data.msg,
					},
				});
			});
	};

	addComment = (newComment) => {
		this.setState((currentState) => {
			return { comments: [newComment, ...currentState.comments] };
		});
	};

	removeComment = (comment_id) => {
		const updatedComments = this.state.comments.filter(
			(comment) => comment.comment_id !== comment_id,
		);
		this.setState({ comments: updatedComments });
	};

	patchVotes = (comment_id, vote) => {
		api
			.patchCommentVotes(comment_id, vote)
			.then((comment) => {
				const updatedComments = this.state.comments.map((item) => {
					if (item.comment_id !== comment_id) {
						return item;
					}
					return comment;
				});

				this.setState({ comments: updatedComments });
			})
			.catch((err) => {
				const { status, data } = err.response;
				this.setState({
					hasError: {
						status: status,
						msg: data.msg,
					},
				});
			});
	};

	render() {
		const { comments, hasError } = this.state;
		if (hasError)
			return <DisplayError status={hasError.status} msg={hasError.msg} />;

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
									<DeleteComment
										comment_id={comment.comment_id}
										removeComment={this.removeComment}
									/>
								)}
								<p>votes: {comment.votes}</p>
								{comment.author !== this.props.loggedInUser && (
									<Votes id={comment.comment_id} patchVotes={this.patchVotes} />
								)}
							</li>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default CommentList;
