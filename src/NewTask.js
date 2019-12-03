import React from "react"

class NewTask extends React.Component {
    render() {
        return (
            <div className="container">
            <form id="newTaskForm">
                <div className="text-left">       
                <div className="form-group">
                <label for="addNewTask">New Task</label>
                <input type="text" className="form-control" id="addNewTask" name="addNewTask"
                    aria-describedby="addNewTaskHelp" placeholder="Write Task Here" maxlength="120" />
                <small id="addNewTaskHelp" className="form-text text-muted">Enter text and numbers, max 120 characters.
                </small>
            </div>
                <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="taskUrgency" name="taskUrgency" />
                <label className="form-check-label" for="taskUrgency">Is Urgent</label>
            </div>
            </div>  
            <button type="button" className="btn btn-primary">Add</button>
            </form>
            </div>
        );
    }
}

export default NewTask;
