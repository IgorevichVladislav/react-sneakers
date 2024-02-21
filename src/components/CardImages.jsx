import React from 'react';

const CardImages = ({cardImagesArray}) => {

    return (
        <div>
            {cardImagesArray.map(image => (
                <img key={image.id} src={image.src} alt={image.alt}/>
            ))}
        </div>
    );
};

export default CardImages;