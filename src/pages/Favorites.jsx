import React, {useContext} from 'react';
import AppContext from "../AppContext";
import Card from "../components/Card/Card";


const Favorites = ({ onAddToCard, onAddToFavorite}) => {

    const {items} = useContext(AppContext);

    return (
        <div className="content">

                    <div className='d-flex justify-between align-center mb-40'>
                        <h1 className='d-flex align-center cu-p' >
                            <img className='mr-20' src="/img/icons/staple-left.svg" alt="Back"/>
                            Мои закладки</h1>
                    </div>


            <div className='cardItem'>
                {items.map((title) => {
                    if (title.favourite) {
                        return (
                            <Card
                                key={title.id}
                                title={title.title}
                                price={title.price}
                                src={title.src}
                                id={title.id}
                                favourite={title.favourite}
                                onFavorite={onAddToFavorite}
                                onClickAddCard={(obj) => onAddToCard(obj)}
                            />
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
        </div>
    );
};

export default Favorites;