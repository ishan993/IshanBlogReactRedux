import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import PostList from './containers/post_list';
import NewPost from './containers/new_post';
import CurrentPost from './containers/current_post';

export default(
    <Route path="/" component={App} >
        <IndexRoute component={PostList} />
        <Route path='posts/new' component={NewPost} />
        <Route path="posts/:id"component={CurrentPost} />
    </Route>
);