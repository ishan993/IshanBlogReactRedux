import styled from 'styled-components';

export const FullWidthWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: white;
    border: none;
    flex-direction: row;
    border-bottom: .3pt solid lightgrey;
`;

export const EightyWidthWrapper = styled.div`
    width: 85%;
    margin: 20px;
    display: flex;
    justify-content: space-between;
    margin: 20px auto 20px auto;
    border-bottom: .3pt solid lightgrey;

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

export const HeadlineTitle = styled.div`
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
`; 