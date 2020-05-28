import React, { Component } from "react";
import * as api from "../utils/api";
import Loading from "./Loading";
import { Link } from "@reach/router";
import Votes from "./Votes";
import DisplayError from "./DisplayError";

class SingleArticle extends Component {
	state = {
		article: [],
		isLoading: true,
		articleError: null,
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
		api
			.getSingleArticle(this.props.article_id)
			.then((article) => {
				this.setState({ article, isLoading: false });
			})
			.catch((err) => {
				const { status, data } = err.response;
				this.setState({
					articleError: {
						status: status,
						msg: data.msg,
					},
				});
			});
	};

	patchVotes = (articleResponse) => {
		this.setState({ article: articleResponse.article });
	};

	render() {
		const { article, isLoading, articleError } = this.state;
		if (articleError)
			return (
				<DisplayError status={articleError.status} msg={articleError.msg} />
			);
		if (isLoading) return <Loading />;

		return (
			<main>
				<h1>{article.title}</h1>
				<p>votes: {article.votes}</p>
				<Votes
					id={article.article_id}
					patchVotes={this.patchVotes}
					type={"articles"}
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
