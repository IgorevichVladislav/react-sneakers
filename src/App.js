import React from "react";
import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

function App() {

    const [cartOpened, setCartOpened] = React.useState(false);
    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        fetch('https://65d5ec4bf6967ba8e3bcf7a8.mockapi.io/items')
            .then(response => response.json())
            .then(json => setItems(json))
    }, [])


    // const sneakersInfo = [
    //     {
    //         title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    //         price: 12999,
    //         src: '/img/sneakers/nike-blazer-mid-suede-green.png'},
    //     {title: 'Мужские Кроссовки Nike Air Max 270', price: 12999, src: '/img/sneakers/nike-air-max-270.png'},
    //     {
    //         title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    //         price: 8499,
    //         src: '/img/sneakers/nike-blazer-mid-suede-cream.png'
    //     },
    //     {
    //         title: 'Кроссовки Puma X Aka Boku Future Rider',
    //         price: 8999,
    //         src: '/img/sneakers/puma-x-aka-boku-future-rider.png'
    //     },
    //     {title: 'Мужские Кроссовки Under Armour Curry 8', price: 15199, src: '/img/sneakers/under-armour-curry 8.png'},
    //     {title: 'Мужские Кроссовки Nike Kyrie 7', price: 11299, src: '/img/sneakers/nike-kyrie-7.png'},
    //     {title: 'Мужские Кроссовки Jordan Air Jordan 11', price: 10799, src: '/img/sneakers/jordan-air-jordan-11.png'},
    //     {title: 'Мужские Кроссовки Nike LeBron XVIII', price: 16499, src: '/img/sneakers/nike-lebron-xviii.png'},
    //     {title: 'Мужские Кроссовки Nike Lebron XVIII Low', price: 13999, src: '/img/sneakers/nike-lebron-xviii-low.png'},
    //     {
    //         title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    //         price: 9499,
    //         src: '/img/sneakers/nike-blazer-mid-suede-green.png'
    //     },
    //
    //     {
    //         title: 'Кроссовки Puma X Aka Boku Future Rider',
    //         price: 8999,
    //         src: '/img/sneakers/puma-x-aka-boku-future-rider.png'
    //     },
    //     {title: 'Мужские Кроссовки Nike Kyrie Flytrap IV', price: 1299, src: '/img/sneakers/nike-kyrie-flytrap-iv.png'},
    // ]

    return (
        <div className="wrapper clear">

            {cartOpened && <Drawer onClose={() => setCartOpened(false)}/>}
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

                    {items.map((obj, index) =>
                        <Card
                            key={index}
                            title={obj.title}
                            price={obj.price}
                            src={obj.src}
                            onClickAddCard={() => '/i'}
                            onFavorite={() => console.log('Добавили в закладки')}
                        />)}
                </div>
            </div>

        </div>
    );
}

    export default App;
