import React from 'react';
import styled from 'styled-components';

export * from './buttons';
export * from './post_container';

export const FullWidthWrapper = styled.div`
    background: white;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    background: white;
    border: none;
    flex-direction: row;
    border-bottom: .3pt solid lightgrey;
    display: flex;
`;

export const EightyWidthWrapper = styled.div`
    width: 85%;
    margin: 20px auto 20px auto;
    border-bottom: .3pt solid lightgrey;
    @media only screen and (min-width: 768px) {
        display: flex;
        justify-content: space-between;
    }
`;
// Supply the Image Icon whereever I need it.
export const IconImage = styled.img`
    cursor: pointer;
    height: auto;
    width: auto;
    max-height: 30px;
    max-width: 30px;
    border-radius: 50%;
    padding: 3px;
    text-align: center;
    @media only screen and (min-width: 768px) {
        display: inline-block;
        max-height: 45px;
        max-width: 45px;
        margin: 0;
    }
`;

export const FlexItem = styled.div`
    font-size: 1.3rem;
    color: grey;
    cursor: pointer;
    &:hover{
        color: lightseagreen;
    }
`;


// ///////////////////////
// Modal Container
// /////////////////////

export const ModalContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    width: 90%;
    height: 80%;
    z-index: 9999;
    @media only screen and (min-width: 768px) {
    width: 43%;
    height: auto;
    }
`;


// //////////////////////////
// All Purpose input field
// //////////////////////////
export const ReusableInputField = styled.input`
    width: 80%;
    margin: auto;
    border: 0;
    outline: none;
    font-weight: 200;
    border-bottom: 1px solid lightseagreen;
    font-size: 1.5rem;
    line-height: 2rem;
    color: grey;
    margin-top:15px;
    margin-bottom: 15px;
    padding: 2px;
`;
// ////////////////////////////
// All Purpose centered image
// ////////////////////////////
export const ReusableCenteredImage = styled.img`
    padding: 10px;
    text-align: center;
    max-width: auto;
    max-height: 400px; 
    margin: auto;
    display:block;
`;

export const ArrowDiv = styled.div`
  width: 0;
  height: 0;
  margin-left: 15px;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 9px solid #888;
  text-align: center;
`;

// Hides Input type file default button
export const FileInputConcealer = styled.input`
    display: none;
`;

// Dropdown Container
// DropdownDiv --> ArrowDiv + DropdownContent
export const DropdownDiv = styled.div`
    position: absolute;
    top: 50px;
    width: 250px;
    height: auto;
    text-align: center;
    display: ${props => props.showDropdown ? 'block' : 'none'};
    padding-bottom: 5px;
`;
export const DropdownContent = styled.div`
    border: .3pt solid lightgrey;
    padding: 10px;
    background: white;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.5);
`;


///////////////////
//Show error div
//////////////////

const ErrorLabel = styled.label`
    font-size: 0.8rem;
    line-height: 1.5rem;
    color: #cc0000;
    font-weight: 200;
    width: 100%;
    text-align: center;
    padding: 10px;
    border: .3pt solid #cc0000;
`;

export const ErrorDiv = props => (
  <FullWidthWrapper>
    <ErrorLabel>
      {props.errorMessage}
    </ErrorLabel>
  </FullWidthWrapper>
);
