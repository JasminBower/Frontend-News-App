import React, { Component } from "react";
import * as api from "../utils/api";

class Votes extends Component {
	state = {
		hasError: null,
		optimisticVotes: 0,
	};
	render() {
		const { optimisticVotes } = this.state;
		return (
			<div>
				<button
					name='1'
					onClick={() => this.handleVotes(1)}
					disabled={optimisticVotes > 0}>
					upvote
				</button>
				<button
					name='-1'
					onClick={() => this.handleVotes(-1)}
					disabled={optimisticVotes < 0}>
					downvote
				</button>
			</div>
		);
	}

	handleVotes = (vote) => {
		const { id, patchVotes, type } = this.props;
		this.setState((currentState) => {
			return { optimisticVotes: currentState.optimisticVotes + vote };
		});

		api
			.patchVotes(id, type, vote)
			.then((response) => {
				patchVotes(response);
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
}

export default Votes;
