import React from "react";

class AddTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task_Text: props.taskForm.task_Text,
            due_Date: props.taskForm.due_Date,
            urgency: props.taskForm.urgency,
            taskId: props.taskId
        };
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({
            task_Text: nextProps.taskForm.task_Text,
            due_Date: nextProps.taskForm.due_Date,
            urgency: nextProps.taskForm.urgency,
            taskId: nextProps.taskId
        });
    }

    updateTaskText = (event) => {
        this.setState({
            task_Text: event.target.value
        });
    }

    updateDate = (event) => {
        this.setState({
            due_Date: event.target.value
        });
    }

    updateUrgency = (event) => {
        this.setState({
            urgency: event.target.checked
        })
    }

    addTask = () => {

        if (this.state.task_Text === "") {
            return alert("Please add Task")
        }
        if (this.state.due_Date === "") {
            return alert("Please select a task due date")
        }

        this.props.addNewTaskFunc(
            this.state.task_Text,
            this.state.due_Date,
            this.state.urgency
        );
    }

    updateEditedTask = () => {
        this.props.updateEditedTaskFunc(
            this.state.task_Text,
            this.state.due_Date,
            this.state.urgency,
            this.state.taskId
        )
    }

    render() {
        return (
            <div className="row">
                <div className="col-12 col-md-6 mb-2">
                    <input type="text" onChange={this.updateTaskText} value={this.state.task_Text} className="form-control" placeholder="Write Task Here" />
                </div>
                <div className="col-8 col-md-3 mb-2">
                    <input type="date" onChange={this.updateDate} value={this.state.due_Date} className="form-control" />
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
                    {this.state.taskId &&
                        <button onClick={() => this.updateEditedTask()}
                            className="btn btn-success btn-block">
                            Update
                            </button>
                    }

                    {!this.state.taskId &&
                        <button onClick={() => this.addTask()}
                            className="btn btn-primary btn-block">
                            Add
                            </button>
                    }
                </div>

            </div>
        );
    }
}

export default AddTask;
