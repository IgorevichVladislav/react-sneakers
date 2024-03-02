import React from 'react';

const CardImages = () => {

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

    return (
        <div>
            {cardImagesArray.map(image => (
                <img key={image.id} src={image.src} alt={image.alt}/>
            ))}
        </div>
    );
};

export default CardImages;