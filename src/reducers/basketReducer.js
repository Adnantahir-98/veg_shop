import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET } from "../actions/types";


const initialState = {
    basketNumbers: 0,
    cartCost: 0,
    porducts: {
        meat:{
            id: 1,
            numbers: 0,
            name:"1st Featured Item",
            price:"30$",
            img:"img/featured/feature-1.jpg",
            inCart: false,

            },
        banana:{
            id: 2,
            numbers: 0,
            name:"Product Item 2nd",
            price:"28$",
            img:"img/featured/feature-2.jpg",
            inCart: false,
            },
        melon:{
            id: 3,
            numbers: 0,
            name:"Product Item 3rd",
            price:"17$",
            img:"img/featured/feature-3.jpg",
            inCart: false
            },
        watermelon:{
            id: 4,
            numbers: 0,
            name:"Awesome Product Item",
            price:"19$",
            img:"img/featured/feature-4.jpg",
            inCart: false,
            },
        grapes:{
            id: 5,
            numbers: 0,
            name:"Abcd at Gmail Key",
            price:"26$",
            img:"img/featured/feature-8.jpg",
            inCart: false,
            },
        burger:{
            id: 6,
            numbers: 0,
            name:"Crab Pool Security",
            price:"45$",
            img:"img/featured/feature-6.jpg",
            inCart: false,
            },
        mango:{
            id: 7,
            numbers: 0,
            name:"Crab Pool Security",
            price:"23$",
            img:"img/featured/feature-7.jpg",
            inCart: false,
            },
        apple:{
            id: 8,
            numbers: 0,
            name:"Crab Pool Security",
            price:"20$",
            img:"img/featured/feature-8.jpg",
            inCart: false,
            }    
    }
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_PRODUCT_BASKET:
            let addQuantity = { ...state.porducts[action.payload] };
            addQuantity.numbers += 1;
            addQuantity.inCart = true;
            console.log(addQuantity);
            return {
                ...state,
                basketNumbers: state.basketNumbers + 1,
                cartCost: state.cartCost + state.porducts[action.payload],
                products: {
                    ...state.products,
                    [action.payload]: addQuantity
                }
            }
        case GET_NUMBERS_BASKET:
            return {
                ...state
            }
        default:
            return state; 
    }
}


