import React from "react";

const SortArticles = (props) => {
	return (
		<select id='sort_by' name='sort_by'>
			<option value='date'>date</option>
			<option value='comment_count'>comment_count</option>
			<option value='votes'>votes</option>
		</select>
	);
};

export default SortArticles;
