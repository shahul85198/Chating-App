import React from 'react'

function Navbar() {
    return (
        <div className='navbar h-10 p-2 justify-between flex flex-initial w-64 align-center bg-green-300'>
        
            <span className='logo font-bold'>Chat Room</span>
            <div className='user flex gap-x-1'>
                <img className='' src='https://cdn-icons-png.flaticon.com/256/3126/3126647.png' alt=''/>
                <span>johhn</span>
                <button className='bg-orange-400 font-bold text-white text-xs px-2 py-1 cursor-pointer rounded'>logout</button>
            </div>
        </div>
    )
}



/*
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
*/
export default Navbar