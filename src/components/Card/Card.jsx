import React from 'react';
import cl from './Card.module.scss';

const Card = ({title, src, price, onFavorite, onClickAddCard}) => {

    const cardImagesArray = [
        {id: 1, src: "/img/sneakers/nike-blazer-mid-suede-green.png", alt: "Nike"},
        {id: 2, src: "/img/sneakers/nike-air-max-270.png", alt: "Nike"},
        {id: 3, src: "/img/sneakers/nike-blazer-mid-suede-cream.png", alt: "Nike"},
        {id: 4, src: "/img/sneakers/jordan-air-jordan-11.png", alt: "Nike"},
        {id: 5, src: "/img/sneakers/nike-kyrie-7.png", alt: "Nike"},
        {id: 6, src: "/img/sneakers/nike-kyrie-flytrap-iv.png", alt: "Nike"},
        {id: 7, src: "/img/sneakers/nike-lebron-xviii.png", alt: "Nike"},
        {id: 8, src: "/img/sneakers/nike-lebron-xviii-low.png", alt: "Nike"},
        {id: 9, src: "/img/sneakers/puma-x-aka-boku-future-rider.png", alt: "Nike"},
        {id: 10, src: "/img/sneakers/under-armour-curry 8.png", alt: "Nike"},


    ];

    const [isAdded, setIsAdded] = React.useState(false);
    const handleClick = () => {
        onClickAddCard({title, src, price});
        setIsAdded(!isAdded);
    }

    React.useEffect(() => {
console.log('gfgfgf')
        },
        [handleClick])



    return (
        <div>
            <div className={cl.card}>
                <div className={cl.favorite} onClick={onFavorite}>
                    <img src='/img/icons/heart-unliked.svg' alt="Heart Unlike"/>
                </div>
                <img width={133} height={112} src={src} alt="Nike"/>
                <p>{title}</p>
                <div className='d-flex justify-between align-center'>
                    <div className='d-flex flex-column'>
                        <span className='text-uppercase'>Цена:</span>

                        <strong>{price} руб.</strong>
                    </div>
                        <img className={cl.plus} onClick={handleClick}
                             src={isAdded ? '/img/icons/btn-cheked.svg' : '/img/icons/btn-plus.svg'}
                             alt="Plus"/>
                </div>
            </div>
        </div>
    );
};

export default Card;