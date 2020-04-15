import React, { Component } from 'react';
import * as api from '../utils/api';
import Loading from '../Components/Loading';
import {Link} from '@reach/router';


class Navbar extends Component {
    state = {
        topics: [],
        isLoading: true

    };

  componentDidMount(){
      api.getTopics().then(topics => {
      this.setState({topics, isLoading: false})
      })

  }



    render() {
       const {topics, isLoading} = this.state;
       if(isLoading) return  <Loading />
        return (
            <nav className="Nav">
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                   {topics.map(topic => {
                       return <li key={topic.slug}><Link to={`topics/${topic.slug}`}>{topic.slug}</Link></li>
                   })}
                </ul>
               
            </nav>
            
        );
    }
}

export default Navbar;