import React from 'react';
import cl from './CartEmpty.module.scss'

const CartEmpty = ({children}) => {
    return (
        <div className={cl.cartEmpty}>
            <img src="/img/icons/cart-epty.png" alt="Cart Empty"/>
            <h2>Корзина пустая</h2>
            <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            {children}
        </div>
    );
};

export default CartEmpty;