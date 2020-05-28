import React, { Component } from "react";

class SortArticles extends Component {
	render() {
		return (
			<select id='sort_by' name='sort_by' onChange={this.handleSort}>
				{/* <option value='blank'>sort by</option> */}
				<option value='created_at'>oldest</option>
				<option value='comment_count'>comment_count</option>
				<option value='votes'>votes</option>
			</select>
		);
	}

	handleSort = (event) => {
		const { value } = event.target;
		const order = value === "created_at" ? "asc" : "desc";

		this.props.fetchArticles(value, order);
	};
}

export default SortArticles;
