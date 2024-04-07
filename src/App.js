import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home/home.component";
import RecipesContainer from "./routes/Recipes Container/recipesContainer.component";
import Authentication from "./routes/Authentication/authentication.component";
import AddRecipe from "./component/Add Recipe/addRecipe.component";
import Profile from "./routes/Profile/profile.component";


const App = ()=> {
  return (
    <Routes>
      <Route path="/" element={<Home/>}>
        <Route index element={<AddRecipe/>}/>
        <Route path="/all-recipe" element={<RecipesContainer/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/auth" element={<Authentication/>}/>
      </Route>
    </Routes>
  );
}

export default App;
