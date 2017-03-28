import React, { Component } from 'react';
import NavigationBar from '../containers/nav_bar';
import TabBar from './tab_bar';

export default class App extends Component {
  render() {
    return (
      <div className="parent">
        <NavigationBar />
        <TabBar />
      </div>
    );
  }
}



//<div  className="container">
//        <h1> BlogLite</h1>
//          {this.props.children}
//      </div>