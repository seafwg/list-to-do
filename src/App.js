import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Redirect } from "react-router-dom";
import { isLogined } from './utils/auth';
import TodoListIndex from './components/todolist/Index'

function App() {
  return isLogined() ? (
    <TodoListIndex></TodoListIndex>
  ) : (<Redirect to="/login" />);
}

export default App;
