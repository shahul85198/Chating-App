import React from 'react';
import Sidebar from '../components/Sidebar';
import Chat from '../components/Chat';

function Home() {
    return (
        <div className='home bg-blue-400 h-screen '>
            <div className='container'>
                <Sidebar />
                <Chat />

            </div>

        </div>
    )
}

export default Home