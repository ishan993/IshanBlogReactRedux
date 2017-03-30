import React, {Component} from 'react';
import HeadlinePost from '../containers/headline_post';
import TabBar from './tab_bar';
import MidlinePosts from '../containers/midline_posts';
import PostList from '../containers/post_list_new';



export default function (){
    return(
        <div>
            <TabBar />
            <HeadlinePost />
            <MidlinePosts />
            <PostList />
        </div>
    );
}