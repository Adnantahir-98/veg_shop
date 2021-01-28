
import React, { Component } from 'react';
import { setState } from 'react';
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import { addBasket } from '../../actions/addAction';


class ShopProducts extends Component{
    
    constructor(props){
        super(props);
        console.log(props);
        this.state = {

            products:[
                    {
                    id: "1",
                    name:"1st Featured Item",
                    price:"30$",
                    img:"img/product/product-1.jpg"
                    },
                    {
                    id: "2",
                    name:"Product Item 2nd",
                    price:"28$",
                    img:"img/product/product-2.jpg"
                    },
                    {
                    id: "3",
                    name:"Product Item 3rd",
                    price:"17$",
                    img:"img/product/product-3.jpg"
                    },
                    {
                    id: "4",
                    name:"Awesome Product Item",
                    price:"19$",
                    img:"img/product/product-4.jpg"
                    },
                    {
                    id: "5",
                    name:"Abcd at Gmail Key",
                    price:"26$",
                    img:"img/product/product-5.jpg"
                    },
                    {
                    id: "6",
                    name:"Crab Pool Security",
                    price:"45$",
                    img:"img/product/product-6.jpg"
                    },
                    {
                    id: "7",
                    name:"Crab Pool Security",
                    price:"23$",
                    img:"img/product/product-7.jpg"
                    },
                    {
                    id: "8",
                    name:"Crab Pool Security",
                    price:"20$",
                    img:"img/product/product-8.jpg"
                    }
                ]
            }     
        }   

render() {

  return (

        <div className="row">
            {this.state.products.map((product, index) =>(
            <div class="col-lg-4 col-md-6 col-sm-6">
                <div class="product__item">
                    <div class="product__item__pic set-bg" data-setbg="g">
                    <img src={product.img} className="f_img" alt="Shop_Product-Images" />
                        <ul class="product__item__pic__hover">
                            <li><a href="#"><i class="fa fa-heart"></i></a></li>
                            <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                            <li><a  onClick={() => this.props.addBasket(product.id) } ><i class="fa fa-shopping-cart"></i></a></li>
                        </ul>
                    </div>
                    <div class="product__item__text">
                        <h6><a href="#">{product.name}</a></h6>
                        <h5>{product.price}</h5>
                    </div>
                </div>
            </div>
            ))}
        </div>

         );
    }
}

export default connect(null, { addBasket })(ShopProducts);
