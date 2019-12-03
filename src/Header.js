import React from "react";

class Header extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-4">Things To Do Today</h1>
                <p className="lead">"Organising is what you do before you do something, so that when you do it, it is not all mixed up."</p>
                <p className="font-italic">A.A. Milne</p>
            </div>
            
    
        );
    }
}

export default Header;