import React from 'react';

export default function Profile() {
    return (
        <div id="profile">
            <main>
                <div className="profile-user">
                    <p>Welcome Please Make an Account</p>
                </div>
                <div className="content">
                    <div>
                        <p>User Settings</p>
                    </div>
                    <section className="card">
                        <div>
                            <p>Calorie Goal</p>
                            <input placeholder="Enter Calorie Goal" />
                        </div>
                        <div>
                            <p>Username</p>
                            <input placeholder="Enter Username" />
                        </div>
                        <div>
                            <button className="btn">Submit</button>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}
