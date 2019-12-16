import React from 'react';
import Header from "./Header"
import AddNewTaskForm from "./AddNewTaskForm"
import ToDoListHeader from "./ToDoListHeader"
import Task from "./Task"
import DoneList from "./DoneList"

import './App.css';

class App extends React.Component {
  state = {
    taskList: [
      { name: "Buy chicken", progress: "Done", dueDate: "2019-12-02", urgency: "Is Urgent", id: 1 },
      { name: "Order Christmas presents", progress: "Delete", dueDate: "2019-11-30", urgency: "Not Urgent", id: 2 },
      { name: "Send flowers and New Home card to Anna&Joe", progress: "Done", dueDate: "2019-12-01", urgenct: "Is Urgent", id: 3},
      { name: "Book hair appointment", progress: "Edit", dueDate: "2019-10-22", urgency: "Is Urgent", id: 4 }
    ]
  }

  render() {
    const completedTasks = this.state.taskList.filter(task => {
        return ( task.progress === "Done" )
    });

    const pendingTasks = this.state.taskList.filter(task => {
      return (task.progress === "Delete" || task.progress === "Edit")
    })
    return (
      <div className="App">
        <div className="container">
        <Header />
        <AddNewTaskForm />
        <ToDoListHeader count={pendingTasks.length} />
        {pendingTasks.map((task) => {
          return (
            <Task 
            key={task.id}
            task={task}
            />
          );
        })}
        <DoneList completedTasks={completedTasks} />
        </div>
      </div>
    );
  }
}

export default App;
