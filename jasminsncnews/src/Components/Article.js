import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

const ArticleLink = styled.a`
	list-style-type: none;
	text-decoration: none;
`;

const Articles = (props) => {
	const { title, author, article_id, votes } = props;

	return (
		<div>
			<h1>
				<Link to={`/articles/${article_id}`}>
					<ArticleLink>{title}</ArticleLink>
				</Link>
			</h1>
			<p>
				by {author} votes: {votes}
			</p>
		</div>
	);
};

export default Articles;
