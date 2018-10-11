import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import { login } from './actions/session_actions';
import * as APIUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.login = login;
  window.store = store;
  window.APIUtil = APIUtil;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store = { store} />, root);
});