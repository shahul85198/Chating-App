
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'


export const AuthContextProvider =({children}) => {
    const [currentUser, setCurrentuser] = useState({});

    // here onAuthStateChanged is used to all state changing
    useEffect(() => {
        const auth = getAuth();
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

export const AuthContext = createContext();
