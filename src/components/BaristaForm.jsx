import { useState } from "react"
import RecipeChoices from "./RecipeChoices";
import drinksJson from "./drink.json"

const BaristaForm = () => {
    const [currentDrinks , setCurrentDrinks] = useState[""]
    const [trueRecipe , setTrueRecipe] = useState[{}]
    
    const getNextDrink = () => {
        let randomDrinkIndex = Math.floor(Math.random()* drinksJson.length)
        setCurrentDrinks(drinksJson.drinks[randomDrinkIndex].name)
        setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingredients)
    }
    const onCheckAnswer = () => {
        return
    };
     
    const onNewDrink = () => {
        setChecked
        setInputs({
            'temperature' : '',
            'milk' : '',
            'syrup' : '',
            'blended' : ''
        })
        getNextDrink();
    };

    const [inputs , setInputs] = useState({
        'temperature' : '',
        'milk' : '',
        'syrup' : '',
        'blended' : ''
    });
    const ingredients = {
        'temperature' : ['hot' , 'lukewarm' , 'cold'],
        'syrup' : ['mocha' , 'vanilla' , 'toffee' , 'maple'],
        'milk' : ['cow' , 'oat' , 'goat' , 'almond' , 'none'],
        'blended' : ['yes' , 'turbo' , 'no']
    }
    return(
        <div className="Form">
            <h2>Hi, I'd like to order a:</h2>
            <div className="drink-container">
                <h2 className="mini-header">{currentDrinks}</h2>
                <button className="button newdrink" onClick={onNewDrink}>🔃</button>
            </div>
            <form action="">
                <h3>Temperature</h3>
                <div className="answer-space">
                    {inputs["temperature"]}
                </div>
                <RecipeChoices 
                handleChange={(e) => setInputs((prevState) =>({
                    ...prevState,
                    [e.target.name]: e.target.value,
                }))} 
                label = 'temperature'
                choices = {ingredients["temperature"]}
                checked = {inputs["temperature"]}
                />

                <h3>Milk</h3>
                <div className="answer-space" >
                    {inputs["milk"]}
                </div>
                <RecipeChoices 
                handleChange={(e) => setInputs((prevState) =>({
                    ...prevState,
                    [e.target.name]: e.target.value
                }))}
                label = 'milk'
                choices={ingredients["milk"]}
                checked={inputs["milk"]}
                 />


                <h3>Syrup</h3>
                <div className="answer-space" >
                    {inputs["syrup"]}
                </div>
                <RecipeChoices t
                handleChange={(e) => setInputs((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.value,
                }))}
                label= 'syrup'
                choices={ingredients['syrup']}
                checked={inputs['syrup']}
                />

                <h3>Blended</h3>
                <div className="answer-space">
                    {inputs['blended']}
                </div>
                <RecipeChoices
                handleChange={(e) => setInputs((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.value
                }))}
                label={'blended'}
                choices={ingredients['blended']}
                checked={inputs['blended']}
                />
            </form>
            <button type="submit" onClick={onCheckAnswer}>
                Check Answer
            </button>
            <button className="button" type="submit" onClick={onNewDrink}>
                New Drink
            </button>
        </div>
    )
}

export default BaristaForm