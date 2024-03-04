import {useState, useEffect} from "react";
import {Route, Routes} from 'react-router-dom';

import axios from "axios";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import AppContext from "./AppContext";


function App() {

    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [cartOpened, setCartOpened] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    console.log(items)

    useEffect(() => {
        async function fetchData() {
            try {
                const cartResponse = await axios.get("https://65d5ec4bf6967ba8e3bcf7a8.mockapi.io/cart");
                const itemsResponse = await axios.get("https://65d5ec4bf6967ba8e3bcf7a8.mockapi.io/items");
                const itemsWithFavouriteAndId = itemsResponse.data.map(item => ({
                    ...item,
                    favourite: false,
                    id: Math.floor(1000 + Math.random() * 9000),
                }));
                setIsLoading(false)
                setItems(itemsWithFavouriteAndId);
                setCartItems(cartResponse.data);
            } catch (err) {
                alert(err.message);
            }
        }

        fetchData();

    }, []);

    const onAddToCard = (obj) => {
        {
            console.log(obj)
        }
        if (cartItems.find(item => Number(item.id) === Number(obj.id))) {
            axios.delete(`https://65d5ec4bf6967ba8e3bcf7a8.mockapi.io/cart/${obj.id}`)
                .then(() => {
                    setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
                })
                .catch(error => {
                    console.error("Error removing item from the cart:", error);
                });
        } else {
            axios.post("https://65d5ec4bf6967ba8e3bcf7a8.mockapi.io/cart", obj)
                .then((response) => {
                    setCartItems(prev => [...prev, response.data]);
                })
                .catch(error => {
                    console.error("Error adding item to the cart:", error.message);
                });
        }
    }

    const onRemoveCartItem = (id) => {
        {
            console.log(id)
        }
        axios.delete(`https://65d5ec4bf6967ba8e3bcf7a8.mockapi.io/cart/${id}`)
            .then(() => {
                setCartItems(prev => prev.filter(item => item.id !== id));
            })
            .catch(error => {
                console.error("Error removing item from the cart:", error.message);
            });
    }

    const onAddToFavorite = (itemId) => {
        console.log(itemId)
        setItems(prevItems => {
            return prevItems.map(item => {
                if (item.id === itemId) {
                    return {...item, favourite: !item.favourite};
                }
                return item;
            });
        });
    }

    const onChangeSearchInput = event => setSearchValue(event.target.value);

    const isItemAdded = (id) => {
        return cartItems.some(obj => Number(obj.id) === Number(id));
    }

    return (
        <AppContext.Provider value={{items, cartItems, isItemAdded, setCartOpened, setCartItems}}>


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
                                   cartItems={cartItems}
                                   searchValue={searchValue}
                                   setSearchValue={setSearchValue}
                                   onChangeSearchInput={onChangeSearchInput}
                                   onAddToFavorite={onAddToFavorite}
                                   onAddToCard={onAddToCard}
                                   isLoading={isLoading}
                               />
                           }
                           exact
                    />

                    <Route path='/favorites'
                           element={
                               <Favorites
                                   onAddToFavorite={onAddToFavorite}
                                   onAddToCard={onAddToCard}

                               />
                           }
                           exact
                    />
                </Routes>

            </div>
        </AppContext.Provider>
    );
}

export default App;


