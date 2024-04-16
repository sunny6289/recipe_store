import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Button from "../Button/button.component";
import './editPost.styles.scss';
import { RecipeContext } from "../../context/recipe/recipe.context";

const EditPost = () => { 
    const { editRecipeFromBlogs, editRecipe, setEditRecipePost } = useContext(RecipeContext);
    const {id, recipe_name, recipe_description } = editRecipe;
    const [recipeName, setRecipeName] = useState(recipe_name);
    const [recipeDescription, setRecipeDescription] = useState(recipe_description);
    const navigate = useNavigate();
    const editPost = ()=> {
        const updatedRecipe = {
            id: id,
            recipe_name: recipeName,
            recipe_description: recipeDescription
        }
        editRecipeFromBlogs(updatedRecipe);
        setRecipeName("");
        setRecipeDescription("");
        setEditRecipePost({});
        navigate('/all-recipe');
    }

    const editCancel = ()=>{
        setRecipeName("");
        setRecipeDescription("");
        setEditRecipePost({});
        navigate('/all-recipe');
    }
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
                    <Button onClickHandler={editCancel} type={'redBtn'} content={'Cancel'}/>
                </div>
            </div>
        </div>
    );
}

export default EditPost;
