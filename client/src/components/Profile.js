import React from 'react'

export default function Profile() {
    return (
        <div id="profile">
            <main>
                <div className="profile-user">
                    <p>Welcome Back <span>Username</span> </p>
                </div>
                <div className="profile-content">
                    <div>
                        <p>User Settings</p>
                    </div>
                    <section>
                        <div>
                            <p>Calorie Goal</p>
                        </div>
                        <div>
                            <input placeholder="Enter Calorie Goal" />
                            <button>Enter</button>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}
