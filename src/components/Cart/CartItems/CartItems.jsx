import React from 'react';
import cl from './CartItems.module.scss'
import TotalPrice from "../TotalPrice/TotalPrice";

const CartItems = ({items, onRemoveDrawProp, onClick}) => {

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

            <TotalPrice onClick={onClick} />

        </div>
    );
};

export default CartItems;