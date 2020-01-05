import React from 'react';
import uuid from "uuid/v4";
import Header from "./Header";
import AddNewTaskForm from "./AddNewTaskForm";
import ToDoListHeader from "./ToDoListHeader";
import Task from "./Task";
import DoneList from "./DoneList";

import './App.css';

class App extends React.Component {
  state = {
    taskList: [
      { name: "Buy chicken", done: false, dueDate: "2019-12-02", urgency: true, id: uuid() },
      { name: "Order Christmas presents", done: true, dueDate: "2019-11-30", urgency: false, id: uuid() },
      { name: "Send flowers and New Home card to Anna&Joe", done: true, dueDate: "2019-12-01", urgency: true, id: uuid() },
      { name: "Book hair appointment", done: false, dueDate: "2019-10-22", urgency: false, id: uuid() }
    ],
      taskForm : {
        name: '',
        dueDate: '2019-01-01',
        urgency: true
      }
  }

  addNewTask = (name, date, urgency) => {

    const newTask = {
      name: name,
      dueDate: date,
      done: false,
      urgency: urgency,
      id: uuid()
    }

    const copyOfTasks = this.state.taskList.slice()
    copyOfTasks.push(newTask)

    this.setState({
      taskList: copyOfTasks
    })
  }

  completedTask = (id) => {
    const taskCompleted = this.state.taskList;

    taskCompleted.forEach(task => {
      if (task.id === id) return task.done = true;
    })

    this.setState({
      taskList: taskCompleted
    })
  }
  
  deleteTask = (id) => {
    const myTaskList = this.state.taskList;
    const filteredTasks = myTaskList.filter(task => {
      if (task.id === id) return false;
      else return true;
    })

    this.setState({
      taskList: filteredTasks
    })
  }

  editTask = (id) => {
    const myTaskList = this.state.taskList;
    // const selectedTask = myTaskList.find(task => task.id === id);
    let updateTask;
    myTaskList.forEach(task => {
      if (task.id === id){
        updateTask = {
          name: task.name,
          dueDate: task.dueDate,
          urgency: task.urgency,
        };
      } 
    });

    this.setState({
      taskForm: updateTask
    });

  }

  render() {
    const completedTasks = this.state.taskList.filter(task => {
        return (task.done)
    });

    const pendingTasks = this.state.taskList.filter(task => {
      return (task.done !== true) 
    });

    const taskForm = this.state.taskForm;

    return (
      <div className="App">
        <div className="container">
        <Header />
        <AddNewTaskForm 
          addNewTaskFunc={this.addNewTask}
          taskForm={this.state.taskForm}
          />
        <ToDoListHeader count={pendingTasks.length} />
        {pendingTasks.map((task) => {
          return (
            <Task 
            key={task.id}
            task={task}
            taskCompletedFunc={this.completedTask}
            taskDeletedFunc={this.deleteTask}
            taskEditFunc={this.editTask}
            />
          );
        })}
        <DoneList 
        completedTasks={completedTasks}
        />
        </div>
      </div>
    );
  }
}

export default App;
