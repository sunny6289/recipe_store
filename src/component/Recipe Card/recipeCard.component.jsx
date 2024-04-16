
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Button from '../Button/button.component';
import './recipeCard.styles.scss';
import { RecipeContext } from '../../context/recipe/recipe.context';
const RecipeCard = ({recipe}) => {
    const {id, recipe_name, recipe_description} = recipe;
    const { deleteRecipeFromBlogs, addToSavedRecipes, setEditRecipePost } = useContext(RecipeContext);
    const deleteRecipe = ()=> deleteRecipeFromBlogs(recipe);
    const saveRecipe = ()=> addToSavedRecipes(recipe);
    const navigate = useNavigate();
    const goToEditPage = ()=>{
        setEditRecipePost(recipe);
        navigate("/edit-page");
    }

    return ( 
        <div className="recipe-card-container">
            <Link className='recipe-card-content' to={`${id}`}>
                <h2 className="recipe-card-name">{recipe_name}</h2>
                <p className="recipe-card-description">{recipe_description}</p>
            </Link>
            <div className='recipe-card-button-container'>
                <Button onClickHandler={saveRecipe} type={'greenBtn'} content={'Save Post'}/>
                <Button onClickHandler={deleteRecipe} type={'redBtn'} content={'Delete Post'}/>
                <Button onClickHandler={goToEditPage} type={'yellowBtn'} content={'Edit Post'}/>
            </div>
        </div>
        
        
    );
}

export default RecipeCard;
