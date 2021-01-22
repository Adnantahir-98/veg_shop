
import React, { Component } from 'react';
import { setState } from 'react';
import {Link} from "react-router-dom";


class Cards extends Component{
    
    constructor(props){
        super(props);
        
        this.state = {
            cart:[],
            products:[
                    {
                    id: "1",
                    name:"1st Featured Item",
                    price:"30$",
                    img:"img/featured/feature-1.jpg"
                    },
                    {
                    id: "2",
                    name:"Product Item 2nd",
                    price:"28$",
                    img:"img/featured/feature-2.jpg"
                    },
                    {
                    id: "3",
                    name:"Product Item 3rd",
                    price:"17$",
                    img:"img/featured/feature-3.jpg"
                    },
                    {
                    id: "4",
                    name:"Awesome Product Item",
                    price:"19$",
                    img:"img/featured/feature-4.jpg"
                    },
                    {
                    id: "5",
                    name:"Abcd at Gmail Key",
                    price:"26$",
                    img:"img/featured/feature-8.jpg"
                    },
                    {
                    id: "6",
                    name:"Crab Pool Security",
                    price:"45$",
                    img:"img/featured/feature-6.jpg"
                    },
                    {
                    id: "7",
                    name:"Crab Pool Security",
                    price:"23$",
                    img:"img/featured/feature-7.jpg"
                    },
                    {
                    id: "8",
                    name:"Crab Pool Security",
                    price:"20$",
                    img:"img/featured/feature-8.jpg"
                    }
                ]
            }     

        }   
        addToCart = (product) => {
            console.log('We are in Add to Cart');
            this.setState({
                cart :[ product]
            })
        }   
render() {

  return (
        <div className="row featured__filter">
            {this.state.products.map((product, index) =>(
            <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood vegetables">

                <div className="featured__item">
                
                    <div className="featured__item__pic set-bg" data-setbg="">
                        <img src={product.img} className="f_img" alt="feature-8" />
                        <ul className="featured__item__pic__hover">
                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                            <li>
                            <a onClick={() => this.addToCart(product)} href="#"><i className="fa fa-shopping-cart"></i></a></li>
                        </ul>
                    </div> 
                    <div className="featured__item__text">
                        <h6><a href="#">{product.price}</a></h6>
                        <h5>{product.name}</h5>
                    </div>
                </div>
            </div>
            ))}
        </div>

         );
    }
}

export default Cards;
