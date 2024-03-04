import React from 'react';
import cl from './Info.module.scss'

const Info = ({title, description, img, children}) => {
    return (
        <div className={cl.cartEmpty}>
            <img src={img} alt="Cart"/>
            <h2>{title}</h2>
            <p>{description}</p>
            {children}
        </div>
    );
};

export default Info;