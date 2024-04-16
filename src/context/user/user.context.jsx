import { createContext, useState } from "react";


export const UserContext = createContext({
    isLogIn: false,
    setIsLogIn: ()=> {},
    haveAccount: false,
    setHaveAccount: ()=>{}
})

export const UserProvider = ({children})=>{
    const [isLogIn, setIsLogIn] = useState(false);
    const [haveAccount, setHaveAccount] = useState(false);
    const value = {isLogIn,setIsLogIn, haveAccount, setHaveAccount};
    return(
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}