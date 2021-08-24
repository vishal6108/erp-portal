import React, { Component } from 'react'
import '../App.css';
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Sweetalert from 'sweetalert';

export default class Login extends Component {
    constructor(props)
    { 
        super(props)
        const token = localStorage.getItem("token")

        let loggedIn = true 
        if(token==null)
        {
            loggedIn = false
        }
        this.state = {
            username:'',
            password:'',
            loggedIn

        }
        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm(e){
        e.preventDefault()
        const {username , password } = this.state
        //Login Work
        if(username === "A" && password === "B")
        {
            localStorage.setItem("token","asdfghjkl")
            this.setState({
                loggedIn : true
            })
        }
    }

    render(){
        if(this.state.loggedIn)
        {
            return <Redirect to="/main" />
        }
    return (
        <>
        <div className="card border-success mb-3 w-50 mx-auto mt-5">
  <form onSubmit={this.submitForm}>
  <h2 className="card-header text-center">Login to your account</h2>
  
  {/* <img src="{../loginicon.png}" alt="" />    */}
  <div className="mb-3 form-group  mx-auto mt-4" style={{width:250}}>
    <label htmlFor ="exampleInputEmail1" className="form-label">Email address</label>
    <input type="text" name="username" className="form-control" id="exampleInputtext1" aria-describedby="textHelp" value={this.state.username} onChange={this.onChange} />
    <div id="emailHelp"  className="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div className="mb-3 form-group mx-auto" style={{width:250}}>
    <label htmlFor ="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" name="password" className="form-control" id="exampleInputPassword1" value={this.state.password} onChange={this.onChange}/>
  </div>
   <div className="text-center">
  <button type="submit" className="btn btn-success btn-md">Submit</button><br/><br/>
  <div class="card-footer">
        <Link to="/">Forget Password/Claim Your Account</Link>
      </div>
  </div>
  </form>  
  </div>  
  </>
    )
}

}