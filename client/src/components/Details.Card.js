import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlus, faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

export default function DetailsCard(props) {

    const [servingsNumber, setServingsNumber] = useState(1);
    const [foodItemId, setFoodItemId] = useState(props.food._id);
    const [foodObject, setFoodObject] = useState({});

    useEffect(function setFoodState () {

        const food = {};

        const getMacrosWithId = (id) => {

            let value = 0;

            props.food.foodNutrients.forEach(cur => {

                if (cur.nutrientId === id) {
                    value = cur.value;
                }

            });

            return value;

        }

        if (props.propsOrigin === 'search') {
            food.foodname = props.food.description;
            food.calories = getMacrosWithId(1008);
            food.carbs = getMacrosWithId(1005);
            food.fat = getMacrosWithId(1004);
            food.protein = getMacrosWithId(1003);
            food.ingredients = props.food.ingredients || '';
            food.fdcId = props.food.fdcId;
            food.servings = 1;
        }  else if (props.propsOrigin === 'meals') {
            food.foodname = props.food.foodname;
            food.calories = props.food.calories;
            food.carbs = props.food.carbs;
            food.fat = props.food.fat;
            food.protein = props.food.protein;
            food.ingredients =props.food.ingredients || '';
            food._id = props.food._id;
            food.servings = props.food.servings;
        }

        setServingsNumber(props.food.servings);
        setFoodObject(food);

    }, [props.food])


    const deleteFoodItem = async () => {

        const data = {
            id: props.userId,
            food: foodItemId
        }

        const updatedFoodsList = props.list.foodsList.filter((cur) => {
            if (cur._id !== foodItemId) {
                return cur;
            }
        });

        await fetch('http://localhost:5000/food/delete/', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json(res))
            .then(props.list.setFoodsList(updatedFoodsList))
            .catch(err => console.log(err));
        
    }

    const updateFooditem = async () => {

        const data = {
            id: foodItemId,
            servings: servingsNumber
        }

        const updatedFoodsList = props.list.foodsList.filter((cur) => {
            if (cur._id === foodItemId) {
                cur.servings = servingsNumber;
            }
            return cur;
        });

        await fetch('http://localhost:5000/food/update/', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json(res))
            .then(props.list.setFoodsList(updatedFoodsList))
            .catch(err => console.log(err));
    }

    const changeDisplay = () => {
        props.onClick(false);
    }

    /*const getIngredients = (arr) => {

        if(props.propsOrigin === 'search') {
            arr = arr.replace(/[\])}[{(]/g, '').split(/\W/g);
            console.log(arr)
        }

        if(arr.length > 6) {
            arr = arr.slice(0, 6);
        }

        let foodsListWithCommas = [];

        for (let i = 0; i < arr.length; i++) {

            if(arr[i] !== arr[arr.length - 1]) {
                foodsListWithCommas.push(arr[i] + ', ');
            } else if(arr[i] === arr[5]) {
                foodsListWithCommas.push(arr[i] + '...');
            } else {
                foodsListWithCommas.push(arr[i]);
            }
            
        }

        return foodsListWithCommas;

    }*/
    
    const changeFoodServings = (e) => {
        
        e.preventDefault();

        let serving = e.target.value;

        setServingsNumber(serving);

    }

    const updateMacros = type => {
        return foodObject[type];
    }

    console.log(foodObject.calories);

    return (
        <div id="details">
            <div className="card">
                <div>
                    <h2>{foodObject.foodname}</h2>
                    <button onClick={() => changeDisplay()} className="btn btn-round"><FontAwesomeIcon icon={faTimes} /></button>
                </div>
                <div>
                    <label>Servings: </label>
                    <select className="btn" value={servingsNumber} onChange={changeFoodServings}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
                <div>
                <p>Ingredients: <span>{foodObject.ingredients}</span></p>
                </div>
                <div className="details-macros">
                    <p>Calories: {updateMacros('calories') * servingsNumber}</p>
                    <p>Fat: {foodObject.fat * servingsNumber}g</p>
                    <p>Carbs: {foodObject.carbs *servingsNumber}g</p>
                    <p>Protein: {foodObject.protein * servingsNumber}g</p>
                </div>
                <div>
                    {
                        props.propsOrigin === 'meals' ? 
                        <div>
                        <button className="btn btn-round" onClick={deleteFoodItem}><FontAwesomeIcon icon={faTrashAlt} /></button>
                        <button className="btn btn-round" onClick={updateFooditem}><FontAwesomeIcon icon={faEdit} /></button>
                        </div> : 
                        <button className="btn btn-round"><FontAwesomeIcon icon={faPlus} /></button>
                    }
                </div>
            </div>
        </div>
    )
}
