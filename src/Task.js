import React from "react"
import './Task.css';

class Task extends React.Component {

    taskDone = () => { 

       this.props.taskCompletedFunc(
           this.props.task.id
       ); 
    }

    taskDelete = () => {

        this.props.taskDeletedFunc(
            this.props.task.id
        )
    }

    taskEdit = () => {

        this.props.taskEditFunc(
            this.props.task.id
        )
    }

    render() {
        return (
            <div>
                <div className="card bg-light cardToDoList mb-3">
                    <div className="card-body">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <div className="row no-gutters">
                                    <div className="col-6 col-md-5 mb-3">
                                        {this.props.task.urgency && 
                                        <span className="importantIcon"><i className="fas fa-star"></i></span>
                                        }
                                        {this.props.task.task_Text}
                                    </div>
                                    <div className="col-6 col-md-3 mb-3">
                                        {this.props.task.due_Date}
                                    </div>
                                    <div className="col-12 col-md-4">
                                        <div className="row ">
                                            <div className="col-4">
                                                <button type="button" onClick={this.taskDone}
                                                    className="btn btn-success btn-sm btn-block small">Done</button>
                                            </div>
                                            <div className="col-4">
                                                <button type="button" onClick={this.taskEdit}
                                                    className="btn btn-secondary btn-sm btn-block small">Edit</button>
                                            </div>
                                            <div className="col-4">
                                                <button type="button" onClick={this.taskDelete}
                                                    className="btn btn-danger btn-sm btn-block small">Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div >
            </div >
        );
    }
}

export default Task;