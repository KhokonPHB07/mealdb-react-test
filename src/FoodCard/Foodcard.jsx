import React from 'react';
import './FoodCard.css'

const Foodcard = (props) => {
    console.log(props);
    const{strMealThumb,strMeal,strInstructions}=props.singleFood;
    const setDishItem=props.setDishItem;
    return (
        <div className='food-meal'>
            <img src={strMealThumb} alt="" />
            <h3>{strMeal}</h3>
            <p>{strInstructions}</p>
            <button onClick={()=>setDishItem(strMeal)}>Add Meal</button>
        </div>

    );
};

export default Foodcard;