import React from 'react';
import CartEmpty from "../Cart/CartEmpty/CartEmpty";
import CartButton from "../Cart/CartButton/CartButton";
import CartItems from "../Cart/CartItems/CartItems";
import cl from './Drawer.module.scss'

const Drawer = ({items = [], onClose, onRemove}) => {
    return (
        <div className={cl.overlay}>
            <div className={cl.drawer}>

                <h2 className='d-flex justify-between align-center'>Корзина
                    <img className='removeBtn cu-p'
                         src='/img/icons/btn-remove.svg'
                         alt="Remove"
                         onClick={onClose}
                    />
                </h2>

                {
                    items.length ?
                        <CartItems items={items} onRemoveDrawProp={onRemove} />
                        :
                        <CartEmpty>
                            <CartButton onClose={onClose} />
                        </CartEmpty>
                }


            </div>
        </div>
    );
};

export default Drawer;