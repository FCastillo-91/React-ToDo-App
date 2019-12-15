import React from "react";

class NewTask extends React.Component {
    state = {
        taskName: "",
        progressStatus: [],
        dueDate:"2019-12-09",
        urgency: ""
    };

    updateTaskName = (event) => {
        this.setState({
            taskName: event.target.value
        });
    }
    render() {
        return (
            <div className="row">
                <div className="col-5">
                    <input type="text" onChange={this.updateTaskName} value={this.state.updateTaskName} className="form-control" placeholder="Write Task Here"/>
                </div>
                <div className="col-5">
                    <input type="date" className="form-control"/>
                </div>
                <div className="col-2">
                    <button className="btn btn-primary">Add</button>
                </div>
                <div className="col-12">
                    <input type="checkbox" className="form-check-input" id="taskUrgency" name="taskUrgency" />
                    <label className="form-check-label" hfor="taskUrgency">Is Urgent</label>
                </div>
            </div>
        );
    }
}

export default NewTask;
