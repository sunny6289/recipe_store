import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home/home.component";
import AllRecipe from "./routes/All Recipe/allRecipe.component";
import Authentication from "./routes/Authentication/authentication.component";
import AddRecipe from "./component/Add Recipe/addRecipe.component";
import Profile from "./routes/Profile/profile.component";
import EditPost from "./component/Edit Post/editPost.component";

const App = ()=> {
  return (
    <Routes>
      <Route path="/" element={<Home/>}>
        <Route index element={<AddRecipe/>}/>
        <Route path="all-recipe/*" element={<AllRecipe/>}/>
        <Route path="profile" element={<Profile/>}/>
        <Route path="edit-page" element={<EditPost/>}/>
        <Route path="auth" element={<Authentication/>}/>
      </Route>
    </Routes>
  );
}

export default App;
