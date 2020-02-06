import React from 'react';
import uuid from "uuid/v4";
import axios from "axios";
import Header from "./Header";
import AddNewTaskForm from "./AddNewTaskForm";
import ToDoListHeader from "./ToDoListHeader";
import Task from "./Task";
import DoneList from "./DoneList";

import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      taskList: [],
      taskForm: {
        name: '',
        dueDate: this.getTodaydate(),
        urgency: false,
        id: null
      }
    }
    this.getTodaydate = this.getTodaydate.bind(this)
  }
  componentDidMount() {
    axios.get("https://ek43k7gjoj.execute-api.eu-west-1.amazonaws.com/dev/tasks")
      .then((response) => {
        const tasks = response.data.todos;
        this.setState({
          taskList: tasks
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }
  addNewTask = (name, date, urgency, id) => {
    const myTaskList = this.state.taskList;
    //create my task object
    const newTask = {
      name: name,
      dueDate: date,
      completed: false,
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
      dueDate: this.getTodaydate(),
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
      if (task.id === id) return task.completed = true;
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
          completed: false,
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

  getTodaydate = () => {
    let today = new Date();
    let todayNum = (today.getDate() < 10)? '0'+today.getDate() :  today.getDate();
    let date = today.getFullYear()+'-'+today.getMonth()+1 +'-'+todayNum;
    console.log({date:date})
    return date;
  }

  render() {
    const completedTasks = this.state.taskList.filter(task => {
      return task.completed === true
    });

    const pendingTasks = this.state.taskList.filter(task => {
      return task.completed !== false
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
