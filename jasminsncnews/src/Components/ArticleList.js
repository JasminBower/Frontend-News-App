import React, { Component } from "react";
import * as api from "../utils/api";
import Loading from "./Loading";
import Articles from "./Article";
import SortArticles from "./SortArticles";

class ArticleList extends Component {
	state = {
		articles: [],
		isLoading: true,
	};

	componentDidMount() {
		this.fetchArticles();
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.topic !== this.props.topic) {
			this.fetchArticles();
		}
	}

	fetchArticles = () => {
		api.getArticles(this.props.topic).then((articles) => {
			this.setState({ articles, isLoading: false });
		});
	};

	sortArticlesBy = (sort_by, order) => {
		api.getArticles(this.props.topic, sort_by, order).then((articles) => {
			this.setState({ articles });
		});
	};

	render() {
		const { articles, isLoading } = this.state;
		if (isLoading) return <Loading />;

		return (
			<main>
				Sort articles by: <SortArticles sortArticlesBy={this.sortArticlesBy} />
				{articles.map((article) => {
					return <Articles key={article.article_id} {...article} />;
				})}
			</main>
		);
	}
}

export default ArticleList;
