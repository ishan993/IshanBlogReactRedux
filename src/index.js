import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, browserHistory} from 'react-router';

import thunk from 'redux-thunk';
import routes from './routes';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
export const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>
  , document.querySelector('.container'));
