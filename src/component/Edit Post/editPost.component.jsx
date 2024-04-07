
import { useContext, useState } from "react";
import Button from "../Button/button.component";
import './editPost.styles.scss';
import { RecipeContext } from "../../context/recipe/recipe.context";

const EditPost = ({recipe}) => {
    const {id, recipe_name, recipe_description } = recipe;
    const { setEditPostPopUp, editRecipeFromBlogs } = useContext(RecipeContext);
    const [recipeName, setRecipeName] = useState(recipe_name);
    const [recipeDescription, setRecipeDescription] = useState(recipe_description);
    const editPost = ()=> {
        const updatedRecipe = {
            id: id,
            recipe_name: recipeName,
            recipe_description: recipeDescription
        }
        editRecipeFromBlogs(updatedRecipe);
        setRecipeName("");
        setRecipeDescription("");
        closeEditPostPopUp();
    }
    const closeEditPostPopUp = ()=> setEditPostPopUp(false);
    const updateRecipeName = (e)=>{
        setRecipeName(e.target.value);
    }
    const updateRecipeDescription = (e)=>{
        setRecipeDescription(e.target.value);
    }
    return (
        <div className="edit-post-page">
            <div className="edit-post">
                <input onChange={updateRecipeName} type="text" className="edit-recipe-name" value={recipeName}/>
                <textarea onChange={updateRecipeDescription} className="edit-recipe-description" value={recipeDescription} />
                <div className="edit-button-container">
                    <Button onClickHandler={editPost} type={'yellowBtn'} content={'Edit Post'}/>
                    <Button onClickHandler={closeEditPostPopUp} type={'redBtn'} content={'Cancel'}/>
                </div>
            </div>
        </div>
    );
}

export default EditPost;
