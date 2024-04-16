import { useContext } from "react";
import { UserContext } from "../../context/user/user.context";
import SignIn from "../../component/Sign In/signIn.component";
import SignUp from "../../component/Sign Up/signUp.component";
import './authentication.styles.scss';

const Authentication = () => {
    const {haveAccount} = useContext(UserContext)
    return (
        <div className="auth-page">
            {
                haveAccount ? <SignIn/> : <SignUp/>
            }
        </div>
    );
}

export default Authentication;
