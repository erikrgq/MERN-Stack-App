import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as AppLogo} from '../logo.svg';

export default function Nav() {
    return (
        <div>
            <header className="nav">
                <div className="logo-section">
                    <div>
                        <AppLogo />
                    </div>
                    <div className="calorie-info">
                        <p>Goal: <span>0000</span></p>
                        <p>Total: <span>0000</span></p>
                        <p>Remaining: <span>0000</span></p>
                    </div>
                </div>
                <nav>
                    <Link className="btn" to={'/'}>Profile</Link>
                    <Link className="btn" to={'/meals'}>Meals</Link>
                    <Link className="btn" to={'/search'}>Search</Link>
                </nav>
            </header>
        </div>
    )
}
