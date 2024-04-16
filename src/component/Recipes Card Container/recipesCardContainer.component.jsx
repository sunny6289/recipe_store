import { useContext } from "react";
import { RecipeContext } from "../../context/recipe/recipe.context";
import RecipeCard from "../Recipe Card/recipeCard.component";
import './recipesCardContainer.styles.scss';
const RecipesCardContainer = () => {
    const {recipes} = useContext(RecipeContext);
    
    return (
        <div className="recipes-container">
            {
                recipes.length ?
                recipes.map((recipe)=>(
                    <RecipeCard key={recipe.id} recipe={recipe}/>
                )) : <h3 className="no-blogs-text">There are no blogs</h3>
            }
        </div>
    );
}

export default RecipesCardContainer;
