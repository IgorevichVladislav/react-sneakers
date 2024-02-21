import React from "react";
import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {

    const [cartOpened, setCartOpened] = React.useState(false);
    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);

    React.useEffect(() => {
        fetch('https://65d5ec4bf6967ba8e3bcf7a8.mockapi.io/items')
            .then(response => response.json())
            .then(json => setItems(json))
    }, [])

    const onAddToCard = (obj) => {
        setCartItems(prev => [...cartItems, obj]);
    }
    console.log(cartItems)

    return (
        <div className="wrapper clear">

            {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)}/>}
            <Header onClickCart={() => setCartOpened(true)}/>

            <div className="content">
                <div className='d-flex justify-between align-center mb-40'>
                    <h1>Все кроссовки</h1>
                    <div className='search-block d-flex align-center'>
                        <img className='search-img' src="/img/icons/search.svg" alt="Search"/>
                        <input type="text" placeholder='Поиск...'/>
                    </div>
                </div>
                <div className='cardItem'>

                    {items.map((title, index) =>
                        <Card
                            key={index}
                            title={title.title}
                            price={title.price}
                            src={title.src}
                            onFavorite={() => console.log('Добавили в закладки')}
                            onClickAddCard={(obj) => onAddToCard(obj)}
                        />)}
                </div>
            </div>

        </div>
    );
}

export default App;
