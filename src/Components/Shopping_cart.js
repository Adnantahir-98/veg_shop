import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { productQuantity, clearProduct } from '../actions/productQuantity';
import beef from '../img/featured/feature-1.jpg';
import banana from '../img/featured/feature-2.jpg';
import watermelons from '../img/featured/feature-3.jpg';
import watermelon from '../img/featured/feature-4.jpg';
import grapes from '../img/featured/feature-5.jpg';
import burger from '../img/featured/feature-6.jpg';
import mango from '../img/featured/feature-7.jpg';
import apple from '../img/featured/feature-8.jpg';



function Shopping_cart({basketProps, productQuantity, clearProduct}) {
console.log(basketProps);

let productsInCart = [];

Object.keys(basketProps.products).forEach( function(item){
console.log(item);
console.log(basketProps.products[item].inCart);
if(basketProps.products[item].inCart){
productsInCart.push(basketProps.products[item])
}
console.log(productsInCart);
})

// const productImages = [beef,banana,watermelons,watermelon,grapes,burger,mango,apple];
const productImages = (product) => {
    if(product.tagName === 'beef'){ 
        return beef
    }else if(product.tagName === 'banana'){
        return banana
    }else if(product.tagName === 'watermelons'){
        return watermelons
    }else if(product.tagName === 'watermelon'){
        return watermelon
    }else if(product.tagName === 'grapes'){
        return grapes
    }else if(product.tagName === 'burger'){
        return burger
    }else if(product.tagName === 'mango'){
        return mango
    }else if(product.tagName === 'apple'){
        return apple
    }
}

productsInCart = productsInCart.map( ( product, index ) =>{

return(
    <Fragment key={index}>
        <tbody>
            <tr>
                <td class="shoping__cart__item">
                    <img src={productImages(product)} alt="" style = {{width:"101px", height:"100px"}} />
                    <h5 className="pt-1">{product.name}</h5>
                </td>
                <td class="shoping__cart__price">
                    ${product.price}
                </td>
                <td class="shoping__cart__quantity">
                    <div class="quantity">
                    <div class="pro-">
                        <input type="button" onClick={() => productQuantity('increase')} value=" - " />
                        <input type="button" value={ product.numbers} max="10"/> 
                        <input type="button" onClick={() => productQuantity('increase')} value=" + " />
                    </div>
                    </div>
                </td>
                <td class="shoping__cart__total">
                    ${product.numbers * product.price }
                </td>
                <td class="shoping__cart__item__close">
                    <span onClick={() => clearProduct(product.tagName)} class="icon_close"></span>
                </td>
            </tr>
        </tbody>

    </Fragment>
)
})

return (

    <div>
 
        <section class="hero hero-normal">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3">
                        <div class="hero__categories">
                            <div class="hero__categories__all">
                                <i class="fa fa-bars"></i>
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
                    <div class="col-lg-9">
                        <div class="hero__search">
                            <div class="hero__search__form">
                                <form action="#">
                                    <div class="hero__search__categories">
                                        All Categories
                                        <span class="arrow_carrot-down"></span>
                                    </div>
                                    <input type="text" placeholder="What do yo u need?" />
                                    <button type="submit" class="site-btn">SEARCH</button>
                                </form>
                            </div>
                            <div class="hero__search__phone">
                                <div class="hero__search__phone__icon">
                                    <i class="fa fa-phone"></i>
                                </div>
                                <div class="hero__search__phone__text">
                                    <h5>+65 11.188.888</h5>
                                    <span>support 24/7 time</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section class="breadcrumb-section set-bg" data-setbg="img/breadcrumb.jpg">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 text-center">
                        <div class="breadcrumb__text">
                            <h2 className="text-dark">Shopping Cart</h2>
                            <div class="breadcrumb__option">
                                <a href="index.html" className="text-dark">Home</a>
                                <span className="text-dark">Shopping Cart</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section class="shoping-cart spad">
            <div class="container">
            <div class="row">
            <div class="col-lg-12">
                <div class="shoping__cart__table">
                    <table>
                        <thead>
                            <tr>
                                <th class="shoping__product">Products</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th></th>
                            </tr>
                        </thead>

                {productsInCart}

                </table>
                </div>
            </div>
        </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="shoping__cart__btns">
                            <a href="#" class="primary-btn cart-btn CS">CONTINUE SHOPPING</a>
                            <a href="#" class="primary-btn cart-btn cart-btn-right"><span class="icon_loading"></span>
                                Upadate Cart</a>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="shoping__continue">
                            <div class="shoping__discount">
                                <h5>Discount Codes</h5>
                                <form action="#">
                                    <input type="text" placeholder="Enter your coupon code" />
                                    <button type="submit" class="site-btn">APPLY COUPON</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="shoping__checkout">
                            <h5>Cart Total</h5>
                            <ul>
                                <li>Subtotal <span>$454.98</span></li>
                                <li>Total <span>$454.98</span></li>
                            </ul>
                            <a href="#" class="primary-btn">PROCEED TO CHECKOUT</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>


    );
}

const mapStateToProps = state => ({
basketProps: state.basketState
});

export default connect( mapStateToProps, { productQuantity, clearProduct } )(Shopping_cart);