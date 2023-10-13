import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'

function Sidebar() {
    return (
        <div className='sidebar w-64  bg-slate-500 '>
            <Navbar />
            <Search />
            <Chats />
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