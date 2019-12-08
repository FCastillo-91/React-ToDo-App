import React from 'react';
import Header from "./Header"
import AddNewTaskForm from "./AddNewTaskForm"
import DoneList from "./DoneList"
import ToDoList from "./ToDoList"

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      <Header />
      <AddNewTaskForm />
      
        <div className="row">
          <ToDoList />
          <DoneList />
        </div>
      </div>
    </div>
  );
}

export default App;
