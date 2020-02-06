import React from 'react';
import axios from "axios";
import Header from "./Header";
import AddTask from "./AddTask";
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
        task_Text: '',
        due_Date: this.getTodaydate(),
        completed: false,
        urgency: false,
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
  addNewTask = (name, date, urgency) => {
    const myTaskList = this.state.taskList;
    const newTask = {
      task_Text: name,
      due_Date: date,
      completed: false,
      urgency: urgency
    }

    axios.post("https://ek43k7gjoj.execute-api.eu-west-1.amazonaws.com/dev/tasks", newTask)
      .then((response) => {
        const copyOfTasks = myTaskList;
        copyOfTasks.slice();
        copyOfTasks.push(response.data.newTask);

        this.setState({
          taskList: copyOfTasks
        })
      })
      .catch((err) => {
        console.log(err);
      });
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
    axios.delete(`https://ek43k7gjoj.execute-api.eu-west-1.amazonaws.com/dev/tasks/${id}`)
    .catch((err) => {
      console.log(err);
    })
    .then((response) => {
      const myTaskList = this.state.taskList;
      const filteredTasks = myTaskList.filter(task => {
        return task.taskId !== id
      })
      
      this.setState({
      taskList: filteredTasks
      })
    });
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
    return date;
  }

  render() {
    const completedTasks = this.state.taskList.filter(task => {
      return task.completed === true
    });

    const pendingTasks = this.state.taskList.filter(task => {
      return task.completed === false
    });

    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTask
            addNewTaskFunc={this.addNewTask}
            taskForm={this.state.taskForm}
          />
          <ToDoListHeader count={pendingTasks.length} />
          {pendingTasks.map((task) => {
            return (
              <Task
                key={task.taskId}
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
