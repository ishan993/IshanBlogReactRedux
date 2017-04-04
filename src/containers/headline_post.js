import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router'; 
import ReactMarkdown from 'react-markdown';
import {EightyWidthWrapper, ReuseableCardContainer} from '../components/reuseable_components';


const headlineText = '## Miss Atomic bomb';
class HeadlinePost extends Component{
    componentDidMount(){
        console.log("I got these props"+JSON.stringify(this.props.headlineProps));
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
