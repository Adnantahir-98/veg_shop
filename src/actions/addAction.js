
import { ADD_PRODUCT_BASKET } from './types';


export const addBasket = (products) => {
    return (dispatch) => {
        console.log('Adding to Basket');
        console.log('Product: ', products);

        dispatch({
            type: ADD_PRODUCT_BASKET,
            payload: products
        });
    }
}



