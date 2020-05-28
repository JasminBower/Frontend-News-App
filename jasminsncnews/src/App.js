import React from "react";
import "./Styling/Main.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Router } from "@reach/router";
import ArticleList from "./Components/ArticleList";
import SingleArticle from "./Components/SingleArticle";
import CommentList from "./Components/CommentList";
import DisplayError from "./Components/DisplayError";

class App extends React.Component {
	state = {};

	render() {
		return (
			<div className='App'>
				<Header />

				<Navbar className='Navbar' />

				<Router>
					<ArticleList path='/' />

					<ArticleList path='/topics/:topic' />
					<SingleArticle path='/articles/:article_id' />
					<CommentList
						path='/articles/:article_id/comments'
						loggedInUser={this.state.loggedInUser}
					/>
					<DisplayError default status={404} msg={"Path not found"} />
					{/* <CommentForm path='/articles/:article_id/comments' loggedInUser={this.state.loggedInUser}/>  */}
				</Router>
				<Footer className='Footer' />
			</div>
		);
	}
}

export default App;
