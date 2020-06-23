import React, {useEffect, useState} from 'react';
import SearchCard from './Search.Card';

export default function Search() {

    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const getSearchResults = () => {

        if(searchQuery) {

            fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=DHceyyoJMX48paCbIw9wJfvy7JWNDUacApePfS4I&query=${searchQuery}`)
                .then(res => res.json(res))
                .then(res => setSearchResults(res.foods))
                .catch(err => console.log(err)); 
        }

    }

    const setSearchState = (e) => {
        
        e.preventDefault()
        let query = e.target.value;
        setSearchQuery(query);

    }

    return (
        <div id="search">
            <main  className="content">
                <section className="card">
                    <div className="search-title">
                        <p>Search</p>
                    </div>
                    <div className="search">
                        <input placeholder="Search Food" type="text" onChange={setSearchState} />
                        <button className="btn" onClick={getSearchResults} >Search</button>
                    </div>
                </section>
                <section className="content">

                    {
                        searchResults.length > 0 ?
                        searchResults.map((cur) => (

                            <SearchCard key={cur.fdcId} food={cur} />

                        ))
                        :
                        ''
                    }

                </section>
            </main>
        </div>
    )
}
