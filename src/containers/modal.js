import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {store} from '../index';
import {Provider} from 'react-redux';
import styled from 'styled-components';

const ModalBackdrop = styled.div`
    background: rgba(0, 0, 0, .7);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 25px;
    z-index: 9991;
`;

class Modal extends Component{
    componentDidMount(){
        this.modalTarget = document.createElement('div');
        this.modalTarget.className = "modal-combat";
        document.body.appendChild(this.modalTarget);
        this._render();
    }
    componentWillUpdate(){
        this._render();
    }
    componentWillUnmount(){
         ReactDOM.unmountComponentAtNode(this.modalTarget); 
         document.body.removeChild(this.modalTarget);
    }
    _render(){
        ReactDOM.render(
                <Provider store={store}>
                    {this.props.children}
                </Provider>,
        this.modalTarget);
    }
    render(){
        return<noscript />;
    }
}
export default Modal;