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
    taskList: [],
    taskForm: {
      name: '',
      dueDate: '2019-01-01',
      urgency: false,
      id: null
    }
  }

  addNewTask = (name, date, urgency, id) => {
    const myTaskList = this.state.taskList;
    //create my task object
    const newTask = {
      name: name,
      dueDate: date,
      done: false,
      urgency: urgency,
      id: (id === null )? uuid() : id,
      isEditing: false
    }
    //If new task
    if(id === null){
      const copyOfTasks = myTaskList;
      copyOfTasks.slice();
      //insert my new task
      copyOfTasks.push(newTask);
      this.setState({
        taskList: copyOfTasks
      })
      this.resetForm();
    }else{
      //edit
        console.log(myTaskList);
      myTaskList.forEach(function(task){
        //update my task
        if(task.id === id){
          task.name = newTask.name;
          task.isEditing = false;
          task.date = newTask.date;
          task.urgency = newTask.urgency;
        }
      })
      this.setState({
        taskList: myTaskList
      })
      this.resetForm();
    }
  }

  resetForm = () => {
    const taskForm = {
      name: '',
      dueDate: '2019-01-01',
      urgency: false,
      id: null
    }
    this.setState({
      taskForm: taskForm
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
    
    let updateTask;
    myTaskList.forEach(task => {
      if (task.id === id) {
        task.isEditing = true;
        updateTask = {
          name: task.name,
          dueDate: task.dueDate,
          urgency: task.urgency,
          id: task.id
        };
      }
    });

    this.setState({
      taskForm: updateTask,
      taskList: myTaskList,
    });
  }

  render() {
    const completedTasks = this.state.taskList.filter(task => {
      return (task.done)
    });

    const pendingTasks = this.state.taskList.filter(task => {
      return (task.done !== true && task.isEditing === false)
    });

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
