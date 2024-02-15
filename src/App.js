import React from "react";

function App() {
    return (
        <div className="wrapper clear">
            <header className='d-flex justify-between'>
                <div className='d-flex align-center'>
                    <img width={40} height={40} src='/img/icons/header-logo.png'/>
                    <div>
                        <h1 className='text-uppercase'>React Sneakers</h1>
                        <p>Магазин лучших кросовок</p>
                    </div>
                </div>

                <ul className='headerRight d-flex align-center'>
                    <li>
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
            <div className="content">
                <h1 className='mb-40'>Все кроссовки</h1>

                <div className="card">
                    <img width={133} height={112} src="/img/sneakers/nike-blazer-mid-suede-green.png" alt="Nike"/>
                    <p className=''>Мужские Кроссовки Nike Blazer Mid Suede</p>
                    <div className='d-flex justify-between align-center'>
                        <div className='d-flex flex-column'>
                            <span className='text-uppercase'>Цена:</span>
                            <strong>12999 руб.</strong>
                        </div>
                        <button className='button'>
                            <img width={11} height={11} src="/img/icons/plus.svg" alt="Plus"/>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default App;
