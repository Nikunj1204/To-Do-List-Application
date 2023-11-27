import React from 'react';
import ReactDOM from 'react-dom/client';
import  "./app.css";
import App from './App';
import TodoList from "./TodoList";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <TodoList />
  </React.StrictMode>
);
 
// export default index;