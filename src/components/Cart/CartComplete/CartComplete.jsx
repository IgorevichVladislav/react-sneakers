import React from 'react';
import cl from './CartComplete.module.scss'

const CartComplete = ({title, description, children}) => {
    return (
        <div className={cl.cartComplete}>
            <img className={cl.completeIcon} src="/img/icons/complete-order.png" alt="Cart Complete"/>
            <h2>{title}</h2>
            <p>{description}</p>
            {children}
        </div>
    );
};

export default CartComplete;