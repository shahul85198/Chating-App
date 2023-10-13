

import { updateCurrentUser } from "firebase/auth";
import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

function Message({message}) {
    const {currentUser} = useContext(AuthContext);
    const {data} = useContext(ChatContext);

    const ref = useRef();

    useEffect(() => {
        ref.current?.scrollIntoView({behaviour: "smooth"});
    }, [message])


    return (
        <div className={`flex gap-4  ${Message.senderId === updateCurrentUser.uid }`} ref={ref}>
            <div className="flex flex-col text-gray-500 font-light">

                <img className='w-16 h-16 rounded-full object-cover'
                src={message.senderId === currentUser.uid ? currentUser.photoURL : data.user.photoURL} alt="" />

                <span className='text-sm'>just now</span>
            </div>
            <div className="flex gap-2">
                <p className='bg-blue-900 text-white p-4 '>
                    {message.text}
                    </p>
               {message.img && <img className='w-1/2' src={message.img} alt=""/>}
            </div>
        </div>
    )
}

export default Message