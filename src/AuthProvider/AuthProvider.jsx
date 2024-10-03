import axios from "axios";
import { GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";

export const AuthContext = createContext(null) ;

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isPending, setIsPending] = useState(true);

    const provider = new GoogleAuthProvider();
    
     // Login the user
     const loginTheUser = (email, password) => {
        setIsPending(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Login with google
    const googleLogin = () => {
        setIsPending(true);
        return signInWithPopup(auth, provider);
    };

    // Log out the user
    const logoutUser = () => {
        setIsPending(true);
        return signOut(auth);
    };

    // State change of user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
            setIsPending(false);
        });

        return() => {
            unsubscribe();
        };
    }, []);

    console.log(user);

    const authInfo = {
        loginTheUser,
        logoutUser,
        googleLogin,
        user,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;