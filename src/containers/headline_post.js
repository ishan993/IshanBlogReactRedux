import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router'; 
import ReactMarkdown from 'react-markdown';
import {EightyWidthWrapper} from '../components/reuseable_components';


const HeadlineImage = styled.img`
    width: 100%;
    height: 100%;
    max-height: 350px;
    max-width: 350px; 
`;
const HeadLineTextWrapper = styled.div`
    flex: 3;
    text-align: justify;
    vertical-align: top;
    height: 100%;
    margin:0;
`;
const HeadlineImageContainer = styled(HeadLineTextWrapper)`
    flex: 1.5;
`;

const headlineText = '## Miss Atomic bomb';
class HeadlinePost extends Component{

  

    render(){
        return (
            <EightyWidthWrapper>
                <HeadlineImageContainer>
                  <HeadlineImage src="http://netstorage.metrolyrics.com/albums/1383673316the-killers-direct-hits-deluxe-edition-album-download.jpg" />
                </ HeadlineImageContainer>
                <HeadLineTextWrapper>
                        <h3>Miss Atomic Bomb</h3>
                        <p>Give me a shot at night, some kinda mysterious!</p>
                </HeadLineTextWrapper>
            </EightyWidthWrapper>
        );
    }
}

export default HeadlinePost;