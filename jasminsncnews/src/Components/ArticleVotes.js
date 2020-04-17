import React, { Component } from "react";

class ArticleVotes extends Component {
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
		const { article_id, patchVotes } = this.props;
		patchVotes(article_id, 1);
	};

	handleDownVoteCount = () => {
		const { article_id, patchVotes } = this.props;
		patchVotes(article_id, -1);
	};
}

export default ArticleVotes;
