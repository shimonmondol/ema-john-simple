import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    const { product, handleAddToCard } = props;
    const { name, img, seller, price, ratings } = product;

    return (
        <div className='product'>
            <img src={img} alt=" "></img>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Seller: {seller}</small></p>
                <p><samll>Ratings : {ratings} stars</samll></p>
            </div>
            <button onClick={() => handleAddToCard(product)} className='btn-card'>
                <p className='btn-text'>Add to Card</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;