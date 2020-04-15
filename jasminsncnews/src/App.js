import React from 'react';
import './Styling/Main.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import {Router} from '@reach/router';
import ArticleList from './Components/ArticleList';
import SingleArticle from './Components/SingleArticle';
import CommentList from './Components/Comments';







class App extends React.Component{
  state = {
    loggedInUser: 'Jasmin'
  };

 
  
  render() {
    return (
      <div className="App">
        <Header loggedInUser={this.state.loggedInUser}/>
        <Footer className="Footer" />
        <Navbar />
       
        <Router>
          <ArticleList path='/'/>
          <ArticleList path='/topics/:topic'/>
          <SingleArticle path='/articles/:article_id' />
          <CommentList path='/articles/:article_id/comments' /> 
        </Router>
        
       
  
      </div>
    );
  }
  
}

export default App;
