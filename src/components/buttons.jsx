import React from 'react';
import styled from 'styled-components';


const LoadingGraphic = styled.img`
    max-height: 40px;
    max-width: 40px;
    display: inline-block;
    sizing: border-box;
    padding: 0;
    margin: 0;
    vertical-align: center;
    margin-left: 5px;
`;
const FlexLabel = styled.label`
    display: flex;
    align-items: center;
`;

// //////////////////////////
// All Purpose Submit button
// //////////////////////////
export const SubmitButton = styled.button`
    display: flex;
    vertical-align: center;
    font-weight: 200;
    background: white;
    color: grey;
    border: 1px solid lightseagreen;
    font-size: 1.4rem;
    unselectable: on;
    padding: 5px;
    margin: auto;
    width: auto;
    margin-top: 10px;
    &:hover{
        background: rgba(0, 0, 0, .07);
    }
`;


export const LoadingSubmitButton = (props) => {
  function renderButtonContent() {
    if (!props.isLoading) {
      return (<h3>Submit</h3>);
    }
    return (
      <FlexLabel>
        Loading
        <LoadingGraphic src="/static/Loading.gif" />
      </FlexLabel>
    );
  }

  return (
    <SubmitButton onClick={() => props.onClick()}>
      {renderButtonContent()}
    </SubmitButton>
  );
};
