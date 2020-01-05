import React from "react"

class DoneList extends React.Component {
    render() {
        const mytask = this.props.completedTasks;

        return (
                <div className="card text-white bg-success mb-3">
                    <div className="card-body">
                        <h3>Done List</h3>
                        <ul className="list-group text-dark">
                            {mytask.map((task) => {
                                return (
                                    <li key={task.id} 
                                    className="list-group-item">
                                    {task.name}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
        )
    }
}
export default DoneList;
