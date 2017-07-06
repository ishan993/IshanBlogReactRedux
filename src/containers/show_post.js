import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { EightyWidthWrapper, ReusableCenteredImage } from '../components/reuseable_components';
import { fetchPostWithId } from '../actions/index';
import ReactMarkdown from 'react-markdown';

const FullWidthNoFlexWrapper = styled.div`
    width: 100%;
    padding: 20px;
    display: block;
`;
const MarkDown = styled(ReactMarkdown)`
    font-weight: 50;
`;

class ShowPost extends Component{
     componentDidMount(){
        console.log("ShowPost Component did mount!"+this.props.params.id);
        //Here is where we send a request to fetch current post
        this.props.fetchPostWithId(this.props.params.id);
    }
    renderPost(){
        if(this.props.post){
            return(
                <FullWidthNoFlexWrapper>
                    <h2>{this.props.post.postTitle}</h2>
                    <ReusableCenteredImage src={this.props.post.postTitleImageURL} />
                    <MarkDown source={this.props.post.postContent} />
                </FullWidthNoFlexWrapper>
        )}else 
            return ("Loading...");
    }
    render(){
    {console.log("I got a post!"+JSON.stringify(this.props.post))}
        return(
            <div>
                <EightyWidthWrapper>
                    {this.renderPost()}
                </EightyWidthWrapper>
            </div>
        );
    }
}
function mapStateToProps(state){
    return({post: state.posts.post})
}

export default connect(mapStateToProps, {fetchPostWithId})(ShowPost);