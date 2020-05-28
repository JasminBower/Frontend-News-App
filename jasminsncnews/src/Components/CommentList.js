import React, { Component } from "react";

import * as api from "../utils/api";
import CommentForm from "./CommentForm";
import DeleteComment from "./DeleteComment";
import Votes from "./Votes";
import DisplayError from "./DisplayError";
import styled from "styled-components";

const CommentItem = styled.li`
	list-style-type: none;
`;

class CommentList extends Component {
	state = {
		comments: [],
		hasError: null,
	};

	componentDidMount() {
		this.fetchComments();
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

	patchVotes = (commentResponse) => {
		const { comment_id } = commentResponse.comment;
		const updatedComments = this.state.comments.map((comment) => {
			if (comment.comment_id !== comment_id) {
				return comment;
			}
			return commentResponse.comment;
		});

		this.setState({ comments: updatedComments });
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
							<CommentItem key={comment.comment_id}>
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
									<Votes
										id={comment.comment_id}
										patchVotes={this.patchVotes}
										type={"comments"}
									/>
								)}
							</CommentItem>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default CommentList;
