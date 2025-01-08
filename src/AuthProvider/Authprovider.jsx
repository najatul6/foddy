import { useEffect, useState } from "react";
import { createContext } from "react";


export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
        const unsubscribe=onAuthStateChange(auth,async(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[]);

const authInfo={
    user,
    loading,
}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider