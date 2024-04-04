import { createContext, useState } from "react";


export const RecipeContext = createContext({
    isAddRecipePopUpOpen : true,
    setIsAddRecipePopUpOpen : ()=>{},
    recipes: [],
    setRecipe: ()=>{}
})

export const RecipeProvider = ({children})=>{
    const [isAddRecipePopUpOpen, setIsAddRecipePopUpOpen ] = useState(true)
    const [recipes, setRecipe ] = useState([])

    console.log(recipes);

    const value = {isAddRecipePopUpOpen, setIsAddRecipePopUpOpen, recipes, setRecipe}
    return(
        <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>
    )
}