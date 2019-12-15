import React from "react"

class ToDoListHeader extends React.Component {
    state = {
        status: "Pending Tasks",
        numOfTasks: ""
    };

    updateNumOfTasks = (event) => {
        this.setState({
            numOfTasks: event.target.value
        });
    }

    render() {
        return (
            <div className="card bg-light cardToDoList mb-3">
                <div className="card-body">
                        <h3>To Do List <span className="badge badge-pill badge-primary float-right">{this.props.count}</span></h3>
                </div>
            </div >
        );
    }   
}    

export default ToDoListHeader;