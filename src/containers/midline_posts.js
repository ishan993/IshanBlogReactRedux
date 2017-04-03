import React, {Component} from 'react';
import styled from 'styled-components';
import {EightyWidthWrapper} from '../components/reuseable_components';


const MidlinePostsWrapper = styled(EightyWidthWrapper)`
    display: block;
    @media only screen and (min-width: 768px) {
        display: flex;
    }
`;


const MidlinePostBlock = styled.div`
    margin-top: 10px;
    flex-basis: 30%;
    display: flex;
    flex-direction: row;
    @media only screen and (min-width: 768px) {
        flex-direction: column;
    }
`;

const BlockImageWrapper = styled.div`
    flex: 1;    
`;
const BlockImage = styled.img`
    height: auto;
    width: auto;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain
`;
const BlockText = styled.div`
    flex: 2;
    padding: 5px;
     @media only screen and (min-width: 768px) {
        flex: 2;
    }
`;


export default class MidlinePosts extends Component{

    render(){
        return(
            <MidlinePostsWrapper>
                <MidlinePostBlock>
                    <BlockImageWrapper>
                        <BlockImage src="https://s-media-cache-ak0.pinimg.com/originals/5c/91/a0/5c91a0775997aaedec4e68807b806e03.jpg"/>
                    </BlockImageWrapper>
                    <BlockText>
                        <h4>Manhattan</h4>
                        <p>I like to dance all night, summons the day.That's how i play,
                         that's how I play. So we dance all night And dance all day</p>
                    </BlockText>
                </MidlinePostBlock>
                 <MidlinePostBlock>
                    <BlockImageWrapper>
                        <BlockImage src="http://i1095.photobucket.com/albums/i480/RocKnocks/2013%20Music%20Albums%20Cover/mechanicalbull_zpsf96a8034.jpg" />
                    </ BlockImageWrapper>
                    <BlockText>
                        <h4>SuperSoaker</h4>
                        <p>I don't mind sentimental girls at time. I just live on the line</p>
                    </BlockText>
                </MidlinePostBlock>
                 <MidlinePostBlock>
                    <BlockImageWrapper>
                        <BlockImage src="https://upload.wikimedia.org/wikipedia/en/0/03/Because_of_the_Times_%28Kings_of_Leon_album_-_cover_art%29.jpg" />
                    </BlockImageWrapper>
                    <BlockText>
                        <h4>Fans</h4>
                        <p>Homegrown, right to the rhthym and back to the beat of the radio!
                        And i'll take it down, don't you let those tears, I swear, touch the ground.</p>
                    </BlockText>
                </MidlinePostBlock>
            </ MidlinePostsWrapper>
        );
    }

}