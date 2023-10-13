
import React, { useContext } from 'react';
import {getAuth} from "firebase/auth";
import {AuthContext} from '../context/AuthContext'
import {signOut} from 'firebase/auth'


function Navbar() {
    const {currentUser} = useContext(AuthContext);
    
    
    return (
        <div className=' h-10 p-2 justify-between flex flex-initial w-64 align-center bg-green-300'>  
        <span className='font-bold'>Chat Room</span>
            <div className='flex gap-x-1'>

                <img className='object-cover h-6 w-6 rounded-full bg-white'
                 src='{currentUser.photoURL}' 
                 alt='' />

                <span>{currentUser.displayName}</span>

                <button className='bg-orange-400 font-bold text-white text-xs px-2 py-1 cursor-pointer rounded'
                onClick={() =>signOut(getAuth())}>
                    logout
                    </button>
            </div>
        </div>
    )
}


export default Navbar