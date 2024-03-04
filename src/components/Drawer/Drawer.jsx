import React, {useContext, useState} from 'react';
import Info from "../Cart/Info/Info";
import CartButton from "../Cart/CartButton/CartButton";
import CartItems from "../Cart/CartItems/CartItems";
import cl from './Drawer.module.scss'
import AppContext from "../../AppContext";
import CartComplete from "../Cart/CartComplete/CartComplete";

const Drawer = ({items = [], onClose, onRemove}) => {
    const {setCartItems} = useContext(AppContext);
    const [orderIsComplete, setOrderIsComplete] = useState(false);

    const onClickOrder = () => {
        setOrderIsComplete(true);
        setCartItems([]);
    }

    return (<div className={cl.overlay}>
        <div className={cl.cartName}>
            <h2>Корзина
                <img className='removeBtn cu-p'
                     src='/img/icons/btn-remove.svg'
                     alt="Remove"
                     onClick={onClose}
                />
            </h2>
        </div>

        <div className={cl.drawer}>


            {items.length
                ? <CartItems items={items} onRemoveDrawProp={onRemove} onClick={onClickOrder}/>

                // : <CartComplete>
                //     <CartButton onClose={onClose}/>
                // </CartComplete>


                : (orderIsComplete)
                    ? <CartComplete
                        title='Заказ оформлен!'
                        description='Ваш заказ #18 скоро будет передан курьерской доставке'
                    >
                        <CartButton
                            onClose={onClose}/>
                    </CartComplete>

                    : <Info
                        title='Корзина пустая'
                        description='Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
                        img="/img/icons/cart-epty.png">
                        <CartButton
                            onClose={onClose}/>
                    </Info>
            }


        </div>
    </div>);
};

export default Drawer;