import React from 'react';
import ToDoListHeader from "./ToDoListHeader"
import Task from "./Task"

class ToDoList extends React.Component {
    render() {
        return (
            <div className="col-12 col-md-6 mb-3">
                <ToDoListHeader />
                <Task />
                <Task />
            </div>
        );
    }


}

export default ToDoList;
