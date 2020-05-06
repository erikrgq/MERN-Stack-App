import React from 'react';
import {Link} from 'react-router-dom';

export default function Nav() {
    return (
        <div>
            <header className="nav">
                <div className="logo-section">
                    <div>
                        <h1>Get Your Nutrients</h1>
                    </div>
                    <div className="calorie-info">
                        <p>Goal: <span>0000</span></p>
                        <p>Total: <span>0</span></p>
                        <p>Remaining: <span>0</span></p>
                    </div>
                </div>
                <nav>
                    <Link to={'/'}>Profile</Link>
                    <Link to={'/'}>Meals</Link>
                    <Link to={'/'}>Search</Link>
                </nav>
            </header>
        </div>
    )
}
