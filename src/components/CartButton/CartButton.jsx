import React from 'react';
import cl from './CartButton.module.scss'
const CartButton = () => {
    return (
        <div className={cl.cartButtonWrapper}>
            <button className={cl.cartGreenButton}>
                <img src="/img/icons/arrow-left.svg" alt="Arrow Left"/>
                Вернуться назад
            </button>
        </div>
    );
};

export default CartButton;