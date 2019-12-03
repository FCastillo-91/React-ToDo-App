import React from "react"

class NewTask extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-12 col-sm-12">
                    <p>New Task</p>
                </div>
                <div className="col-12 col-sm-10">
                    <p>Write Task Here</p>
                    {/* Enter text and number here and is Urgent textbox */}
                </div>
                <div className="col-12 col-sm-2">
                    <button className="btn btn-primary">Book</button>
                </div>
            </div>
        )
    }
}

export default NewTask;