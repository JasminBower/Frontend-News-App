import React, { Component } from "react";
import * as api from "../utils/api";
import Loading from "./Loading";
import { Link } from "@reach/router";
import ArticleVotes from "./ArticleVotes";

class SingleArticle extends Component {
	state = {
		article: [],
		isLoading: true,
	};

	componentDidMount() {
		this.fetchArticle();
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.article_id !== this.props.article_id) {
			this.fetchArticle();
		}
	}

	fetchArticle = () => {
		api.getSingleArticle(this.props.article_id).then((article) => {
			this.setState({ article, isLoading: false });
		});
	};

	patchVotes = (article_id, vote) => {
		api.patchArticleVotes(article_id, vote).then((article) => {
			this.setState({ article });
		});
	};

	render() {
		//console.log(this.state, 'this')
		const { article, isLoading } = this.state;
		if (isLoading) return <Loading />;

		return (
			<main>
				<h1>{article.title}</h1>
				<p>votes: {article.votes}</p>
				<ArticleVotes
					article_id={article.article_id}
					patchVotes={this.patchVotes}
				/>
				<p>{article.body}</p>
				<p>
					<Link to={`/articles/${article.article_id}/comments`}>
						Article Comments
					</Link>
				</p>
				<p>comments: {article.comment_count}</p>
			</main>
		);
	}
}

export default SingleArticle;
