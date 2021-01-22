
import React, { Component } from "react";


class Mapi extends Component{
    render() {
            this.state = [
                {name: "John Doe", age: "12"},
                {name: "Mr Bean", age: "62"},
                {name: "Rock D", age: "57"},

            ];
    return (
        <div>
            {this.state.map((userinfo) => {
                return (
                   <div>
                        <center>
                             <span>Name: <h2> {userinfo.name}</h2></span>
                             <span>Age: <p> {userinfo.age}</p></span>
                        </center>
                   </div> 
                );
            })}
        </div>
    )
        
    }
}

export default Mapi;
