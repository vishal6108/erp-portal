import React, { Component } from 'react'
import '../App.css';
import {Link , Redirect} from 'react-router-dom';

export default class Mainpage extends Component {
    constructor(props){
        super(props)
        const token = localStorage.getItem("token")

        let loggedIn = true 
        if(token==null)
        {
            loggedIn = false
        }
        this.state = {
            loggedIn
        }
    }
    render() {
        if(this.state.loggedIn===false)
        {
            return <Redirect to="/" />
        }
        return (
            <div>
                <div className="container">
                    
                <h1>Welcome to Main Page</h1>
                <Link to="/logout">Logout</Link>
                </div>
            </div>
        )
    }
}
