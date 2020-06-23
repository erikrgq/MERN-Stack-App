import React, {useState, useEffect} from 'react';

export default function Profile() {

    const [calorieGoal, setCalorieGoal] = useState();
    const [username, setUsername] = useState('');

    const saveUser = ()  => {

        const data = {
            user: username,
            calories: 0,
            caloriegoal: calorieGoal

        }

        fetch('http://localhost:5000/user/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/json'
                },
                body: JSON.stringify(data)
        })
            .then(res => res.json(res))
            .catch(err => console.log(err))

    }

    const setUserState = (e) => {
        let user = e.target.value;
        setUsername(user);
    }

    const setCalorieState = (e) => {
        e.preventDefault();
        let calories = parseInt(e.target.value);
        setCalorieGoal(calories);
    }

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
                            <input placeholder="Enter Calorie Goal" type="number" onChange={setCalorieState} />
                        </div>
                        <div>
                            <p>Username</p>
                            <input placeholder="Enter Username" type="text" onChange={setUserState} />
                        </div>
                        <div>
                            <button className="btn" onClick={saveUser}>Submit</button>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}
