import axios from "axios";

const request = axios.create({ baseURL: "https://jbcnews.herokuapp.com/api" });

export const getTopics = () => {
	return request.get("/topics").then(({ data }) => {
		return data.topics;
	});
};

export const getArticles = (topic, created_at, comment_count, votes) => {
	return request
		.get(
			"/articles",
			{ params: { topic } },
			{ query: { created_at, comment_count, votes } },
		)
		.then(({ data }) => {
			return data.articles;
		});
};

export const getSingleArticle = (article_id) => {
	return request.get(`/articles/${article_id}`).then(({ data }) => {
		return data.article;
	});
};

export const getComments = (article_id) => {
	return request.get(`/articles/${article_id}/comments`).then(({ data }) => {
		return data.comments;
	});
};

export const postComment = (article_id, comment) => {
	return request
		.post(`/articles/${article_id}/comments`, comment)
		.then(({ data }) => {
			console.log(data, "responseeeeeee");
			return data.comment;
		});
};

export const deleteComment = (comment_id) => {
	return request.delete(`/comments/${comment_id}`);
};
