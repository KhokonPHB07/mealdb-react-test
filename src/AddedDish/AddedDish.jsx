import React from 'react';
import './AddedDish.css';

const AddedDish = (props) => {
    const { setText, count } = props;
    return (
        <div className='dish-item'>
            <p>Dish added to cart: {setText || 'None'}</p>
            <p>Total items in cart: {count}</p>
        </div>
    );
};

export default AddedDish;