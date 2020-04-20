import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

const ArticleLink = styled.h1`
	list-style-type: none;
	text-decoration: none;
`;

const Articles = (props) => {
	const { title, author, article_id, votes } = props;

	return (
		<div>
			<ArticleLink>
				<Link to={`/articles/${article_id}`}>{title}</Link>
			</ArticleLink>

			<p>
				by {author} votes: {votes}
			</p>
		</div>
	);
};

export default Articles;
