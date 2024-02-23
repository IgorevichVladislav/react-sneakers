import React from 'react';
import CartEmpty from "./CartEmpty/CartEmpty";
import CartButton from "./CartButton/CartButton";
import CartItems from "./CartItems/CartItems";

const Drawer = ({items = [], onClose, onRemove}) => {
    return (
        <div className="overlay">
            <div className="drawer">

                <h2 className='d-flex justify-between align-center'>Корзина
                    <img className='removeBtn cu-p'
                         src='/img/icons/btn-remove.svg'
                         alt="Remove"
                         onClick={onClose}
                    />
                </h2>


                {/*<CartEmpty>*/}

                {/*<CartButton/>*/}

                {/*</CartEmpty>*/}

                    <CartItems
                    items={items}
                    />


            </div>
        </div>
    );
};

export default Drawer;