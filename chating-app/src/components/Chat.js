
import React, { useContext } from 'react';
import Messages from './Messages';
import Input from './Input';
import { ChatContext } from '../context/ChatContext';

function Chat() {

        const {data} = useContext(ChatContext);

    return (
        <div className='chat flex-1'>
             <div className='chatinfo h-16 bg-orange-300 flex items-center justify-between p-4 '>
                <span>{data.user?.displayName}</span>
                <div className='flex gap-2'>
                    <img className='h-6 w-6' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIy-wyyPpBeKtfyOLS8mtr1vj7iYq4y_J7tw&usqp=CAU' alt='' />
                
                    <img className='h-6 w-6' src='https://cdn-icons-png.flaticon.com/128/10826/10826552.png' alt='' />
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    )
}

export default Chat