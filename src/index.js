import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Router from './router/index'
import { Provider } from "react-redux";
import store from "./store";
import '@/assets/js/flexible.js' 
import'./assets/less/index.less'
// import 'antd/dist/antd.css';
// import 'antd/dist/antd.variable.min.css'
// import 'antd/dist/antd.min.css';
// import 'antd/dist/antd.dark.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
    </Provider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
