import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ContentRouter from './content_router';
import NavBar from './NavBar';

const App = () => (
  <div className="parent">
    <BrowserRouter>
      <div>
        <NavBar />
        <ContentRouter />
      </div>
    </BrowserRouter>
  </div>
);

export default App;


