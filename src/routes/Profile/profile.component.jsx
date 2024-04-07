import { useContext } from 'react';
import './profile.styles.scss';
import { RecipeContext } from '../../context/recipe/recipe.context';
import SavedRecipeCard from '../../component/Saved Recipe Card/savedRecipeCard.component';

const Profile = () => {
    const { savedRecipes } = useContext(RecipeContext)

    return (
        <div className="profile-page">
            <div className="profile-owner-details">
                <h1 className="profile-name">Name</h1>
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
