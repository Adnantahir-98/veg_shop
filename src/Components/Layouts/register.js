import React, { Component } from 'react'
import {Link} from "react-router-dom";

class Register extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            email : '',
            password: '',
            cpassword: '',
            phone    : ''
        }
    }
    handleEmailChange = event => {
        this.setState({
            email: event.target.value
        })
    }
    handlePasswordChange = event => {
        this.setState({
            password: event.target.value
        })
    }
    handleCPasswordChange = event => {
        this.setState({
            cpassword: event.target.value
        })
    }
    handlePhoneChange = event => {
        this.setState({
            phone: event.target.value
        })
    }
    handleSubmit = event => {
        alert(`${this.state.email}, ${this.state.password}`)
    }
render() {
return (
    <div classNameName="container">
        <center>
        <div classNameName="row">
            <div className="col-md-4 my-4 p-5 rounded"  style={{background:"#eee"}}>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <h3 className="m-0"> Registration </h3> 
                        <hr />
                    </div>
                    <div className="form-group">
                        <label className="float-left" for="exampleInputEmail1">Email</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Email" value={this.state.email} onChange={this.handleEmailChange} />
                        <small id="emailHelp" className="form-text text-muted float-left">We'll never share your email with anyone else.</small> <br />
                    </div>
                    <div className="form-group">
                        <label className="float-left" for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Your Password" value={this.state.password} onChange={this.handlePasswordChange} />
                    </div>
                    <div className="form-group">
                    <label className="float-left" for="exampleInputPassword2">Confirm Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Confirm Your Password" value={this.state.cpassword} onChange={this.handleCPasswordChange} />

                    </div>
                    <div className="form-group">
                    <label className="float-left" for="exampleInputPhone1">Cell No</label>
                    <input type="number" className="form-control" id="exampleInputPhone1" placeholder="Your Phone No" value={this.state.phone} onChange={this.handlePhoneChange} />
                    </div>
                    <p className="">Already have an Account? <Link to="/login" className="text-primary"> Login here</Link></p>
                    <button type="submit" className="btn btn-primary rounded-0" style={{background: "#7fad39", fontWeight:"bolder", border:"none"}}>Submit</button>
                </form>
                
            </div>
        </div><br />
        </center>
    </div> 
        );
    }
}

export default Register;

