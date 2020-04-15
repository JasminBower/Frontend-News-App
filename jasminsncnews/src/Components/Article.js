import React from 'react';
import {Link} from '@reach/router';

const Articles = (props) => {
 
    const {title, author, article_id} = props;
 
    
    return (
        <div>
            <h1><Link to={`/articles/${article_id}`}>
               
                {title}
                </Link></h1>
            <p>by {author}</p>
            
            
        </div>
    );
};

export default Articles;