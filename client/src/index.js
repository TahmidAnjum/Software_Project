import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
//import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'
import Counters from './components/login'
//const elem = <h1>'hello world'</h1>;
//ReactDOM.render(elem, document.getElementById('root'))

ReactDOM.render(
  /*<React.StrictMode>
    <App /> 
  </React.StrictMode>*///elem
  <BrowserRouter>
    <Counters/>
  </BrowserRouter>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
