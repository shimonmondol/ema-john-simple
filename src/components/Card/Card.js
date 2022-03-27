import React from 'react';
import './Card.css';

const Card = (props) => {
    const { card } = props;

    console.log(card);
    let total = 0;
    let shipping = 0;
    for (const product of card) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;

    return (
        <div className='card'>
            <h4>Order Summary</h4>
            <p>Selected Items: {card.length}</p>
            <p>Total Price:${total}</p>
            <p>Total Shipping:${shipping}</p>
            <p>Tax:${tax}</p>
            <h4>Grand Total:{grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Card;