import { createContext, useState } from "react";


export const RecipeContext = createContext({
    isAddRecipePopUpOpen : false,
    setIsAddRecipePopUpOpen : ()=>{},
    recipes: {},
    setRecipe: ()=>{},
    savedRecipes: {},
    editRecipe:{},
    setEditRecipePost: ()=>{}
})
const recipeToAddInBlogs = (recipes, recipeToAdd)=>{
    return [...recipes, {...recipeToAdd}];
}
const recipeToDeleteFromBlogs = (recipes, recipeToDelete)=>{
    const newRecipes = recipes.filter((recipe)=> recipe.id !== recipeToDelete.id);
    return newRecipes;
}
const recipeToEditFromBlogs = (recipes, recipeToEdit, savedRecipes, addToSavedRecipes) =>{
    const exitInSavedRecipe = savedRecipes.find((savedRecipe)=> savedRecipe.id === recipeToEdit.id);
    if(exitInSavedRecipe){
        addToSavedRecipes(recipeToEdit);
    }
    const newRecipesWithoutEdit = recipes.filter((recipe)=> recipe.id !== recipeToEdit.id);
    return [...newRecipesWithoutEdit, {...recipeToEdit}];
}

export const RecipeProvider = ({children})=>{
    const [isAddRecipePopUpOpen, setIsAddRecipePopUpOpen ] = useState(false)
    const [recipes, setRecipe ] = useState([])
    const [savedRecipes, setSavedRecipes] = useState([])
    const [editRecipe, setEditRecipe] = useState({})

    // console.log(recipes);
    const setEditRecipePost = (recipeToEdit)=> setEditRecipe({...recipeToEdit});
    const removeFromSavedRecipes = (recipeToRemoveFromSaved)=>{
        const newSavedRecipes = savedRecipes.filter((savedRecipe)=> savedRecipe.id!==recipeToRemoveFromSaved.id);
        setSavedRecipes(newSavedRecipes);
    }
    const addToSavedRecipes = (recipeToSave)=>{
        const IsPreviouslySaved = savedRecipes.find((savedRecipe)=> savedRecipe.id === recipeToSave.id);
        if(IsPreviouslySaved){
            IsPreviouslySaved.recipe_name === recipeToSave.recipe_name && IsPreviouslySaved.recipe_description === recipeToSave.recipe_description ? 
            alert("Recipe is already saved!") : 
            setSavedRecipes([...savedRecipes.filter((savedRecipe)=> savedRecipe.id !== recipeToSave.id), { ...recipeToSave}]);
            return;
        }
        setSavedRecipes([...savedRecipes, { ...recipeToSave }]);
    }

    const addRecipeToBlogs = (recipeToAdd)=>{
        setRecipe(recipeToAddInBlogs(recipes, recipeToAdd));
    }
    const deleteRecipeFromBlogs = (recipeToDelete)=>{
        const existInSavedRecipe = savedRecipes.find((savedRecipe)=> savedRecipe.id === recipeToDelete.id);
        if(existInSavedRecipe){
            removeFromSavedRecipes(recipeToDelete);
        }
        setRecipe(recipeToDeleteFromBlogs(recipes, recipeToDelete));
    }
    const editRecipeFromBlogs = (recipeToEdit)=>{
        recipeToEdit.id && recipeToEdit.recipe_name && recipeToEdit.recipe_description ?
        setRecipe(recipeToEditFromBlogs(recipes, recipeToEdit, savedRecipes, addToSavedRecipes)) :
        alert("No field can be empty");
    }
    const value = {isAddRecipePopUpOpen, addToSavedRecipes, setIsAddRecipePopUpOpen, recipes,savedRecipes ,editRecipe,setEditRecipePost, addRecipeToBlogs, deleteRecipeFromBlogs, removeFromSavedRecipes, editRecipeFromBlogs}
    return(
        <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>
    )
}