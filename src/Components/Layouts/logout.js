import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Logout extends Component {
    render() {
        return (
            <div>
                <br />
                <h2> You have been Logged out.</h2>
                <Link to="/login" className="text-primary">Login Again</Link> <br /> <br />
            </div>
        )
    }
}
