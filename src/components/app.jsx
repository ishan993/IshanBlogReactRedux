import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import ContentRouter from './content_router';
import NavBar from '../containers/nav_bar';


class App extends Component {
  render() {
    return (
      <div className="parent">
        <BrowserRouter>
          <div>
            <NavBar />
            <ContentRouter />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;


