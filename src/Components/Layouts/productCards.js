
import React, { Component } from 'react';
import { setState } from 'react';
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import { addBasket } from '../../actions/addAction';


const Cards = (props) => {
        console.log(props);
        
    return (

        <div className="row featured__filter">
        <div class="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
        <div class="featured__item">
        <div class="featured__item__pic set-bg" data-setbg="">
        <img src="img/featured/feature-1.jpg" alt="" />
        <ul class="featured__item__pic__hover">
        <li><a ><i class="fa fa-heart"></i></a></li>
        <li><a ><i class="fa fa-retweet"></i></a></li>
        <li><a onClick={() => props.addBasket('beef')}><i class="fa fa-shopping-cart"></i></a></li>
        </ul>
        </div>
        <div class="featured__item__text">
        <h6><a >Beef</a></h6>
        <h5>$30.00</h5>
        </div>
        </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
        <div class="featured__item">
        <div class="featured__item__pic set-bg" data-setbg="">
        <img src="img/featured/feature-2.jpg" alt="" />
        <ul class="featured__item__pic__hover">
        <li><a ><i class="fa fa-heart"></i></a></li>
        <li><a ><i class="fa fa-retweet"></i></a></li>
        <li><a onClick={() => props.addBasket('banana')}><i class="fa fa-shopping-cart"></i></a></li>
        </ul>
        </div>
        <div class="featured__item__text">
        <h6><a >Banana</a></h6>
        <h5>$18.00</h5>
        </div>
        </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 mix vegetables fastfood">
        <div class="featured__item">
        <div class="featured__item__pic set-bg" data-setbg="">
        <img src="img/featured/feature-3.jpg" alt="" />
        <ul class="featured__item__pic__hover">
        <li><a ><i class="fa fa-heart"></i></a></li>
        <li><a ><i class="fa fa-retweet"></i></a></li>
        <li><a onClick={() => props.addBasket('watermelons')}><i class="fa fa-shopping-cart"></i></a></li>
        </ul>
        </div>
        <div class="featured__item__text">
        <h6><a >2 Water Melons</a></h6>
        <h5>$17.00</h5>
        </div>
        </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 mix vegetables fresh-meat">
        <div class="featured__item">
        <div class="featured__item__pic set-bg" data-setbg="">
        <img src="img/featured/feature-4.jpg" alt="" />
        <ul class="featured__item__pic__hover">
        <li><a ><i class="fa fa-heart"></i></a></li>
        <li><a ><i class="fa fa-retweet"></i></a></li>
        <li><a onClick={() => props.addBasket('watermelon')}><i class="fa fa-shopping-cart"></i></a></li>
        </ul>
        </div>
        <div class="featured__item__text">
        <h6><a >Water Melon</a></h6>
        <h5>$19.00</h5>
        </div>
        </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 mix fastfood oranges">
        <div class="featured__item">
        <div class="featured__item__pic set-bg" data-setbg="">
        <img src="img/featured/feature-5.jpg" alt="" />
        <ul class="featured__item__pic__hover">
        <li><a ><i class="fa fa-heart"></i></a></li>
        <li><a ><i class="fa fa-retweet"></i></a></li>
        <li><a onClick={() => props.addBasket('grapes')}><i class="fa fa-shopping-cart"></i></a></li>
        </ul>
        </div>
        <div class="featured__item__text">
        <h6><a >Grapes</a></h6>
        <h5>$12.00</h5>
        </div>
        </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
        <div class="featured__item">
        <div class="featured__item__pic set-bg" data-setbg="">
        <img src="img/featured/feature-6.jpg" alt="" />
        <ul class="featured__item__pic__hover">
        <li><a ><i class="fa fa-heart"></i></a></li>
        <li><a ><i class="fa fa-retweet"></i></a></li>
        <li><a onClick={() => props.addBasket('burger')}><i class="fa fa-shopping-cart"></i></a></li>
        </ul>
        </div>
        <div class="featured__item__text">
        <h6><a >Burger</a></h6>
        <h5>$11.00</h5>
        </div>
        </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 mix oranges fastfood">
        <div class="featured__item">
        <div class="featured__item__pic set-bg" data-setbg="">
        <img src="img/featured/feature-7.jpg" alt="" />
        <ul class="featured__item__pic__hover">
        <li><a ><i class="fa fa-heart"></i></a></li>
        <li><a ><i class="fa fa-retweet"></i></a></li>
        <li><a onClick={() => props.addBasket('mango')}><i class="fa fa-shopping-cart"></i></a></li>
        </ul>
        </div>
        <div class="featured__item__text">
        <h6><a >Mangos</a></h6>
        <h5>$16.00</h5>
        </div>
        </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
        <div class="featured__item">
        <div class="featured__item__pic set-bg" data-setbg="">
        <img src="img/featured/feature-8.jpg" className="img-responsive" alt="" />
        <ul class="featured__item__pic__hover">
        <li><a ><i class="fa fa-heart"></i></a></li>
        <li><a ><i class="fa fa-retweet"></i></a></li>
        <li><a onClick={() => props.addBasket('apple')}><i class="fa fa-shopping-cart"></i></a></li>
        </ul>
        </div>
        <div class="featured__item__text">
        <h6><a >Apples</a></h6>
        <h5>$20.00</h5>
        </div>
        </div>
        </div>
            
        </div>

         );
    }


export default connect(null, { addBasket })(Cards);
