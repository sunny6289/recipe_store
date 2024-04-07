import { useContext } from "react";
import { RecipeContext } from "../../context/recipe/recipe.context";
import Recipe from "../../component/Recipe/recipe.component";
import './recipesContainer.styles.scss';
const RecipesContainer = () => {
    const {recipes} = useContext(RecipeContext);
    // console.log(recipes);
    return (
        <div className="recipes-container">
            {
                recipes.length ?
                recipes.map((recipe)=>(
                    <Recipe key={recipe.id} recipe={recipe}/>
                )) : <h3 className="no-blogs-text">There are no blogs</h3>
            }
        </div>
    );
}

export default RecipesContainer;
