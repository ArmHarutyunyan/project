import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import reportWebVitals from './reportWebVitals';
import Login from './Components/Login/Login';
import Router from './Components/Router/Router'

export let rerenderEntireTree = ()=> {
  ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
)};

rerenderEntireTree();

reportWebVitals();
