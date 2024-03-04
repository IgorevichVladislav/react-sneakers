import React, {useContext, useEffect} from 'react';
import {useState} from "react";
import cl from './Card.module.scss';
import Loader from "../UI/Loader/Loader";
import AppContext from "../../AppContext";
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

    const {isItemAdded} = useContext(AppContext);
    const [isAdded, setIsAdded] = useState(added);

    useEffect(() => {

    }, [isAdded])

    const handleClick = () => {
        onClickAddCard({id, title, src, price});
        setIsAdded(!isAdded);
    }

    return (
        <div className={cl.card}>
            {
                loading
                    ?
                    (<Loader />
                    // (<ContentLoader
                    //         speed={2}
                    //         width={150}
                    //         height={265}
                    //         viewBox="0 0 150 265"
                    //         backgroundColor="#ffe0e0"
                    //         foregroundColor="#deee91"
                    //
                    //     >
                    //         <rect x="0" y="170" rx="10" ry="10" width="150" height="15"/>
                    //         <rect x="0" y="200" rx="10" ry="10" width="100" height="15"/>
                    //         <rect x="0" y="230" rx="10" ry="10" width="80" height="25"/>
                    //         <rect x="118" y="230" rx="10" ry="10" width="32" height="25"/>
                    //         <rect x="0" y="0" rx="10" ry="10" width="150" height="155"/>
                    //     </ContentLoader>
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
                    )
            }

        </div>

    );
};

export default Card;