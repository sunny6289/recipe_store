import { useContext } from "react";
import Button from "../Button/button.component";

import './addRecipe.styles.scss';
import { RecipeContext } from "../../context/recipe/recipe.context";
import AddRecipeDetails from "../Add Recipe Details/addRecipeDetails.component";
const AddRecipe = () => {
    const {isAddRecipePopUpOpen,setIsAddRecipePopUpOpen} = useContext(RecipeContext)
    const openAddRecipePopUp = ()=>{
        setIsAddRecipePopUpOpen(true);
    }
    return (
        <div className="add-recipe-container">
            {
                isAddRecipePopUpOpen ? <AddRecipeDetails/> : <Button onClickHandler={openAddRecipePopUp} type={'addRecipe'} content={"+"}/>
            }
            
        </div>
    );
}

export default AddRecipe
;
