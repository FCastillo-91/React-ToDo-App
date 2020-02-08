import React from 'react';
import axios from "axios";
import Header from "./Header";
import AddTask from "./AddTask";
import ToDoListHeader from "./ToDoListHeader";
import Task from "./Task";
import DoneList from "./DoneList";

import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      taskList: [],
      taskForm: {
        task_Text: '',
        due_Date: this.getTodaydate(),
        completed: false,
        urgency: false
      },
      taskId: null
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
        });

        this.resetForm()

      })
      .catch((err) => {
        console.log(err);
      });
  }

  resetForm = () => {
    const taskForm = {
      task_Text: '',
      due_Date: this.getTodaydate(),
      completed: false,
      urgency: false
    }

    this.setState({
      taskForm: taskForm,
      taskId: null
    })
  }

  completedTask = (task) => {

    const parameters = { completed: !task.completed };

    axios.put(`https://ek43k7gjoj.execute-api.eu-west-1.amazonaws.com/dev/tasks/${task.taskId}`, parameters)
      .catch((err) => {
        console.log(err)
      })
      .then((response) => {

        const taskCompleted = this.state.taskList;
        taskCompleted.forEach(item => {
          if (item.taskId === task.taskId) return item.completed = parameters.completed;
        });
        this.setState({
          taskList: taskCompleted
        })
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

  editTask = (task) => {

    let editTask = {
      task_Text: task.task_Text,
      completed: false,
      due_Date: task.due_Date.split("T")[0],
      urgency: task.urgency,
    }
    this.setState({
      taskForm: editTask,
      taskId: task.taskId
    });

    this.scrollToId('myTaskForm');
  }

  updateEditedTask = (task_Text, due_Date, urgency, taskId) => {
    const editData = {
      task_Text: task_Text,
      due_Date: due_Date,
      urgency: urgency,
      taskId: taskId
    };

    axios.put(`https://ek43k7gjoj.execute-api.eu-west-1.amazonaws.com/dev/tasks/${taskId}`, editData)
      .catch((err) => {
        console.log(err)
      })
      .then((response) => {
        //update my tasklist
        const taskUpdate = this.state.taskList
        taskUpdate.forEach(task => {
          if (task.taskId === taskId) {
            task.task_Text = task_Text;
            task.due_Date = due_Date;
            task.urgency = urgency;
            return
          }
        })
        this.setState({
          taskList: taskUpdate
        });
        this.resetForm()
      });
  }

  getTodaydate = () => {
    let today = new Date();
    let todayNum = (today.getDate() < 10) ? '0' + today.getDate() : today.getDate();
    let date = today.getFullYear() + '-' + today.getMonth() + 1 + '-' + todayNum;
    return date;
  }

  scrollToId = (element) => {
    var elmnt = document.getElementById(element);
    elmnt.scrollIntoView(true);
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
          <div id="myTaskForm" className="mb-5"></div>
          <AddTask
            addNewTaskFunc={this.addNewTask}
            taskForm={this.state.taskForm}
            taskId={this.state.taskId}
            updateEditedTaskFunc={this.updateEditedTask}
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
