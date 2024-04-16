import { useContext, useState } from 'react';
import {
    createAuthUserWithEmailAndPassword,
    createAuthUserWithGooglePopUp,
    signOutAuthUser
} from '../../utils/firebase.utils';
import { UserContext } from '../../context/user/user.context';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setIsLogIn, setHaveAccount } = useContext(UserContext)


    const setEmailValue = (event) => setEmail(event.target.value);
    const setPasswordValue = (event) => setPassword(event.target.value);
    const signUpUser = async () => {
        try {
            const res = await createAuthUserWithEmailAndPassword(email, password);
            setEmail("");
            setPassword("");
            console.log(res);
            setIsLogIn(true)
        } catch (error) {
            alert(error.code);
        }
    }
    const signUpUserWithGoogle = async () => {
        try {
            const res = await createAuthUserWithGooglePopUp();
            console.log(res);
            setIsLogIn(true);
        } catch (error) {
            alert(error.code)
        }
    }

    return (
        <div className='auth-form'>
            <div className="auth-input-container">
                <input className='auth-input' type='email' onChange={setEmailValue} placeholder='Enter email' value={email} />
                <input className='auth-input' type='password' onChange={setPasswordValue} placeholder='Enter password' value={password} />
            </div>
            <div className="auth-button-container">
                <button onClick={signUpUser} className='auth-emailAndPassword-button btn'>Sign Up</button>
                <button onClick={signUpUserWithGoogle} className='auth-google-button btn'>Sign up with google</button>
            </div>
            <p className='auth-text'>Have an account? <span onClick={() => setHaveAccount(true)}>Sign In</span></p>
        </div>
    );
}

export default SignUp;
