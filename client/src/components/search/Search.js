import React from 'react';
import SearchCard from './Search.Card';

export default function Search() {
    return (
        <div id="search">
            <main  className="content">
                <section className="card">
                    <div>
                        <p>Search</p>
                    </div>
                    <div className="search">
                        <input placeholder="Search Food" />
                        <button className="btn">Search</button>
                    </div>
                </section>
                <section className="content">
                    <SearchCard />
                    <SearchCard />
                    <SearchCard />
                    <SearchCard />
                    <SearchCard />
                    <SearchCard />
                    <SearchCard />
                    <SearchCard />
                    <SearchCard />
                    <SearchCard />
                </section>
            </main>
        </div>
    )
}
