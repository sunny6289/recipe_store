import { Routes, Route} from 'react-router-dom';
import RecipesCardContainer from '../../component/Recipes Card Container/recipesCardContainer.component';
import Recipe from '../../component/Recipe/recipe.component';
const AllRecipe = () => {
    return (
        <Routes>
            <Route index element={<RecipesCardContainer/>}/>
            <Route path=':recipeId' element={<Recipe/>}/>
        </Routes>
    );
}

export default AllRecipe;
