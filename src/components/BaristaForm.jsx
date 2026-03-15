import { useState , useEffect } from "react";
import RecipeChoices from "./RecipeChoices";
import drinksJson from "./drinks.json"

const BaristaForm = () => {
    
    const [currentDrinks , setCurrentDrinks] = useState("")
    const [trueRecipe , setTrueRecipe] = useState({})

    const [correct_temp, setCheckedTemperature] = useState('');
    const [correct_syrup, setCheckedSyrup] = useState('');
    const [correct_milk, setCheckedMilk] = useState('');
    const [correct_blended, setCheckedBlended] = useState('');
    




    const [inputs , setInputs] = useState({
        'temperature' : '',
        'milk' : '',
        'syrup' : '',
        'blended' : ''
    });
    const ingredients = {
        'temperature' : ['hot' , 'lukewarm' , 'cold'],
        'syrup' : ['mocha' , 'vanilla' , 'toffee' , 'maple' , 'caramel' , 'other' ,'none'],
        'milk' : ['cow' , 'oat' , 'goat' , 'almond' , 'none'],
        'blended' : ['yes' , 'turbo' , 'no']
        
    }

    
        const getNextDrink = () => {
        let randomDrinkIndex = Math.floor(Math.random()* drinksJson.drinks.length)

        setCurrentDrinks(drinksJson.drinks[randomDrinkIndex].name)
        setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingredients)
    }

    useEffect(() => {
        getNextDrink();
    }, []);
        const onCheckAnswer = () => {
        if (trueRecipe.temp === inputs.temperature )
        {setCheckedTemperature('correct')}
        else {setCheckedTemperature('incorrect')}

        if (trueRecipe.syrup === inputs.syrup )
        {setCheckedSyrup('correct')}
        else {setCheckedSyrup('incorrect')}

        if (trueRecipe.milk === inputs.milk )
        {setCheckedMilk('correct')}
        else {setCheckedMilk('incorrect')}

        if (trueRecipe.blended === inputs.blended )
        {setCheckedBlended('correct')}
        else {setCheckedBlended('incorrect')}
    };
     
        const onNewDrink = () => {
        setCheckedTemperature('');
        setCheckedSyrup('');
        setCheckedMilk('');
        setCheckedBlended('');

        setInputs({
            'temperature' : '',
            'milk' : '',
            'syrup' : '',
            'blended' : ''
        })
        getNextDrink();
        
    };
    
    return(
        
        <div className="Form">
            <h2>Hi, I'd like to order a:</h2>
            <div className="drink-container">
                <h2 className="mini-header">{currentDrinks}</h2>
                <button className="button newdrink" onClick={onNewDrink}>🔃</button>
            </div>
            <form className="container">
                <div className="mini-container">
                <h3>Temperature</h3>
                <div className={`answer-space ${correct_temp}`}>
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
                </div>

                <div className="mini-container">
                <h3>Syrup</h3>
                <div className={`answer-space ${correct_syrup}`}>
                    {inputs["syrup"]}
                </div>
                <RecipeChoices 
                handleChange={(e) => setInputs((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.value,
                }))}
                label= 'syrup'
                choices={ingredients['syrup']}
                checked={inputs['syrup']}
                />
                </div>
                
                <div className="mini-container">
                <h3>Milk</h3>
                <div className={`answer-space ${correct_milk}`}>
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
                </div>
                <div className="mini-container">
                <h3>Blended</h3>
                <div className={`answer-space ${correct_blended}`}>
                    {inputs["blended"]}
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
                </div>
                
            </form>
            <button type="button" onClick={onCheckAnswer}>
                Check Answer
            </button>
        </div>
    )
}

export default BaristaForm