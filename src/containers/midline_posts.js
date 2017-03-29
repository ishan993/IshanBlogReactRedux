import React, {Component} from 'react';
import styled from 'styled-components';

const MidlinePostsWrapper = styled.div`
    
    margin: auto;
    width: 83.7%;
    margin-top: 20px;

    @media only screen and (min-width: 768px) {
        justify-content:space-between;
        display: flex;
    }
   
    
`;
const MidlinePostBlock = styled.div`
    margin-top: 10px;
    flex-basis: 30%;
    background: papayawhip;
    height: 300px;
    display: flex;
    flex-direction: column;
    &:hover{
        background: tomato;
    }
`;

const BlockImage = styled.div`
    flex: 4;
    background: SeaGreen;
`;
const BlockText = styled.div`
    flex: 2;
    background: IndianRed;
`;


export default class MidlinePosts extends Component{


    render(){
        return(
            <MidlinePostsWrapper>
                <MidlinePostBlock>
                    <BlockImage />
                    <BlockText />
                </MidlinePostBlock>
                 <MidlinePostBlock>
                    <BlockImage />
                    <BlockText />
                </MidlinePostBlock>
                 <MidlinePostBlock>
                    <BlockImage />
                    <BlockText />
                </MidlinePostBlock>
            </ MidlinePostsWrapper>
        );
    }

}