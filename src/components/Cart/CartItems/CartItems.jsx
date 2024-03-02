import React from 'react';
import cl from './CartItems.module.scss'

const CartItems = ({items, onRemoveDrawProp}) => {

    return (
        <div className='d-flex flex-column flex'>
            <div className={cl.items}>
                {items.map((obj) => (
                    <div className={cl.cartItem} key={obj.id}>

                        <img className={cl.cartSneakersImg} width={70} height={70}
                             src={obj.src} alt="Nike"/>
                        <div className='mt-30 mb-30'>
                            <p>{obj.title}</p>
                            <strong>{obj.price} руб.</strong>
                        </div>
                        <img className={cl.removeBtn} src='/img/icons/btn-remove.svg' alt="Remove"
                             onClick={() => onRemoveDrawProp(obj.id)}

                        />
                    </div>
                ))}

            </div>


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
                <button className={cl.greenButton}>
                    Оформить заказ
                    <img src="/img/icons/arrow-right.svg" alt="Arrow"/>
                </button>
            </div>
        </div>
    );
};

export default CartItems;