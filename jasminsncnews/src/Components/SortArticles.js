import React, { Component } from "react";

class SortArticles extends Component {
	render() {
		return (
			<select id='sort_by' name='sort_by'>
				<option value='date' onClick={this.handleSort}>
					most recent
				</option>
				<option value='oldest' onSelect={this.handleSort("created_at", "asc")}>
					oldest
				</option>
				<option
					value='comment_count'
					onClick={this.handleSort("comment_count")}>
					comment_count
				</option>
				<option value='votes' onClick={this.handleSort("votes")}>
					votes
				</option>
			</select>
		);
	}

	handleSort = (sort_by = "created_at", order = "desc") => {
		const { sortArticlesBy } = this.props;

		sortArticlesBy(sort_by, order);
	};
}

export default SortArticles;
