import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Axios from 'axios';

Axios.defaults.baseURL = 'https://api.unsplash.com/';
Axios.defaults.headers.common['Accept-Version'] = 'v1';
Axios.defaults.headers.common['Authorization'] = 'Client-ID b_mbJ8S-i9Pnv_AEdqiIhNMYF-mIoD0p9owAjYUcyU8';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
