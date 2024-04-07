import './addRecipeDetails.styles.scss';
import Button from '../Button/button.component';
import { useContext, useState } from 'react';
import { RecipeContext } from '../../context/recipe/recipe.context';
const AddRecipeDetails = () => {
    const { setIsAddRecipePopUpOpen, addRecipeToBlogs } = useContext(RecipeContext);
    const [recipeName, setRecipeName] = useState('');
    const [recipeDescription, setRecipeDescription] = useState('');
    const saveName = (e)=>{
        e.preventDefault();
        setRecipeName(e.target.value);
    }
    const saveDescription = (e)=>{
        e.preventDefault();
        setRecipeDescription(e.target.value);
    }
    const saveRecipe = ()=>{
        if(recipeDescription && recipeName){
            const newRecipe = {
                id: Date.now(),
                recipe_name: recipeName,
                recipe_description: recipeDescription
            }
            addRecipeToBlogs(newRecipe);
            setIsAddRecipePopUpOpen(false);
            setRecipeName('');
            setRecipeDescription('');
        }else{
            alert("All fields are required");
        }
    }
    const closeAddDetailsPopUp = ()=>{
        setIsAddRecipePopUpOpen(false);
    }
    return (
        <div className="recipe-details">
            <input className="recipe-name" onChange={saveName} value={recipeName} type="text" placeholder="Recipe Name"/>
            <textarea className="recipe-description" onChange={saveDescription} value={recipeDescription} type="textarea" placeholder="How to cook ?"/>
            <div className='button-container'>
                <Button type={'greenBtn'} onClickHandler={saveRecipe} content={'Post Recipe'}/>
                <Button type={'redBtn'} onClickHandler={closeAddDetailsPopUp} content={'Cancel'}/>
            </div>
        </div>
    );
}

export default AddRecipeDetails;
