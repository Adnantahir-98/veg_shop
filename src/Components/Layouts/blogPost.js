
import React, { Component } from 'react';

class Post extends Component {
constructor(props){
    super(props);
}
render(){

return (

        <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="blog__item">
                <div className="blog__item__pic">
                    <img src={this.props.posts.img} alt="" />
                </div>
                <div className="blog__item__text">
                    <ul>
                        <li><i className="fa fa-calendar-o"></i> {this.props.posts.date} </li>
                        <li><i className="fa fa-comment-o"></i> {this.props.posts.comnt} </li>
                    </ul>
                    <h5><a href="#">{this.props.posts.title} </a></h5>
                    <p> {this.props.posts.para} </p>
                </div>
            </div>
        </div>

        );
    }   
}

export default Post;
