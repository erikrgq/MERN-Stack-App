import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import Details from '../Details.Card';

export default function MealsCard() {

    const [detailsDisplayProperty, setDetailsDisplayProperty] = useState(false);

    const changeDisplay = () => {
        setDetailsDisplayProperty(false);
    }
    
    return (
        <div className="cell-table">
            <div>Chicken</div>
            <div className="remove-cell">Meal 1</div>
            <div className="remove-cell">1</div>
            <div>09</div>
            <div>23</div>
            <div>45</div>
            <div className="remove-cell">1000</div>
            {
                detailsDisplayProperty ? 
                <Details onClick={changeDisplay} food={{foodtitle: 'chicken'}} propsOrigin={'meals'} /> :
                <div onClick={() => setDetailsDisplayProperty(true)} className="cell-details"><FontAwesomeIcon icon={faEllipsisH} /></div>
            }
        </div>
    )
}
