import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext();


export const AuthContextProvider =({children}) => {
    const [currentUser, setCurrentuser] = useState({});
    const auth = getAuth();

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (user) => {
            setCurrentuser(user);
            console.log(user)
        });

        return () => {
            unsubcribe();
        }
    }, []);

    return (
        <AuthContext.Provider value={{currentUser}}>

            {children}
        </AuthContext.Provider>
    );
};