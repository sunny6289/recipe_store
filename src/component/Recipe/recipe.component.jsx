import { useParams } from 'react-router-dom';
import './recipe.styles.scss';
import { useContext, useEffect, useState } from 'react';
import { RecipeContext } from '../../context/recipe/recipe.context';

const Recipe = () => {
    const { recipeId } = useParams();
    const { recipes } = useContext(RecipeContext);
    const [recipeName, setRecipeName] = useState("");
    const [recipeDescription, setRecipeDescription] = useState("");
    console.log(recipeId);
    useEffect(()=>{
        const recipeToDisplay = recipes.filter((recipe)=> recipe.id === Number(recipeId));
        console.log(recipeToDisplay);
        console.log(recipes);
        setRecipeName(recipeToDisplay[0].recipe_name);
        setRecipeDescription(recipeToDisplay[0].recipe_description);
    },[]);

    return (
        <div className="recipe-container">
            <div className="recipe-heading">
                <div className="recipe-img"></div>
                <h2 className="recipe-name">{recipeName}</h2>
            </div>
            <p className="recipe-description">{recipeDescription}</p>
        </div>
    );
}

export default Recipe;
