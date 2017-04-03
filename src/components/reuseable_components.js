import styled from 'styled-components';

export const FullWidthWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: white;
    border: none;
    flex-direction: row;
`;

export const EightyWidthWrapper = styled.div`
    width: 80%;
    margin: 20px;
    display: flex;
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