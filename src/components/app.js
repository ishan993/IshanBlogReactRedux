import React, { Component } from 'react';
import NavigationBar from '../containers/nav_bar';
import HeadlinePost from '../containers/headline_post';
import TabBar from './tab_bar';
import MidlinePosts from '../containers/midline_posts';

export default class App extends Component {
  
  render() {
    return (
      <div className="parent">
        <NavigationBar />
        <TabBar />
        <HeadlinePost />
        <MidlinePosts />
      </div>
    );
  }
}



//<div  className="container">
//        <h1> BlogLite</h1>
//          {this.props.children}
//      </div>