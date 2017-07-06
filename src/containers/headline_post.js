import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'; 
import ReactMarkdown from 'react-markdown';
import {EightyWidthWrapper, ReuseableCardContainer} from '../components/reuseable_components';


const headlineText = '## Miss Atomic bomb';
class HeadlinePost extends Component{
    componentDidMount(){
    }

    render(){
        return (
            <EightyWidthWrapper>
                {ReuseableCardContainer(this.props.headlineProps)}
            </EightyWidthWrapper>
        );
    }
}

export default HeadlinePost;
