import React from 'react'
import Navbar from './Navbar'

function Sidebar() {
    return (
        <div className='sidebar flex flex-initial w-64  bg-slate-500 '>
            <Navbar />
            </div>
    )
}



/*
import React from 'react';
import Navbar from './Navbar';
import Search from './Search';
import Chats from './Chats';

function Sidebar() {
    return (
        <div className='sidebar flex-1 bg-green-400 relative'>
            <Navbar />
            <Search />
            <Chats />
        </div>
    )
}
*/
export default Sidebar