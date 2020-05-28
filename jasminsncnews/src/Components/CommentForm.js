import React, { Component } from "react";
import * as api from "../utils/api";

class CommentForm extends Component {
	state = {
		body: "",
	};

	render() {
		const { body } = this.state;

		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Comment:
					<textarea
						required
						name='newComment'
						type='text'
						value={body}
						onChange={this.handleInput}
					/>
				</label>
				<button>submit comment</button>
			</form>
		);
	}

	handleInput = (event) => {
		const { value } = event.target;
		this.setState({ body: value });
	};

	handleSubmit = (event) => {
		const { article_id, username } = this.props;
		const { body } = this.state;
		const comment = { username, body };
		event.preventDefault();
		api.postComment(article_id, comment).then((comment) => {
			this.props.addComment(comment);
		});
	};
}

export default CommentForm;
