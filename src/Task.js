import React from "react"

class Task extends React.Component {
    render() {
        return (
            <div>
                <div className="card bg-light cardToDoList mb-3">
                    <div className="card-body">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <div className="row no-gutters">
                                    <div className="col-12 col-md-6 mb-3">
                                        Task 2
                                    </div>
                                    <div className="col-4 col-md-2">
                                        <button type="button"
                                            className="btn btn-success btn-sm btn-block small">Done</button>
                                    </div>
                                    <div className="col-4 col-md-2">
                                        <button type="button"
                                            className="btn btn-secondary btn-sm btn-block small">Edit</button>
                                    </div>
                                    <div className="col-4 col-md-2">
                                        <button type="button"
                                            className="btn btn-danger btn-sm btn-block small">Delete</button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Task;