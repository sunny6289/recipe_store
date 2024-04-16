import { useContext, useState } from "react";
import { signInAuthUser, signInAuthUserWithGooglePopUp } from "../../utils/firebase.utils";
import { UserContext } from "../../context/user/user.context"

const SignIn = () => {
    const [signInEmail, setSignInEmail] = useState("");
    const [signInPassword, setSignInPassword] = useState("");
    const { setIsLogIn, setHaveAccount } = useContext(UserContext);

    const signInUser = async () => {
        try {
            const signInRes = await signInAuthUser(signInEmail, signInPassword);
            console.log(signInRes);
            console.log('signed in user');
            setSignInEmail("");
            setSignInPassword("");
            setIsLogIn(true);
        } catch (error) {
            alert(error.code);
        }
    }

    const signInUserWithGoogle = async () => {
        try {
            await signInAuthUserWithGooglePopUp();
            setIsLogIn(true);
        } catch (error) {
            alert(error.code);
        }
    }
    return (
        <div className='auth-form'>
            <div className="auth-input-container">
                <input className="auth-input" type='email' onChange={(event) => setSignInEmail(event.target.value)} placeholder='Enter email' value={signInEmail} />
                <input className="auth-input" type='password' onChange={(event) => setSignInPassword(event.target.value)} placeholder='Enter password' value={signInPassword} />
            </div>
            <div className="auth-button-container">
                <button onClick={signInUser} className='auth-emailAndPassword-button btn'>Sign In</button>
                <button onClick={signInUserWithGoogle} className='auth-google-button btn'>Sign In With Google</button>
            </div>
            <p className="auth-text">Don't have an account? <span onClick={() => setHaveAccount(false)}>Sign Up</span></p>
        </div>
    );
}

export default SignIn;
