import React from 'react';
import cl from "./TotalPrice.module.scss";

const TotalPrice = ({onClick}) => {
    return (
        <div className={cl.cartTotalBlack}>
            <ul>
                <li className='d-flex'>
                    <span>Итого:</span>
                    <div></div>
                    <b>21 498 руб.</b>
                </li>
                <li className='d-flex'>
                    <span>Налог 5%:</span>
                    <div></div>
                    <b>1074 руб.</b>
                </li>
            </ul>
            <button onClick={onClick}
                className={cl.greenButton}>
                Оформить заказ
                <img src="/img/icons/arrow-right.svg" alt="Arrow"/>
            </button>
        </div>
    );
};

export default TotalPrice;