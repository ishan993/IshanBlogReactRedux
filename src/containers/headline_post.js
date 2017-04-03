import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router'; 
import ReactMarkdown from 'react-markdown';


const HeadlinePostWrapper = styled.div`
    display: flex;
    width: 80%;
    height: auto;
    margin: auto;
    padding: 20px;
    margin-top: 10px;
    border: .3pt solid lightgrey;

`;

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
    display: inline-block;
    padding: 5px;
`;
const HeadlineImageContainer = styled(HeadLineTextWrapper)`
    flex: 1.5;

`;


const HeadlineTitle = styled(Link)`
    width: 100%;
    text-decoration: none;
    font-size: 3.3vw;
    color: black;
    display: inline;
    vertical-align: top;
    height: auto;
    font-weight: 300;
`;
const HeadlineContent = styled.h4`
    color: black;
    vertical-align: middle;
    padding: 5px;
    margin-left: 5px;
    height: auto;
    font-size: 2.3vw;
    font-weight: 300;
`;  
const input = '![Image of Yaktocat](https://s-media-cache-ak0.pinimg.com/236x/19/4d/09/194d0930e0867fdd67156ecf50f5e57b.jpg)';
const headlineText = '# Miss Atomic bomb';
class HeadlinePost extends Component{

  

    render(){
        return (
            <HeadlinePostWrapper>
                <HeadlineImageContainer>
                  <HeadlineImage src="http://netstorage.metrolyrics.com/albums/1383673316the-killers-direct-hits-deluxe-edition-album-download.jpg" />
                </ HeadlineImageContainer>
                <HeadLineTextWrapper>
                    <HeadlineTitle to={'/'}>
                        <ReactMarkdown source={headlineText} />
                    </HeadlineTitle>
                    <HeadlineContent>
                        Give me a shot at night, some kinda mysterious!
                    </HeadlineContent>
                </HeadLineTextWrapper>
            </HeadlinePostWrapper>
        );
    }
}

export default HeadlinePost;