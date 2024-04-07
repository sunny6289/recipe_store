
import { useContext } from 'react';
import Button from '../Button/button.component';
import './recipe.styles.scss';
import { RecipeContext } from '../../context/recipe/recipe.context';
import EditPost from '../Edit Post/editPost.component';
const Recipe = ({recipe}) => {
    const { recipe_name, recipe_description} = recipe;
    const { deleteRecipeFromBlogs, editPostPopUp, setEditPostPopUp, addToSavedRecipes } = useContext(RecipeContext);
    const deleteRecipe = ()=> deleteRecipeFromBlogs(recipe);
    const openEditPostPopUp = ()=> setEditPostPopUp(true);
    const saveRecipe = ()=> addToSavedRecipes(recipe);
    return (
        
            editPostPopUp ? <EditPost recipe={recipe}/> :
        <div className="recipe-container">
            <div className='recipe-content'>
                <h2 className="recipe-name">{recipe_name}</h2>
                <p className="recipe-description">{recipe_description}</p>
            </div>
            <div className='recipe-button-container'>
                <Button onClickHandler={saveRecipe} type={'greenBtn'} content={'Save Post'}/>
                <Button onClickHandler={deleteRecipe} type={'redBtn'} content={'Delete Post'}/>
                <Button onClickHandler={openEditPostPopUp} type={'yellowBtn'} content={'Edit Post'}/>
            </div>
        </div>
        
        
    );
}

export default Recipe;
