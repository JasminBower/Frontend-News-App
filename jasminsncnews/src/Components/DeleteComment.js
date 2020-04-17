import React, { Component } from "react";
import * as api from "../utils/api";

class DeleteComment extends Component {
	render() {
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

		api.deleteComment(comment_id);
	};
}

export default DeleteComment;
