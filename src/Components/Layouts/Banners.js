import React, { Component } from 'react';

class Banners extends Component {
constructor(props){
    super(props);
}
render(){

return (

    <div className="col-lg-6 col-md-6 col-sm-6">
        <div className="banner__pic">
            <img src={this.props.banners.img} alt="" />
        </div>
    </div>

        );
    }   
}

export default Banners;
