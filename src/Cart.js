import React from 'react';
import CartItem from './CartItem';

function Cart({ initialItems }){
    return (
        <div>
            <h1>I am Cart</h1> 
            <ul>
                {initialItems && initialItems.map(item => (
                    <CartItem {...item}/>
                ))}
            </ul>
        </div>
    )
}

export default Cart;


