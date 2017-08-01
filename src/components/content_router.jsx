import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import HomeComponent from '../components/HomeContainer';
import CreatePostComponent from '../components/CreatePost';
import CurrentPost from './CurrentPost';
import UserInfo from './UserInfo';
import EditUser from './EditUserInfo';

const RouterWrapper = styled.div`
  margin-top: 60px;
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
        component={props => <CurrentPost routerProps={props} />}
      />
      <Route
        path="/user/:id"
        exact
        component={props => <UserInfo routerProps={props} />}
      />
      <Route
        path="/edit/:id"
        exact
        component={props => <EditUser routerProps={props} />}
      />
    </Switch>
  </RouterWrapper>
);

export default ContentRouter;
