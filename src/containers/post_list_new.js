import React, {Component} from 'react';
import styled from 'styled-components';
import {EightyWidthWrapper} from '../components/reuseable_components';


const ThisWrapper = styled(EightyWidthWrapper)`
    flex-wrap: wrap;
    flex-direction: column;
    background: aliceblue;
`;

const PostListLi = styled.div`
    background: papayawhip;
    flex: 1;
    border-bottom: .3pt solid lightgrey;
    margin-top: 20px;
    padding-top: 10px;
    padding-bottom: 10px;

    @media only screen and (min-width: 768px) {
        display:flex;
        direction: row;
        width: 100%;
    }
`;
const PostListImg = styled.img`
    background: palevioletred;
    height: auto;
    width: auto;
    margin: auto;
    max-height: 200px;
    max-height: 200px;
    max-width: auto;
     @media only screen and (min-width: 768px) {
        flex: 1;
        max-height: 200px;
        max-width: 200px;
    }

`;
const PostListTextWrapper = styled.div`
    padding: 5px;
    margin-left: 10px;
    @media only screen and (min-width: 768px) {
        flex: 2;
    }

`;

export default class PostList extends Component{

    render(){
        return (
            <ThisWrapper>
                    <PostListLi>
                        <PostListImg  src="https://i.ytimg.com/vi/D3Bwx8BxY5k/maxresdefault.jpg"/>
                            <PostListTextWrapper>
                            <h4>Blackbird</h4>
                            <p>Blackbird singing in the dead of night. 
                                Take these broken wings and learn to fly!
                                All your life, you've only been waiting for this moment to be free
                            </p>
                        </PostListTextWrapper>
                    </PostListLi>
                    <PostListLi>
                        <PostListImg  src="http://okp-cdn.okayplayer.com/wp-content/uploads/2017/02/john-mayer-wave-two-copy.jpg"/>
                        <PostListTextWrapper>
                            <h4>Helpless</h4>
                            <p>
                                If i'm helpless, tell me now, tell me now!
                                And I'll stop trying to figure it out!
                                If I'm helpless, then I'll stop trying to figure it out!
                            </p>
                        </PostListTextWrapper>
                    </PostListLi>
                    <PostListLi>
                        <PostListImg  src="https://i1.sndcdn.com/artworks-000064705607-jq0bfe-t500x500.jpg"/>
                            <PostListTextWrapper>
                                <h4>Wish you were here.</h4>
                                <p>
                                    Did they get you to trade your heros for ghosts. Cold comfort for change.
                                    Did you exchange a walk on part in the war for a lead role in a cage ?
                                </p>
                            </PostListTextWrapper>
                        </PostListLi>
            </ThisWrapper>
        );
    }
}
