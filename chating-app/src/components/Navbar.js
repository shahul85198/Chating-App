import React from 'react';

function Navbar() {
    return (
        //<div className='Navbar'>
        <div className='flex align-center bg-green-400 px-10 justify-between'>  
        <span className='logo'>Chat Room</span>
            <div className='user'>
                <img src='https://cdn-icons-png.flaticon.com/256/3135/3135715.png' alt='' />
                <button>Login</button>
            </div>
        </div>
    )
}

export default Navbar