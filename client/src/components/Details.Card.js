import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';

export default function DetailsCard(props) {

    const changeDisplay = () => {
        props.onClick(false);
    }

    return (
        <div id="details">
            <div className="card">
                <div>
                    <h2>Title here</h2>
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
                    <p>Ingredients: <span>Chicken, Salt, Mano</span></p>
                </div>
                <div className="details-macros">
                    <p>Calories: 2000</p>
                    <p>Fat: 20g</p>
                    <p>Carbs: 80g</p>
                    <p>Protein: 200g</p>
                </div>
                <div>
                    <button className="btn btn-round"><FontAwesomeIcon icon={faPlus} /></button>
                </div>
            </div>
        </div>
    )
}
