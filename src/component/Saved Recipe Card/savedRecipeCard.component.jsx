// import './savedRecipeCard.styles.scss';
import { useContext } from 'react';
import Button from '../Button/button.component';
import { RecipeContext } from '../../context/recipe/recipe.context';

const SavedRecipeCard = ({savedRecipe}) => {
    const {recipe_name, recipe_description} = savedRecipe;
    const { removeFromSavedRecipes } = useContext(RecipeContext);
    const removeSavedRecipe = ()=> removeFromSavedRecipes(savedRecipe);
    
    return (
        <div className="recipe-card-container">
            <div className='recipe-card-content'>
                <h2 className="recipe-card-name">{recipe_name}</h2>
                <p className="recipe-card-description">{recipe_description}</p>
            </div>
            <div className='recipe-card-button-container'>
                <Button onClickHandler={removeSavedRecipe}  type={'redBtn'} content={'Remove'}/>
            </div>
        </div>
    );
}

export default SavedRecipeCard;
