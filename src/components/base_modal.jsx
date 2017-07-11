import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from '../index';

class Modal extends Component {
  componentDidMount() {
    this.modalTarget = document.createElement('div');
    this.modalTarget.className = "modal-combat";
    document.body.appendChild(this.modalTarget);
    this._render();
  }

  componentWillUpdate() {
    this._render();
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.modalTarget);
    document.body.removeChild(this.modalTarget);
  }

  _render() {
    ReactDOM.render(
      <Provider store={store}>
        {this.props.children}
      </Provider>,
      this.modalTarget);
  }

  render() {
    return (<noscript />);
  }
}
export default Modal;
