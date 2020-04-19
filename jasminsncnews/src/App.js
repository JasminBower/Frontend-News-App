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
//import CommentForm from './Components/CommentForm';

class App extends React.Component {
	state = {
		loggedInUser: "tickle122",
	};

	render() {
		return (
			<div className='App'>
				<Header loggedInUser={this.state.loggedInUser} />
				<Footer className='Footer' />
				<Navbar />

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
			</div>
		);
	}
}

export default App;
