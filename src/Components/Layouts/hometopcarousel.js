
import React, { Component } from 'react';

import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import { addBasket } from '../../actions/addAction';


class HometopCarousel extends Component {


prevClick = () => {
    const slide = this.myRef.current;
    slide.scrollLeft -= slide.offsetWidth;
    if(slide.scrollLeft <= 0){
        slide.scrollLeft = slide.scrollWidth;
    }
}

render(){

return (
    <div className="homecarousel">
        <div class="row">
        
            <div class="col-lg-3">
                <div class="categories__item set-bg" data-setbg="">
                    <img src="img/categories/cat-1.jpg" alt="" />
                    <h5 className="text-dark"><a href="#">Fresh Fruit</a></h5>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="categories__item set-bg" data-setbg="">
                    <img src="img/categories/cat-2.jpg" alt="" />
                    <h5><a href="#">Dried Fruit</a></h5>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="categories__item set-bg" data-setbg="">
                    <img src="img/categories/cat-3.jpg" alt="" />
                    <h5><a href="#">Vegetables</a></h5>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="categories__item set-bg" data-setbg="">
                    <img src="img/categories/cat-4.jpg" alt="" />
                    <h5><a href="#">drink fruits</a></h5>
                </div>
            </div>
        </div>  
        
    </div>

        );
    }
}


export default HometopCarousel;
