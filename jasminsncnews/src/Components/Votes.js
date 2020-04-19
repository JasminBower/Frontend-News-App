import React, { Component } from "react";

class Votes extends Component {
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
		const { id, patchVotes } = this.props;
		patchVotes(id, 1);
	};

	handleDownVoteCount = () => {
		const { id, patchVotes } = this.props;
		patchVotes(id, -1);
	};
}

export default Votes;
