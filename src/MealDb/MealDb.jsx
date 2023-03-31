import React, { useEffect, useState } from 'react';
import AddedDish from '../AddedDish/AddedDish';
import Foodcard from '../FoodCard/Foodcard';
import './MealDb.css'

const MealDb = () => {
    const [food,setFood]=useState([]);

    useEffect( ()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res=>res.json())
        .then(data=>setFood(data.meals));
        
    },[])

    const setDishItem=(props)=>{

        console.log(props);
    }

    return (
        <div className='food-card'>
            <div>
                {
                    food.map(singleFood=><Foodcard singleFood={singleFood} setDishItem={setDishItem} key={singleFood.idMeal}></Foodcard>)
                }
                
            </div>
            <div>
                <AddedDish></AddedDish>
            </div>
        </div>
    );
};

export default MealDb;