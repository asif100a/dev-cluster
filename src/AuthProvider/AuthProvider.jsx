import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null) ;

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user',);
        if(storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);
    
    // Login the user
    const loginTheUser = async (email, password) => {
        try {
            const user = { email, password };
            const response = await fetch(`${import.meta.env.VITE_URL}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })

            const data = await response.json();
            console.log(data)
            setUser(data);
            localStorage.setItem('user', JSON.stringify(data));
        }
        catch(error){
            console.log(error);
        }
    };

    console.log(user);

    const authInfo = {
        loginTheUser,
        user
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;