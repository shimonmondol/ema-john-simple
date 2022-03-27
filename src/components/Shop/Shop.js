import React, { useEffect, useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
import Product from '../Product/Product';
import Card from '../Card/Card';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [card, setCard] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToCard = (product) => {
        console.log(product);
        // card.push(product);
        const newCard = [...card, product];
        setCard(newCard);
        addToDb(product.id);
    }

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCard={handleAddToCard}
                    ></Product>)
                }
            </div>
            <div className='card-container'>
                <Card card={card}></Card>
            </div>
        </div>
    );
};

export default Shop;