import React from "react";
import axios from "axios";
import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer/Drawer";

function App() {

    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    const [cartOpened, setCartOpened] = React.useState(false);


    React.useEffect(() => {
        axios.get("https://65d5ec4bf6967ba8e3bcf7a8.mockapi.io/items")
            .then(response => setItems(response.data))
            .catch(err => alert(err))
        // {console.log(setItems, 'setItems')}
        axios.get("https://65d5ec4bf6967ba8e3bcf7a8.mockapi.io/cart")
            .then(response => setCartItems(response.data))
            .catch(err => alert(err))
        // {console.log(setCartItems, 'setCartItems')}
    }, [])

    const onAddToCard = (obj) => {
        axios.post("https://65d5ec4bf6967ba8e3bcf7a8.mockapi.io/cart", obj)
        setCartItems(prev => [...prev, obj]);
    }

    const onRemoveCartItem = (id) => {
        axios.delete(`https://65d5ec4bf6967ba8e3bcf7a8.mockapi.io/cart/${id}`)
console.log(id)
        setCartItems(prev => prev.filter(item => item.id !== id))
    }
    const onChangeSearchInput = event => setSearchValue(event.target.value);

    return (
        <div className="wrapper clear">

            {cartOpened && <Drawer
                items={cartItems}
                onClose={() => setCartOpened(false)}
                onRemove={onRemoveCartItem}
            />}

            <Header onClickCart={() => setCartOpened(true)}/>

            <div className="content">
                <div className='d-flex justify-between align-center mb-40'>

                    <h1>{searchValue ? `Поиск по запросу: '${searchValue}'` : 'Все кроссовки'}</h1>
                    <div className='search-block d-flex align-center '>
                        <img className='search-img' src="/img/icons/search.svg" alt="Search"/>
                        {searchValue && <img className='removeSearch cu-p clear'
                                             src='/img/icons/btn-remove.svg'
                                             alt="Remove Search"
                                             onClick={() => setSearchValue('')}
                        />}
                        <input
                            value={searchValue}
                            onChange={onChangeSearchInput}
                            type="text" placeholder='Поиск...'/>
                    </div>
                </div>
                <div className='cardItem'>

                    {items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((title, index) =>
                        <Card
                            key={index + 1}
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
