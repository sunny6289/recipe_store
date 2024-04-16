import { useContext } from 'react';
import { RecipeContext } from '../../context/recipe/recipe.context';
import SavedRecipeCard from '../../component/Saved Recipe Card/savedRecipeCard.component';
import { UserContext } from '../../context/user/user.context';
import { signOutAuthUser } from '../../utils/firebase.utils';
import './profile.styles.scss';

const Profile = () => {
    const { savedRecipes } = useContext(RecipeContext);
    const { setIsLogIn } = useContext(UserContext);
    const signOutUser = async () => {
        try {
            const signOutres = await signOutAuthUser();
            console.log(signOutres);
            setIsLogIn(false);
        } catch (error) {
            alert(error.code)
        }
    }
    return (
        <div className="profile-page">
            <div className="profile-owner-details">
                <h1 className="profile-name">Name</h1>
                <button onClick={signOutUser} className='signOutUser'>Sign out</button>
            </div>
            <div className="profile-post-interactions">
                <div className="saved-posts">
                    {
                        savedRecipes.map((savedRecipe)=> <SavedRecipeCard key={savedRecipe.id} savedRecipe={savedRecipe}/>)
                    }
                </div>
            </div>
        </div>
    );
}

export default Profile;
