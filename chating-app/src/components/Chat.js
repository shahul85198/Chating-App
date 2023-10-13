
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
                    <img className='h-6 w-6' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOaXhpf9Uw_Yccij9kdplS5_A5XZJcgQqJVrx0yFCxCpoeiJh1MdohJP3MYvjrGSL__y8&usqp=CAU' alt='' />
                
                    <img className='h-6 w-6' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr7B6DrohzyGnCbeO3CB8vEwEoqX7tpMpQ1bdFPwde_5j4Qw1hv7SC__VlLUJDwc0qkM4&usqp=CAU' alt='' />
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    )
}

export default Chat