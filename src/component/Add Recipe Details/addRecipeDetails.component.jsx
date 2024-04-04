import './addRecipeDetails.styles.scss';
import Button from '../Button/button.component';
import { useContext, useState } from 'react';
import { RecipeContext } from '../../context/recipe/recipe.context';
const AddRecipeDetails = () => {
    const { setIsAddRecipePopUpOpen, setRecipe, recipes } = useContext(RecipeContext);
    const [recipeName, setRecipeName] = useState('');
    const [recipeDescription, setRecipeDescription] = useState('');
    const saveRecipe = ()=>{
        const recipeDetails = {
            recipe_name: recipeName,
            recipe_description: recipeDescription
        }
        setRecipe(...recipes, {...recipeDetails});
        setIsAddRecipePopUpOpen(false);
    }
    const saveName = (e)=>{
        e.preventDefault();
        setRecipeName(e.target.value);
    }
    const saveDescription = (e)=>{
        e.preventDefault();
        setRecipeDescription(e.target.value);
    }

    return (
        <div className="recipe-details">
            <input className="recipe-name" onChange={saveName} value={recipeName} type="text" placeholder="Recipe Name"/>
            <textarea className="recipe-description" onChange={saveDescription} value={recipeDescription} type="textarea" placeholder="How to cook ?"/>
            <Button type={'saveRecipe'} onClickHandler={saveRecipe} content={'Post Recipe'}/>
        </div>
    );
}

export default AddRecipeDetails;
