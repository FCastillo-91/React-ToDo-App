import React from "react"

class DoneList extends React.Component {
    render() {
        return (


            <div className="col-12 col-md-6 mb-3">
                <div className="card text-white bg-success">
                    <div className="card-body">
                        <h3>Done List</h3>
                        <ul className="list-group text-dark">
                            <li className="list-group-item">
                                Task 1
                                <small className="float-right">23/12/2019</small>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        )
    }
}
export default DoneList;
