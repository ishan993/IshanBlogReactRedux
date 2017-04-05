import React from 'react';
import styled from 'styled-components';
import {EightyWidthWrapper, ReuseableCardContainer} from '../components/reuseable_components';

export function MidlinePosts(props){

    function renderPost(prop){
        return(ReuseableCardContainer(prop));
    }

    return(
        <EightyWidthWrapper>
            {props.map(prop => renderPost(prop))}
        </EightyWidthWrapper>
    )
}