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
		console.log(this.props);
		api.getArticles(this.props.topic).then((articles) => {
			this.setState({ articles, isLoading: false });
		});
	};

	render() {
		const { articles, isLoading } = this.state;
		if (isLoading) return <Loading />;

		return (
			<main>
				Sort articles by: <SortArticles />
				{articles.map((article) => {
					return <Articles key={article.article_id} {...article} />;
				})}
			</main>
		);
	}
}

export default ArticleList;
