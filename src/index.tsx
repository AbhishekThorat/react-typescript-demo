import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { AppRouter } from './router';
import { GlobalStyle } from './util';


ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
    <GlobalStyle />
  </Provider>
  , document.getElementById('root'));
