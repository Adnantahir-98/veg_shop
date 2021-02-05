
import React, { Component } from 'react';
import Sidebar from './Layouts/Sidebar';
import Cards from './Layouts/productCards';
import Banner from './Layouts/Banners';
import Post from './Layouts/blogPost';
import {Link} from "react-router-dom";
import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction';
import Carousel from 'react-responsive-carousel';
import Homecarousel from './Layouts/hometopcarousel';
import Latestproducts from './Layouts/latestproduct';
import '../App.css';



class Home extends Component {

constructor(props){
  super(props);
  this.state={

  post:[
      {
      img:"img/blog/blog-1.jpg",
      date: "March 5, 2019",
      comnt: "9",
      title: "Cooking tips make cooking simple",
      para: "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
      },
        {
        img:"img/blog/blog-2.jpg",
        date: "June 12, 2020",
        comnt: "51",
        title: "6 ways to prepare breakfast for 30",
        para: "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaera",
        },
        {
          img:"img/blog/blog-3.jpg",
          date: "January 6, 2018",
          comnt: "12",
          title: "Visit the clean farm in the US",
          para: "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat",
        },


    ],

    cat:[
        {
        img:"img/categories/cat-1.jpg",
        title: "Fresh Fruits",
        },
        {
          img:"img/categories/cat-2.jpg",
          title: "Fresh Vegetables",
        }
      ],
  
  banner:[
      {
      img:"img/banner/banner-1.jpg"
      },
      {
        img:"img/banner/banner-2.jpg"
      }
    ],
    }
  }


render() {

let banner = this.state.banner.map(banner => {
  return(
    <Banner banners = { banner } />
  )
})

let blogPost = this.state.post.map(post => {
  return(
    <Post posts = { post } />
  )
})


// let Carousel = this.state.cat.map(cat => {<Carousel cat = {cat} />})

return (

<div className="App">

    <section className="hero">
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="hero__categories">
                        <div className="hero__categories__all">
                            <i className="fa fa-bars"></i>
                            <span>All departments</span>
                        </div>
                        <ul>
                            <li><a href="#">Fresh Meat</a></li>
                            <li><a href="#">Vegetables</a></li>
                            <li><a href="#">Fruit & Nut Gifts</a></li>
                            <li><a href="#">Fresh Berries</a></li>
                            <li><a href="#">Ocean Foods</a></li>
                            <li><a href="#">Butter & Eggs</a></li>
                            <li><a href="#">Fastfood</a></li>
                            <li><a href="#">Fresh Onion</a></li>
                            <li><a href="#">Papayaya & Crisps</a></li>
                            <li><a href="#">Oatmeal</a></li>
                            <li><a href="#">Fresh Bananas</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="hero__search">
                        <div className="hero__search__form">
                            <form action="#">
                                <div className="hero__search__categories">
                                    All Categories
                                    <span className="arrow_carrot-down"></span>
                                </div>
                                <input type="text" placeholder="What do yo u need?" />
                                <button type="submit" className="site-btn">SEARCH</button>
                            </form>
                        </div>
                        <div className="hero__search__phone">
                            <div className="hero__search__phone__icon">
                                <i className="fa fa-phone"></i>
                            </div>
                            <div className="hero__search__phone__text">
                                <h5>+65 11.188.888</h5>
                                <span>support 24/7 time</span>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <img src="img/hero/banner.jpg" className="veg_img w-100" style={{height:"73vh",}} alt="" />
                            </div>
                            <div className="hero__text carousel-caption" style={{position: "absolute", left:"-30%",}}>
                                <span className="ml-3">FRUIT FRESH</span>
                                <h2 className="ml-3" style={{fontSize: "35px"}}>Vegetable <br />100% Organic</h2>
                                <p className="ml-4">Free Pickup and Delivery Available</p>
                                <Link to="/shop" className="primary-btn">SHOP NOW</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="categories" ref={this.myRef}>
        <div class="container">
            
                <Homecarousel />
            
        </div>

    </section>


    <section className="featured spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title">
                        <h2>Featured Product</h2>
                    </div>
                    <div className="featured__controls">
                        <ul>
                            <li className="active" data-filter="*">All</li>
                            <li data-filter=".oranges">Oranges</li>
                            <li data-filter=".fresh-meat">Fresh Meat</li>
                            <li data-filter=".vegetables">Vegetables</li>
                            <li data-filter=".fastfood">Fastfood</li>
                        </ul>
                    </div>
                </div>
            </div>

            <Cards />
            
        </div>
    </section>


    <div className="banner">
        <div className="container">
            <div className="row">

              {banner}    

            </div>
        </div>
    </div>


    <section className="latest-product spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="latest-product__text">
                        <Latestproducts />
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="latest-product__text">
                        <h4>Top Rated Products</h4>
                        <div className="latest-product__slider owl-carousel">
                            <div className="latest-prdouct__slider__item">
                                <a href="#" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="img/latest-product/lp-1.jpg" alt="" />
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="#" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="img/latest-product/lp-2.jpg" alt="" />
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="#" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="img/latest-product/lp-3.jpg" alt="" />
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                            </div>
                            <div className="latest-prdouct__slider__item">
                                <a href="#" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="img/latest-product/lp-1.jpg" alt="" />
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="#" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="img/latest-product/lp-2.jpg" alt="" />
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="#" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="img/latest-product/lp-3.jpg" alt="" />
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="latest-product__text">
                        <h4>Review Products</h4>
                        <div className="latest-product__slider owl-carousel">
                            <div className="latest-prdouct__slider__item">
                                <a href="#" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="img/latest-product/lp-1.jpg" alt="" />
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="#" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="img/latest-product/lp-2.jpg" alt="" />
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="#" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="img/latest-product/lp-3.jpg" alt="" />
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                            </div>
                            <div className="latest-prdouct__slider__item">
                                <a href="#" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="img/latest-product/lp-1.jpg" alt="" />
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="#" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="img/latest-product/lp-2.jpg" alt="" />
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                                <a href="#" className="latest-product__item">
                                    <div className="latest-product__item__pic">
                                        <img src="img/latest-product/lp-3.jpg" alt="" />
                                    </div>
                                    <div className="latest-product__item__text">
                                        <h6>Crab Pool Security</h6>
                                        <span>$30.00</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section className="from-blog spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title from-blog__title">
                        <h2>From The Blog</h2>
                    </div>
                </div>
            </div>
            <div className="row">

                {blogPost}
              
            </div>
        </div>
    </section>

</div>


    );
  }
}


export default Home;

