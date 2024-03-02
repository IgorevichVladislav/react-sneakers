import React from 'react';
import {useState} from "react";
import cl from './Card.module.scss';
import Loader from "../UI/Loader/Loader";
import ContentLoader from "react-content-loader";

const Card = ({
                  title,
                  src,
                  price,
                  onFavorite,
                  onClickAddCard,
                  id,
                  favourite,
                  added = false,
                  loading = false
              }) => {

    const [isAdded, setIsAdded] = useState(added);

    const handleClick = () => {
        onClickAddCard({id, title, src, price});
        setIsAdded(!isAdded);
    }

    return (
        <div className={cl.card}>
            {
                loading
                    ?
                    (
                        <Loader />
                    ) : (
                        <>
                            <div className={cl.favorite} onClick={() => onFavorite(id)}>
                                <img src={favourite
                                    ? '/img/icons/heart-liked.svg'
                                    : '/img/icons/heart-unliked.svg'}
                                     alt="Heart Unlike"/>
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
                        </>
                    )}

        </div>

    );
};

export default Card;