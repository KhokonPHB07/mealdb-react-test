import React from 'react';
import './AddedDish.css';

const AddedDish = ({ setText, count }) => {
    
    return (
        <div className='dish-item'>
            <p>Dish added to cart: {setText ? setText : 'None'} </p>
            <p>Total items in cart: {count}</p>
        </div>
    );
};

export default AddedDish;