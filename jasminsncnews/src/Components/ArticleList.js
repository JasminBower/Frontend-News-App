import React, { Component } from 'react';
import * as api from '../utils/api';
import Loading from './Loading';
import Articles from './Article';

class ArticleList extends Component {
    state = {
        articles : [],
        isLoading: true

    };

    componentDidMount(){
      this.fetchArticles()

    };

    componentDidUpdate(prevProps, prevState){
        if(prevProps.topic !== this.props.topic){
            this.fetchArticles()

        }
    };

    fetchArticles = () => {
        api.getArticles(this.props.topic).then(articles => {
          this.setState({articles, isLoading: false})
        })
    }

    render() {
        const {articles, isLoading} = this.state;
        //console.log(articles)
        if(isLoading) return <Loading />;
        return (
            <main>
                {articles.map(article => {
                 
                    return <Articles key={article.article_id} {...article} />
                })}
            </main>
        );
    }
}

export default ArticleList;