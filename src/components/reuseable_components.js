import styled from 'styled-components';
import React from 'react';

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
    margin: 20px;
    margin: 20px auto 20px auto;
    border-bottom: .3pt solid lightgrey;
    @media only screen and (min-width: 768px) {
        display: flex;
        justify-content: space-between;
    }

`;
//Supply the Image Icon whereever I need it.
export const IconImage = styled.img`
    height: auto;
    width: auto;
    max-height: 30px;
    max-width: 30px;
    padding: 5px;
    @media only screen and (min-width: 768px) {
        display: inline-block;
        padding: 5px;
        max-height: 50px;
        max-width: 50px;
    }
`;

export const FlexItem = styled.div`
    font-size: 1.5rem;
    color: grey;
    cursor: pointer;
    &:hover{
        color: lightseagreen;
    }

`;

export const TabWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-items: center;
    justify-content: center;
    padding-top: 10px;
    border-bottom: .3pt solid lightgrey;
`;

export const TabItem = styled(FlexItem)`
    padding-left: 10px;
    padding-top: 5px;
    padding-right: 10px;
    flex-basis: 5%;
    cursor: pointer;
    font-family: title-font;
    font-size: 1.5rem;
    color: darkgrey;

    @media only screen and (min-width: 768px){
        font-size: 2rem;
        padding: 0px 10px 5px 10px;
    }
    color: ${props => props.active ? 'palevioletred' : 'grey'};
    border-bottom: ${props => props.active ? '2px solid lightseagreen' : '2px solid grey'};

    &:hover{
        color: darkgrey; 
        border-bottom: 2px solid lightseagreen;
    }
`;

/*export const HeadlineTitle = styled.div`
    width: 100%;
    text-decoration: none;
    font-size: 3.3vw;
    color: black;
    display: inline;
    vertical-align: top;
    height: auto;
    font-weight: 300;
`;
export const HeadlineContent = styled.div`
    color: black;
    vertical-align: middle;
    padding: 5px;
    margin-left: 5px;
    height: auto;
    font-size: 2.3vw;
    font-weight: 300;
`;*/

const ReusableCardImg = styled.img`
    flex: ${props => props.displayProps.imgFlex};
    margin: auto;
    background: papayawhip;
    width: 100%;
    height: 100%;
    padding: 2px;
    max-height: ${props => props.displayProps.mobileImgWidthHeight};
    max-width: ${props=>props.displayProps.mobileImgWidthHeight};
    @media only screen and (min-width: 768px) {
        max-height: ${props => props.displayProps.maxImgWidthHeight};
        max-width: ${props=>props.displayProps.maxImgWidthHeight};
    }
`;
const ReusableCardText = styled.div`
    padding-left: 10px;
    flex: ${props=>props.textFlex};
    text-align: justify;
    vertical-align: top;
    height: 100%;
    margin:0;
`;
const CardWrapper = styled.div`
    width: 100%;
    text-align: center;
    @media only screen and (min-width: 768px) {
        display: flex;
        justify-content: space-between;
    }
`;

export function ReuseableCardContainer(props){
    return(
        <CardWrapper>
            <ReusableCardImg displayProps={props.displayProps} src={props.displayProps.imgUrl}/>
            <ReusableCardText txtProps={props.textProps}>
                <h3>{props.textProps.title}</h3>
                <p>{props.textProps.content}</p>
            </ReusableCardText>
        </CardWrapper>
    );
}