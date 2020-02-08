import React from "react";
import './Header.css'

class Header extends React.Component {
    render() {
        return (
            <div className="jumbotron py-4 mt-2">
                <h1 className="display-5">Things To Do Today</h1>
                <div className="d-none d-md-block">
                    <p className="lead">"Organising is what you do before you do something, so that when you do it, it is not all mixed up."</p>
                    <p className="font-italic">A.A. Milne</p>
                </div>
            </div>
        );
    }
}

export default Header;