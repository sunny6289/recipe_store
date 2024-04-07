import { createContext, useState } from "react";


export const RecipeContext = createContext({
    isAddRecipePopUpOpen : false,
    setIsAddRecipePopUpOpen : ()=>{},
    recipes: {},
    setRecipe: ()=>{},
    editPostPopUp: false,
    setEditPostPopUp: ()=>{},
    savedRecipes: {},
})
const recipeToAddInBlogs = (recipes, recipeToAdd)=>{
    return [...recipes, {...recipeToAdd}];
}
const recipeToDeleteFromBlogs = (recipes, recipeToDelete)=>{
    const newRecipes = recipes.filter((recipe)=> recipe.id !== recipeToDelete.id);
    return newRecipes;
}
const recipeToEditFromBlogs = (recipes, recipeToEdit)=>{
    const newRecipes = recipes.filter((recipe)=> recipe.id !== recipeToEdit.id);
    return [...newRecipes, {...recipeToEdit}];
}


export const RecipeProvider = ({children})=>{
    const [isAddRecipePopUpOpen, setIsAddRecipePopUpOpen ] = useState(false)
    const [recipes, setRecipe ] = useState([])
    const [editPostPopUp, setEditPostPopUp] = useState(false);
    const [savedRecipes, setSavedRecipes] = useState([])

    console.log(savedRecipes);

    const removeFromSavedRecipes = (recipeToRemoveFromSaved)=>{
        const newSavedRecipes = savedRecipes.filter((savedRecipe)=> savedRecipe.id!==recipeToRemoveFromSaved.id);
        setSavedRecipes(newSavedRecipes);
    }

    const addToSavedRecipes = (recipeToSave)=>{
        const IsPreviouslySaved = savedRecipes.find((savedRecipe)=> savedRecipe.id === recipeToSave.id);
        if(IsPreviouslySaved){
            alert("Recipe is already saved!");
            return;
        }
        setSavedRecipes([...savedRecipes, { ...recipeToSave }]);
    }

    const addRecipeToBlogs = (recipeToAdd)=>{
        setRecipe(recipeToAddInBlogs(recipes, recipeToAdd));
    }
    const deleteRecipeFromBlogs = (recipeToDelete)=>{
        setRecipe(recipeToDeleteFromBlogs(recipes, recipeToDelete));
    }
    const editRecipeFromBlogs = (recipeToEdit)=>{
        setRecipe(recipeToEditFromBlogs(recipes, recipeToEdit));
    }
    const value = {isAddRecipePopUpOpen, addToSavedRecipes, setIsAddRecipePopUpOpen, recipes,savedRecipes , addRecipeToBlogs, deleteRecipeFromBlogs, editPostPopUp, setEditPostPopUp, editRecipeFromBlogs, removeFromSavedRecipes}
    return(
        <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>
    )
}