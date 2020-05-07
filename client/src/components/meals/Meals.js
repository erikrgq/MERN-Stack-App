import React from 'react';
import MealCard from './Meals.Card';

export default function Meals() {
    return (
        <div id="meals">
            <main className="content">
                <section className="card">
                    <div>
                        <p>Choose User</p>
                    </div>
                    <div>
                        <select className="btn"
                        name="Enter Username">
                            <option value="Erik">Erik</option>
                            <option value="Carmen">Carmen</option>
                        </select>
                    </div>
                </section>
                <section className="meal-table card">
                   <header className="header-table">
                       <div>Food</div>
                       <div className="remove-cell">Meal</div>
                       <div className="remove-cell">Servings</div>
                       <div>Fat (g)</div>
                       <div>Carbs (g)</div>
                       <div>Protein (g)</div>
                       <div className="remove-cell">Calories</div>
                       <div>Edit</div>
                   </header>
                   <MealCard />
                   <MealCard />
                   <MealCard />
                   <MealCard />
                   <MealCard />
                   <MealCard />
                   <MealCard />
                   <MealCard />
                   <footer class="footer-table">
                        <div></div>
                        <div className="remove-cell"></div>
                        <div className="remove-cell"></div>
                        <div>23</div>
                        <div>45</div>
                        <div>10</div>
                        <div className="remove-cell">1000</div>
                        <div></div>
                    </footer>
                </section>
            </main>
        </div>
    )
}
