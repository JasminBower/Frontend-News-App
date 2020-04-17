import React, { Component } from "react";

class CommentVotes extends Component {
	render() {
		return (
			<div>
				<button name='upvotes' onClick={this.handleUpVoteCount}>
					upvote
				</button>
				<button name='downvotes' onClick={this.handleDownVoteCount}>
					downvote
				</button>
			</div>
		);
	}

	handleUpVoteCount = () => {
		const { comment_id, patchVotes } = this.props;
		patchVotes(comment_id, 1);
	};

	handleDownVoteCount = () => {
		const { comment_id, patchVotes } = this.props;
		patchVotes(comment_id, -1);
	};
}

export default CommentVotes;
