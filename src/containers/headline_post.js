import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router';

const HeadlinePostWrapper = styled.div`
    display: flex;
    width: 80%;
    height: auto;
    margin: auto;
    padding: 20px;
    margin-top: 10px;
    border: .3pt solid lightgrey;
    background: papayawhip;

`;

const HeadlineImage = styled.img`
    width: 100%;
    height: 100%;
    max-height: 350px;
    max-width: 350px; 
`;

const HeadLineTextWrapper = styled.div`
    background: palevioletred;
    flex: 3;
    text-align: justify;
    vertical-align: top;
    height: 100%;
    display: inline-block;
    padding: 5px;
`;
const HeadlineImageContainer = styled(HeadLineTextWrapper)`
    flex: 1.5;
    background: tomato;

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
    font-size: 2vw;
    font-weight: 300;
`;  

class HeadlinePost extends Component{

  

    render(){
        return (
            <HeadlinePostWrapper>
                <HeadlineImageContainer>
                  <HeadlineImage src="http://netstorage.metrolyrics.com/albums/1383673316the-killers-direct-hits-deluxe-edition-album-download.jpg" />
                </ HeadlineImageContainer>
                <HeadLineTextWrapper>
                    <HeadlineTitle to={'/'}>
                        Hello world!, how are you?<br/> I'm good, Thank you! How are you?
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