import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import {Link} from "react-router-dom";


class Login extends Component {
    constructor(props){
        super(props);
        let loggedIn = false
        this.state = {
                email: '',
                password: ''
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
        e.preventDefault();
       const { email , password } = this.state
        // login
        if (email === "mrbean@gmail.com" && password === "123"){
            this.setState({
                
                loggedIn: true
            })
        }
    }

render() {
    if(this.state.loggedIn){
        return <Redirect to="/" />
    }
    
return (
<div>
<center>
    <div classNameName="container">
        <div classNameName="row">
            <div className="col-md-4 my-4 p-4 rounded"  style={{background:"#eee"}}>
                <form onSubmit={this.submitForm} className="mr-auto">
                    <div><h3> Log In </h3> <hr /> </div>
                    <div className="form-group">
                        <label className="float-left">Email</label>
                        <input type="email" className="form-control" name="email" placeholder="Enter email" value={this.state.email} onChange={this.onChange} />
                        <small className="form-text text-muted pull-left">We'll never share your email with anyone else.</small> <br />
                    </div>
                    <div className="form-group">
                        <label className="float-left">Password</label>
                        <input type="password" className="form-control" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange}  />
                    </div>
                    <p className="py-1">Need An Account? <Link to="/register" className="text-primary"> Register here </Link></p>
                    <input type="submit" className="btn btn-primary rounded-0" style={{background: "#7fad39", fontWeight:"bolder", border:"none"}} />
                </form>
                
            </div>
        </div>
    </div> <br />
    </center>
</div>
        );
    }
}

export default Login;
