import React from 'react';
import Card from "../components/Card/Card";


const Favorites = ({items, onAddToCard, onAddToFavorite}) => {

    return (
        <div className="content">
            <div className='d-flex justify-between align-center mb-40'>
            <h1>Мои закладки</h1>


            </div>
            <div className='cardItem'>
                {items.map((title, index) =>
                    <Card
                        key={index + 1}
                        title={title.title}
                        price={title.price}
                        src={title.src}
                        onFavorite={(obj) => onAddToFavorite(obj)}
                        onClickAddCard={(obj) => onAddToCard(obj)}
                    />)}
            </div>
        </div>
    );
};

export default Favorites;