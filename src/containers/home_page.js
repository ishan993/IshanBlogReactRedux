import React, {Component} from 'react';
import {connect} from 'react-redux';
import HeadlinePost from './headline_post';
import TabBar from './tab_bar';
import MidlinePosts from './midline_posts';
import PostList from './post_list_new';
import ResumeTab from './resume_tab';


class HomePage extends Component{

    renderHomePage(){
        if(this.props.resumeVisible){
           return (<ResumeTab />);
        } else{
            return(
                <div>
                    <HeadlinePost />
                    <MidlinePosts />
                    <PostList />
                </div>
            )
        }
    }

    render(){
        return(
            <div>
                <TabBar />
                {this.renderHomePage()}
            </div>
        );
    }
}
function mapStateToProps(state){
    return {resumeVisible: state.displayComps.resumeVisible};
}

export default connect(mapStateToProps, null)(HomePage);