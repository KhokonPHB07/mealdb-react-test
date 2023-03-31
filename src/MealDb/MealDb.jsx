import React, { useEffect, useState } from 'react';
import AddedDish from '../AddedDish/AddedDish';
import Foodcard from '../FoodCard/Foodcard';
import './MealDb.css'

const MealDb = () => {
    const [food,setFood]=useState([]);
    const [text,setText]=useState([]);
    const [count,setCount]=useState(0);

    useEffect( ()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res=>res.json())
        .then(data=>setFood(data.meals));
        console.log(text);
        
    },[])
        
    const setDishItem=(props)=>{
         setCount(count+1);
        const clickedText=props;
        if (text.includes(clickedText)) {
            return;
          }
        setText(prevText => prevText.concat(clickedText));

    }

    return (
        <div className='food-card'>
            <div>
                {
                    food.map(singleFood=><Foodcard singleFood={singleFood} setDishItem={setDishItem} key={singleFood.idMeal}></Foodcard>)
                }
                
            </div>
            <div>
                <AddedDish setText={text} count={count}></AddedDish>
            </div>
        </div>
    );
};

export default MealDb;