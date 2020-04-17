import React, { Component } from "react";

class SortArticles extends Component {
	render() {
		return (
			<select id='sort_by' name='sort_by' onChange={this.handleSort}>
				<option value='created_at'>most recent</option>
				<option value='oldest'>oldest</option>
				<option value='comment_count'>comment_count</option>
				<option value='votes'>votes</option>
			</select>
		);
	}

	handleSort = (event) => {
		const { value } = event.target;
		const order = value === "oldest" ? "asc" : "desc";

		this.props.sortArticlesBy(value, order);
	};
}

export default SortArticles;
