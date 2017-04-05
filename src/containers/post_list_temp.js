import React from 'react';
import styled from 'styled-components';
import {EightyWidthWrapper, ReuseableCardContainer} from '../components/reuseable_components';

const ThisWrapper = styled(EightyWidthWrapper)`
    @media only screen and (min-width: 768px) {
        display: block;
    }

`;

export function PostList(props){

    function renderPost(prop){
        return(ReuseableCardContainer(prop));
    }

    return(
        <ThisWrapper>
            {props.map(prop => renderPost(prop))}
        </ThisWrapper>
     )
}