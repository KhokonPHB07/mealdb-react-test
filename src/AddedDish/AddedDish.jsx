import React from 'react';
import './AddedDish.css';

const AddedDish = ({ setText, count }) => {
    
    return (
        <div className='dish-item'>
            <p>Total items in cart: {count}</p>
            <div className='cart-item'>
            {setText.map((text) => (<p>{text}</p>))}
            {/* <p>{setText ? setText : 'None'} </p> */}
            </div>
        </div>
    );
};

export default AddedDish;