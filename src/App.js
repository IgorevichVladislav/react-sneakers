import React from "react";
import {useState, useEffect} from "react";
import {Route, Routes} from 'react-router-dom';
import axios from "axios";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {

    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favorites, setFavorites] = useState([])
    const [searchValue, setSearchValue] = useState('');
    const [cartOpened, setCartOpened] = useState(false);


    useEffect(() => {
        axios.get("https://65d5ec4bf6967ba8e3bcf7a8.mockapi.io/items")
            .then(response => setItems(response.data))
            .catch(err => alert(err))
        // {console.log(setItems, 'setItems')}
        axios.get("https://65d5ec4bf6967ba8e3bcf7a8.mockapi.io/cart")
            .then(response => setCartItems(response.data))
            .catch(err => alert(err))

        axios.get("https://65d5ec4bf6967ba8e3bcf7a8.mockapi.io/cart")
            .then(response => setFavorites(response.data))
            .catch(err => alert(err))

    }, [])

    const onAddToCard = (obj) => {
        axios.post("https://65d5ec4bf6967ba8e3bcf7a8.mockapi.io/cart", obj)
            .then(response => {
                setCartItems(prev => [...prev, response.data]);
            })
            .catch(error => {
                console.error("Error adding item to the cart:", error);
            });
    }

    const onRemoveCartItem = (id) => {
        axios.delete(`https://65d5ec4bf6967ba8e3bcf7a8.mockapi.io/cart/${id}`)
            .then(() => {
                setCartItems(prev => prev.filter(item => item.id !== id));
            })
            .catch(error => {
                console.error("Error removing item from the cart:", error);
            });
    }

    const onAddToFavorite = () => {
        axios.get("https://65d5ec4bf6967ba8e3bcf7a8.mockapi.io/items")
            .then(response => {
                setFavorites(prev => [...prev, response.data]);
            })
            .catch(error => {
                console.error("Error adding item to the cart:", error);
            });
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

            <Routes>
                <Route path='/'
                       element={
                           <Home
                               items={items}
                               searchValue={searchValue}
                               setSearchValue={setSearchValue}
                               onChangeSearchInput={onChangeSearchInput}
                               onAddToFavorite={onAddToFavorite}
                               onAddToCard={onAddToCard}
                           />
                       }
                       exact
                />

                <Route path='/favorites'
                       element={
                           <Favorites
                               items={items}
                               favorites={favorites}
                               onAddToFavorite={onAddToFavorite}
                               onAddToCard={onAddToCard}

                           />
                       }
                       exact
                />
            </Routes>

        </div>
    );
}

export default App;


