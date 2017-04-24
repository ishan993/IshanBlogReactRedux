import React from 'react';
import Modal from '../containers/modal';
import ModalBackdrop from '../containers/home_page';

export default (props)=>{
    return(
        <ModalBackdrop>
                <img src="/static/Loading.gif" />
        </ModalBackdrop>
    );
}