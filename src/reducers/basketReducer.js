import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET, DECREASE_QUANTITY, INCREASE_QUANTITY, CLEAR_PRODUCT } from "../actions/types";


export const initialState = {
    basketNumbers: 0,
    cartCost: 0,
    products: {
        beef:{
            id: 1,
            numbers: 0,
            tagName: 'beef',
            name:"Beef Meat",
            price: 30,
            // img:"img/featured/feature-1.jpg",
            inCart: false

            },
        banana:{
            id: 2,
            numbers: 0,
            tagName: 'banana',
            name:"Banana",
            price: 18,
            // img:"img/featured/feature-2.jpg",
            inCart: false
            },
        watermelons:{
            id: 3,
            numbers: 0,
            tagName: 'watermelons',
            name:"2 Water Melons",
            price:17,
            // img:"img/featured/feature-3.jpg",
            inCart: false
            },
        watermelon:{
            id: 4,
            numbers: 0,
            tagName: 'watermelon',
            name:"Water Melon",
            price:19,
            // img:"img/featured/feature-4.jpg",
            inCart: false
            },
        grapes:{
            id: 5,
            numbers: 0,
            tagName: 'grapes',
            name:"Grapes",
            price:12,
            // img:"img/featured/feature-5.jpg",
            inCart: false
            },
        burger:{
            id: 6,
            numbers: 0,
            tagName: 'burger',
            name:"Burger",
            price:11,
            // img:"img/featured/feature-6.jpg",
            inCart: false
            },
        mango:{
            id: 7,
            numbers: 0,
            tagName: 'mango',
            name:"Mangoes",
            price:16,
            // img:"img/featured/feature-7.jpg",
            inCart: false
            },
        apple:{
            id: 8,
            numbers: 0,
            tagName: 'apple',
            name:"Apples",
            price:20,
            // img:"img/featured/feature-8.jpg",
            inCart: false
            }    
    }
}

export default (state = initialState, action) => {
    let productSelected = "";

    switch(action.type) {
        case ADD_PRODUCT_BASKET:
            productSelected = { ...state.products[action.payload] };
            productSelected.numbers += 1;
            productSelected.inCart = true;
            console.log(productSelected);
            return {
                ...state,
                basketNumbers: state.basketNumbers + 1,
                cartCost: state.cartCost + state.products[action.payload].price,   //  [action.payload].price, 
                products: {
                    ...state.products,
                    [action.payload]: productSelected,
                }
            }
        case GET_NUMBERS_BASKET:
            return { 
                ...state
            }
        case INCREASE_QUANTITY:
            console.log('Function is increasing');
            productSelected = { ...state.products[action.payload] };
            productSelected.numbers += 1;
            return {
                ...state,
                cartCost: state.cartCost + state.products[action.payload].price, 
                products: {
                    ...state.products,
                    basketNumbers: state.basketNumbers + 1,
                    [action.payload]: productSelected,
                }
            }
            case DECREASE_QUANTITY:
                console.log('Function is decreasing');
                productSelected = {...state.products[action.payload]};
                let newCartCost = 0;
                let newBasketNumbers = 0; 
                if(productSelected.numbers === 0){
                    productSelected.numbers = 0;
                    newCartCost = state.cartCost
                    newBasketNumbers = state.basketNumbers
                } else {
                    productSelected.numbers -= 1;
                    newCartCost = state.cartCost - state.products[action.payload].price;
                    newBasketNumbers = state.basketNumbers - 1;

                }
                return {
                    ...state,
                    basketNumbers: newBasketNumbers,
                    cartCost: newCartCost,
                    products: {
                        ...state.products,
                        [action.payload]: productSelected
                    }
                }
            case CLEAR_PRODUCT:
                productSelected = { ...state.products[action.payload]};
                let numberBackup = productSelected.numbers;
                productSelected.numbers = 0;
                productSelected.inCart = false;
                return {
                    ...state,
                    basketNumbers: state.basketNumbers - numberBackup,
                    cartCost: state.cartCost - (numberBackup * productSelected.price),
                    products:{
                        ...state.products,
                        [action.payload]: productSelected
                    }

                }

        default:
            return state; 
    }
}


