import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
//import Input from './practice/input';
import reportWebVitals from './reportWebVitals';
import Todo from './practice/todo/todo';
import Provider from './practice/todo/contextApi';

ReactDOM.render(
  <React.StrictMode>
    <Provider>
    <Todo />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
