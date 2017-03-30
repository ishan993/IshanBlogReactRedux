import React from 'react';
import {Route, IndexRoute} from 'react-router';


import App from './components/app';
import PostList from './containers/post_list';
import NewPost from './containers/new_post';
import CurrentPost from './containers/current_post';
import HomePage from './components/home_page';
import ShowPost from './containers/show_post';
import CreatePost from './containers/create_post';

export default(
    <Route path="/" component={App} >
        <IndexRoute component={HomePage} />
        <Route path="post" component={ShowPost} />
        <Route path="post/new" component={CreatePost} />

    </Route>
);