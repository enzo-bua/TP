import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword,
         signInWithEmailAndPassword,
         GoogleAuthProvider,
         signInWithPopup,
         onAuthStateChanged,
        sendPasswordResetEmail} from 'firebase/auth'
import { auth } from '../Firebase'

export const authContext = createContext()

export const useAuth = () => {
    const context = useContext(authContext)
    if (!context) throw new Error ('There is not auth provider')
    return context
} 

function AuthProvider({ children }) {

    const [user, setUser] = useState(null)

    const signup = (email, password) =>{
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
       return signInWithEmailAndPassword(auth, email, password)
    }

    const loginWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    }

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
    }, []);
    
    
    return(
        <authContext.Provider value={{ signup, login, loginWithGoogle, resetPassword }}>
            {children}
        </authContext.Provider>
    )
}

export default AuthProvider;