import React, {Component} from 'react';
import styled from 'styled-components';

const PostListWrapper = styled.div`
   
    width: 84%;
    margin: auto;
`;

const PostListUL = styled.ul`
    list-style-type: none;
`;

const PostListLi = styled.li`
    display:flex;
    border-top: .3pt solid lightgrey;
    border-bottom: .3pt solid lightgrey;
    margin-top: 20px;
    padding-top: 10px;
    padding-bottom: 10px;s
`;
const PostListImg = styled.img`
    flex: 1;
    height: auto;
    width: auto;
    max-height: 125px;
    max-height: 125px;
    max-width: auto;
     @media only screen and (min-width: 768px) {
        max-height: 200px;
        max-width: 200px;
    }

`;
const PostListTextWrapper = styled.div`
    flex: 2;
    padding: 5px;
    margin-left: 10px;
`;

export default class PostList extends Component{

    render(){
        return (
            <PostListWrapper>
                <PostListUL>
                    <PostListLi>
                        <PostListImg  src="https://i.ytimg.com/vi/D3Bwx8BxY5k/maxresdefault.jpg"/>
                            <PostListTextWrapper>
                            <h2>Blackbird</h2>
                            <h4>Blackbird singing in the dead of night. 
                                Take these broken wings and learn to fly!
                                All your life, you've only been waiting for this moment to be free
                            </h4>
                        </PostListTextWrapper>
                    </PostListLi>
                    <PostListLi>
                        <PostListImg  src="http://okp-cdn.okayplayer.com/wp-content/uploads/2017/02/john-mayer-wave-two-copy.jpg"/>
                        <PostListTextWrapper>
                            <h2>Helpless</h2>
                            <h4>
                                If i'm helpless, tell me now, tell me now!
                                And I'll stop trying to figure it out!
                                If I'm helpless, then I'll stop trying to figure it out!
                            </h4>
                        </PostListTextWrapper>
                    </PostListLi>
                    <PostListLi>
                        <PostListImg  src="https://i1.sndcdn.com/artworks-000064705607-jq0bfe-t500x500.jpg"/>
                            <PostListTextWrapper>
                                <h2>Wish you were here.</h2>
                                <h4>
                                    Did they get you to trade your heros for ghosts. Cold comfort for change.
                                    Did you exchange a walk on part in the war for a lead role in a cage ?
                                </h4>
                            </PostListTextWrapper>
                        </PostListLi>
                    </PostListUL>
            </PostListWrapper>
        );
    }
}
