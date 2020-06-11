    import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import Details from '../Details.Card';

export default function MealsCard(props) {

    const [detailsDisplayProperty, setDetailsDisplayProperty] = useState(false);

    const changeDisplay = () => {
        setDetailsDisplayProperty(false);
    }

    const {foodname, calories, carbs, date, fat, ingredients, protein, servingsmeasurement, servings, _id} = props.props;

    return (
        <div className="cell-table">
            <div>{foodname}</div>
            <div className="remove-cell">Meal 1</div>
            <div className="remove-cell">{servings}</div>
            <div>{fat}</div>
            <div>{carbs}</div>
            <div>{protein}</div>
            <div className="remove-cell">{calories}</div>
            {
                detailsDisplayProperty ? 
                <Details onClick={changeDisplay} food={props.props} list={props.food} propsOrigin={'meals'} /> :
                <div onClick={() => setDetailsDisplayProperty(true)} className="cell-details"><FontAwesomeIcon icon={faEllipsisH} /></div>
            }
        </div>
    )
}
