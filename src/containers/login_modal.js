import React, {Component} from 'react';
import styled from 'styled-components';

//Style the modal properly, you dumbfuck

const ModalContainer = styled.div`
 position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: palevioletred;
  width: 35%;
  height: 75%;
  z-index: 9999;
`;
const HeaderDiv = styled.div`
    box-sizing: border-box;
    width: 100%;
    text-align: center;
    background: papayawhip;
    padding: 10px;
`;
const CloseButton = styled.img`
    position: fixed;
    right: 0;
    top: 0;
    height: 15px;
    width: 15px;
    padding: 10px;
    border: none;
`; 

export default class ShowPost extends Component{

    render(){
        return(
            <ModalContainer>
                <HeaderDiv>
                    <h1>Hello World!</h1>
                    <CloseButton />
                </HeaderDiv>
            </ModalContainer>
        );
    }
}
