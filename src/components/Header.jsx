import React from 'react';

const Header = (props) => {
    return (
        <header className='d-flex justify-between'>
            <div className='d-flex align-center'>
                <img width={40} height={40} src='/img/icons/header-logo.png'/>
                <div>
                    <h1 className='text-uppercase'>React Sneakers</h1>
                    <p>Магазин лучших кросовок</p>
                </div>
            </div>

            <ul className='headerRight d-flex align-center'>
                <li className='cu-p' onClick={props.onClickCart}>
                    <img width={18} height={18} src='/img/icons/cart.svg'/>

                    <span>1205 руб.</span>
                </li>
                <li>
                    <img width={18} height={18} src='/img/icons/like.svg'/>

                    <span>Закладки</span>
                </li>
                <li>

                    <img width={18} height={18} src='/img/icons/user.svg'/>
                    <span>Профиль</span>
                </li>
            </ul>
        </header>
    );
};

export default Header;