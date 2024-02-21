import React from 'react';

const Drawer = ({items = [], onClose}) => {
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
                <div className="items">
                    {items.map(obj => (
                        <div className="cartItem d-flex align-center mb-20">
                            <img className='cartSneakersImg' width={70} height={70}
                                 src={obj.src} alt="Nike"/>
                            <div className='mt-30 mb-30'>
                                <p>{obj.title}</p>
                                <strong>{obj.price} руб.</strong>
                            </div>
                            <img className='removeBtn' src='/img/icons/btn-remove.svg' alt="Remove"/>
                        </div>
                    ))}

                </div>
                <div className="cartTotalBlack">
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
                    <button className='greenButton'>
                        Оформить заказ
                        <img src="/img/icons/arrow-right.svg" alt="Arrow"/>
                    </button>
                </div>
        </div>
            </div>
    );
};

export default Drawer;