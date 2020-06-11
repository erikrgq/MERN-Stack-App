import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlus, faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

export default function DetailsCard(props) {

    const {calories, carbs, date, fat, ingredients, protein, servingsmeasurement, servings, _id} = props.food;

    const [servingsNumber, setServingsNumber] = useState();
    const [foodItemId, setFoodItemId] = useState(_id)

    const deleteFoodItem = async () => {

        const data = {
            id: '5ec35af3d41afc474de92b1f',
            food: foodItemId
        }

        const updatedFoodsList = props.list.foodsList.filter((cur) => {
            if (cur._id !== foodItemId) {
                return cur;
            }
        });

        const res = await fetch('http://localhost:5000/food/delete/', {
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

    const changeDisplay = () => {
        props.onClick(false);
    }

    const getIngredients = (arr) => {

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

    }
    console.log(props);
    return (
        <div id="details">
            <div className="card">
                <div>
                    <h2>{props.food.foodtitle}</h2>
                    <button onClick={() => changeDisplay()} className="btn btn-round"><FontAwesomeIcon icon={faTimes} /></button>
                </div>
                <div>
                    <label>Servings: </label>
                    <select className="btn">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                    </select>
                </div>
                <div>
                <p>Ingredients: <span>{getIngredients(ingredients)}</span></p>
                </div>
                <div className="details-macros">
                    <p>Calories: {calories}</p>
                    <p>Fat: {fat}g</p>
                    <p>Carbs: {carbs}g</p>
                    <p>Protein: {protein}g</p>
                </div>
                <div>
                    {
                        props.propsOrigin === 'meals' ? 
                        <div>
                        <button className="btn btn-round" onClick={deleteFoodItem}><FontAwesomeIcon icon={faTrashAlt} /></button>
                        <button className="btn btn-round"><FontAwesomeIcon icon={faEdit} /></button>
                        </div> : 
                        <button className="btn btn-round"><FontAwesomeIcon icon={faPlus} /></button>
                    }
                </div>
            </div>
        </div>
    )
}
