import React from 'react';
import CartEmpty from "../CartEmpty/CartEmpty";
import CartButton from "../CartButton/CartButton";
import CartItems from "../CartItems/CartItems";
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
                            <CartButton/>
                        </CartEmpty>
                }


            </div>
        </div>
    );
};

export default Drawer;