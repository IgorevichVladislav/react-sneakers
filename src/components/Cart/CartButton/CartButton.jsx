import React, {useContext} from 'react';
import cl from './CartButton.module.scss'
import AppContext from "../../../AppContext";
const CartButton = ({onClose}) => {
    const {setCartOpened} = useContext(AppContext);

    return (
        <div className={cl.cartButtonWrapper} onClick={onClose}>
            <button onClick={() => setCartOpened(false)}
                className={cl.cartGreenButton}>
                <img src="/img/icons/arrow-left.svg" alt="Arrow Left"/>
                Вернуться назад
            </button>
        </div>
    );
};

export default CartButton;