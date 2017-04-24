import React from 'react';
import {Route, IndexRoute} from 'react-router';


import App from './components/app';
import CurrentPost from './containers/current_post';
import HomePage from './containers/home_page';
import ShowPost from './containers/show_post';
import CreatePost from './containers/create_post';

export default(
    <Route path="/" component={App} >
        <IndexRoute component={HomePage} />
        <Route path="post/new" component={CreatePost} />
        <Route path="post/:id" component={ShowPost} />
    </Route>
);