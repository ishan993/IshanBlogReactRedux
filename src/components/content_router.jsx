import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
// import NoMatch from './NoMatch';
// import CurrentPost from '../containers/current_post';
import HomeComponent from '../containers/home_page';
import ShowPostComponent from '../containers/show_post';
import CreatePostComponent from '../containers/create_post';

const RouterWrapper = styled.div`
  margin-top: 50px;
  padding: 0;
`;
// Handles all the client side routing
const ContentRouter = () => (
  <RouterWrapper>
    <Switch>
      <Route
        path="/"
        exact
        component={props => <HomeComponent routerProps={props} />}
      />
      <Route
        path="/post/new"
        exact
        component={props => <CreatePostComponent routerProps={props} />}
      />
      <Route
        path="/post/:id"
        exact
        component={props => <ShowPostComponent routerProps={props} />}
      />
    </Switch>
  </RouterWrapper>
);

export default ContentRouter;
