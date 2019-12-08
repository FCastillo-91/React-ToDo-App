import React from "react"

class ToDoListHeader extends React.Component {
    render() {
        return (
            <div>
                <div className="card bg-light cardToDoList mb-3">
                    <div className="card-body">
                        <h3>To Do List <span class="badge badge-pill badge-primary float-right">2</span></h3>
                    </div>
                </div>
            </div >
        );
    }
}

export default ToDoListHeader;