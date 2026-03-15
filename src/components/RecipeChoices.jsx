

const RecipeChoices = ({handleChange , label , choices , checked }) => {
    return(
        <div className="radio-buttons">
            {choices && choices.map((choice) => (
                <li key={choice}
                    className={`choice ${checked == choice ? 'selected' : ''}`}
                    onClick={() => handleChange({target: {name: label, value: choice}})}
                    >
                    <input 
                    id={choice}
                    value={choice}
                    name={label}
                    onChange={handleChange}
                    checked={checked == choice}
                    />
                    {choice}
                </li>
            ) )}
        </div>
    )
}

export default RecipeChoices