
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'; 


export const AuthContext = createContext();

export const AuthContextProvider =({children}) => {
    const [currentUser, setCurrentuser] = useState(null);
    const history = useHistory();
    // here onAuthStateChanged is used to all state changing
    useEffect(() => {
        const auth = getAuth();
        
        const unsubcribe = onAuthStateChanged(auth, (user) => {
            setCurrentuser(user);

            if (user) {
                history.push('/login')
            }
        
        });

        return () => {
            unsubcribe();
        }
    }, [history]);

   

    return (
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    );
};
