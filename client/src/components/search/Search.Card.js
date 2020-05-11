import React, { useState } from 'react';
import DetailsCard from '../Details.Card';

export default function SearchCard() {

    const [detailsDisplayProperty, setDetailsDisplayProperty] = useState(false);

    const changeDisplay = () => {
        setDetailsDisplayProperty(false);
    }

    return (
        <div className="card card-search">
            <div>
                <p>Chicken</p>
            </div>
            <div>
                {detailsDisplayProperty?
                <DetailsCard onClick={changeDisplay} food={{foodtitle: 'pizza'}} propsOrigin={'search'} /> :
                <button className="btn" onClick={() => setDetailsDisplayProperty(true)}>View Details</button>
                }
            </div>
        </div>
    )
}
