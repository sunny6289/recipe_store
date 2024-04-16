import { initializeApp } from "firebase/app";
import { getAuth, 
         signInWithEmailAndPassword, 
         signInWithPopup, 
         GoogleAuthProvider, 
         createUserWithEmailAndPassword,
         signOut } from "firebase/auth";




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDBqzmMNhrWqjxBOCFk7H30QUxfxuhPfc",
  authDomain: "food-db-d8198.firebaseapp.com",
  projectId: "food-db-d8198",
  storageBucket: "food-db-d8198.appspot.com",
  messagingSenderId: "336116272693",
  appId: "1:336116272693:web:5c2e3e656f799d3b292b7c"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();
const GoogleProvider = new GoogleAuthProvider()
GoogleProvider.setCustomParameters({
  prompt:'select_account',
});

export const createAuthUserWithGooglePopUp = async()=>{
  return await signInWithPopup(auth, GoogleProvider);
}
export const signInAuthUserWithGooglePopUp = async()=>{
  return await signInWithPopup(auth, GoogleProvider);
}
export const createAuthUserWithEmailAndPassword = async( email, password)=>{
  if(!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUser = async(email, password)=>{
  if(!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutAuthUser = async()=>{
  await signOut(auth);
}