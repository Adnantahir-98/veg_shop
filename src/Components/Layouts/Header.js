import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { getNumbers } from '../../actions/getAction';
        

function Header(props) {

        console.log(props);

        useEffect(() => {
            getNumbers();
        }, [])
        return (    

            <div className="Home">
                <div class="humberger__menu__overlay"></div>
                <header class="header">
                    <div class="header__top">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6 col-md-6">
                                    <div class="header__top__left">
                                        <ul>
                                            <li>
                                                <i class="fa fa-envelope"></i>
                                                <Link to="https://preview.colorlib.com/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="dbb3beb7b7b49bb8b4b7b4a9b7b2b9f5b8b4b6">[email&#160;protected]</Link>
                                            </li>
                                            <li>Free Shipping for all Order of $99</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="header__top__right">
                                        <div class="header__top__right__social">
                                            <Link to="#">
                                                <i class="fa fa-facebook"></i>
                                            </Link>
                                            <Link to="#">
                                                <i class="fa fa-twitter"></i>
                                            </Link>
                                            <Link to="#">
                                                <i class="fa fa-linkedin"></i>
                                            </Link>
                                            <Link to="#">
                                                <i class="fa fa-pinterest-p"></i>
                                            </Link>
                                        </div>
                                        <div class="header__top__right__language">
                                            <img src="img/language.png" alt="" />
                                            <div>English</div>
                                        </div>
                                        <div class="header__top__right__auth">
                                            <Link to="/login">
                                                <i class="fa fa-user"></i> Login 
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3">
                                <div class="header__logo">
                                    <Link to="/">
                                        <img src="img/logo.png" alt="" />
                                    </Link>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <nav class="header__menu">
                                    <ul>
                                        <li class="active">
                                            <Link to="/">Home</Link>
                                        </li>
                                        <li>
                                            <Link to="/shop">Shop</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Pages</Link>
                                            <ul class="header__menu__dropdown">
                                                <li>
                                                    <Link to="/shop_details">Shop Details</Link>
                                                </li>
                                                <li>
                                                    <Link to="/shop_cart">Shoping Cart</Link>
                                                </li>
                                                <li>
                                                    <Link to="/checkout">Check Out</Link>
                                                </li>
                                                <li>
                                                    <Link to="/blog_details">Blog Details</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="/blog">Blog</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">Contact</Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div class="col-lg-3">
                                <div class="header__cart">
                                    <ul>
                                        <li>
                                            <Link to="#">
                                                <i class="fa fa-heart"></i>
                                                <span>0</span>
                                            </Link>
                                        </li>
                                        <li>{
                                            props.basketProps.basketNumbers ? 
                                            <Link to="/shop_cart">
                                                <i class="fa fa-shopping-bag"></i>
                                                <span>{ props.basketProps.basketNumbers }</span>
                                            </Link> : 
                                            <Link>
                                                <i class="fa fa-shopping-bag"></i>
                                                <span>0</span>
                                            </Link>
                                        }
                                        </li>
                                    </ul>
                                    <div class="header__cart__price">item: 
                                            
                                        <span>$150.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="humberger__open">
                            <i class="fa fa-bars"></i>
                        </div>
                    </div>
                </header>
            </div>


        );

}
    
    const mapStateToProps = state => ({
        basketProps: state.basketState

    })


export default connect(mapStateToProps, { getNumbers })(Header);
