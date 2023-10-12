import React from 'react';
import Sidebar from '../components/Sidebar';
import Chat from '../components/Chat';

function Home() {
    return (
        <div className='home bg-blue-400 h-screen items-center justify-center flex'>
            <div className='container border border-black rounded w-2/3 h-4/5 overflow-hidden flex'>
                <Sidebar />
                <Chat />

            </div>

        </div>
    )
}

export default Home