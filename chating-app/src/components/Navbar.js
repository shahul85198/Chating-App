import React, { useContext } from 'react';
import {getAuth} from "firebase/auth";
import {AuthContext} from '../context/AuthContext'
import {signOut} from 'firebase/auth'


function Navbar() {
    const {currentUser} = useContext(AuthContext)
    
    return (
        <div className='Navbar flex align-center bg-green-400 px-10 justify-between'>  
        <span className='logo'>Chat Room</span>
            <div className='user'>
                <img src='{currentUser.photoURL}' alt='' />
                <span>{currentUser.displayName}</span>
                <button onClick={() =>signOut(getAuth())}>logout</button>
            </div>
        </div>
    )
}

export default Navbar