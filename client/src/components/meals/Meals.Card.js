import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

export default function MealsCard() {
    return (
        <div className="cell-table">
                       <div>Chicken</div>
                       <div className="remove-cell">Meal 1</div>
                       <div className="remove-cell">1</div>
                       <div>09</div>
                       <div>23</div>
                       <div>45</div>
                       <div className="remove-cell">1000</div>
                       <div className="cell-details"><FontAwesomeIcon icon={faEllipsisH} /></div>
                   </div>
    )
}
