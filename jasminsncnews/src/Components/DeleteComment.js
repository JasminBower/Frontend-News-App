import React, { Component } from "react";
import * as api from "../utils/api";
import DisplayError from "./DisplayError";

class DeleteComment extends Component {
	state = {
		deleteError: null,
	};
	render() {
		const { deleteError } = this.state;
		if (deleteError)
			return <DisplayError status={deleteError.status} msg={deleteError.msg} />;
		return (
			<div>
				<button name='delete_button' onClick={this.deleteSingleComment}>
					Delete Comment
				</button>
			</div>
		);
	}

	deleteSingleComment = (event) => {
		const { comment_id, removeComment } = this.props;
		event.preventDefault();
		removeComment(comment_id);

		api.deleteComment(comment_id).catch((err) => {
			const { status, data } = err.response;
			this.setState({
				deleteError: {
					status: status,
					msg: data.msg,
				},
			});
		});
	};
}

export default DeleteComment;
