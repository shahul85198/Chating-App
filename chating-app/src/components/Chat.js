import React from 'react';
import Messages from './Messages';
import Input from './Input';

function Chat() {
    return (
        <div className='chat flex-2'>
            <div className='chatinfo h-16 bg-blue-700 flex items-center justify-between p-4 text-gray-400'>
                <span>person1</span>
                <div className='chaticon flex gap-2'>
                    <img className='w-12 h-12' src='https://cdn-icons-png.flaticon.com/256/3135/3135715.png' alt='' />
                    <img className='w-12 h-12' src='https://cdn-icons-png.flaticon.com/256/3135/3135715.png' alt='' />
                    <img className='w-12 h-12' src='https://cdn-icons-png.flaticon.com/256/3135/3135715.png' alt='' />
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    )
}

export default Chat