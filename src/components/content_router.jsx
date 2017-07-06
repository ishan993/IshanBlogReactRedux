import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import NoMatch from './NoMatch';
// import CurrentPost from '../containers/current_post';
import HomeComponent from '../containers/home_page';
import ShowPostComponent from '../containers/show_post';
import CreatePostComponent from '../containers/create_post';

// Handles all the client side routing
const ContentRouter = () => (
  <div>
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
  </div>
);

export default ContentRouter;
