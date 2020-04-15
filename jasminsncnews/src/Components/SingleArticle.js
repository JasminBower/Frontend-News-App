import React, { Component } from 'react';
import * as api from '../utils/api';
import Loading from './Loading';
import {Link} from '@reach/router';


class SingleArticle extends Component {
    state = {
        article: [],
        isLoading: true
    };
  
    componentDidMount(){
       this.fetchArticle()

    };

    componentDidUpdate(prevProps, prevState){
        if(prevProps.article_id !== this.props.article_id){
            this.fetchArticle()
        }

        
    }

    fetchArticle = () => {
     api.getSingleArticle(this.props.article_id).then(article => {
         //console.log(article, 'whyyyyyy do you hate me?')
            this.setState({article, isLoading: false}) 
        })
    };


    render() {
        //console.log(this.state, 'this')
        const {article, isLoading} = this.state;
        if(isLoading) return <Loading />
        console.log(article, '<<<<')
        return (
            <main>
               <h1>{article.title}</h1>
               <p>{article.votes}</p>
               <p>{article.body}</p>
               <p><Link to={`/articles/${article.article_id}/comments`}>Article Comments</Link></p>
               <p>{article.comment_count}</p>

            </main>
        );
    }
}

export default SingleArticle;