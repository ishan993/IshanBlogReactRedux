import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div  className="container">
        <h1> BlogLite</h1>
        {this.props.children}
      </div>
    );
  }
}
