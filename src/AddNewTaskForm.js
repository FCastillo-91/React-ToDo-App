import React from "react";

class NewTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskName: props.taskForm.name,
            dueDate: props.taskForm.dueDate,
            urgency: props.taskForm.urgency,
            id: props.taskForm.id
        };
    }

    componentWillReceiveProps(props) {
        this.setState({
            taskName: props.taskForm.name,
            dueDate: props.taskForm.dueDate,
            urgency: props.taskForm.urgency,
            id: props.taskForm.id
        });
    }
    updateTaskName = (event) => {
        this.setState({
            taskName: event.target.value
        });
    }

    updateDate = (event) => {
        this.setState({
            dueDate: event.target.value
        });
    }

    updateUrgency = (event) => {
        this.setState({
            urgency: event.target.checked
        })
    }

    addTask = () => {
        if (this.state.taskName === "") {
            return alert ("Please add Task")
        }
        if (this.state.dueDate === "") {
            return alert ("Please select a task due date")
        }
        
        this.props.addNewTaskFunc(
            this.state.taskName,
            this.state.dueDate,
            this.state.urgency,
            this.state.id
        );
    }

    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-6 mb-2">
                    <input type="text" onChange={this.updateTaskName} value={this.state.taskName} className="form-control" placeholder="Write Task Here" />
                </div>
                <div className="col-8 col-md-3 mb-2">
                    <input type="date" onChange={this.updateDate} value={this.state.dueDate} className="form-control" />
                </div>
                <div className="col-4 col-md-1 mb-2">
                    <input 
                        type="checkbox" 
                        onChange={this.updateUrgency} 
                        className="form-check-input" 
                        id="taskUrgency" 
                        name="taskUrgency" 
                        checked={this.state.urgency}
                        />
                    <label className="form-check-label" hfor="taskUrgency">Is urgent</label>
                </div>
                <div className="col-12 col-md-2 mb-2">
                    <button onClick={this.addTask} 
                    className={
                        this.state.id !==null ? "btn btn-success btn-block" : "btn btn-primary btn-block"
                    }
                    >
                        {this.state.id !==null ? 'Update' : "Add"} 
                        </button>
                </div>

            </div>
        );
    }
}

export default NewTask;
