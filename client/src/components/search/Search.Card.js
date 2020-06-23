import React, { useState } from 'react';
import DetailsCard from '../Details.Card';

export default function SearchCard(props) {

    const [detailsDisplayProperty, setDetailsDisplayProperty] = useState(false);

    const changeDisplay = () => {
        setDetailsDisplayProperty(false);
    }

    return (
        <div className="card card-search">
            <div>
                <p>{props.food.description}</p>
            </div>
            <div>
                {detailsDisplayProperty?
                <DetailsCard onClick={changeDisplay} food={props.food} propsOrigin={'search'} /> :
                <button className="btn" onClick={() => setDetailsDisplayProperty(true)}>View Details</button>
                }
            </div>
        </div>
    )
}
