import React from 'react'

function Message() {
    return (
        <div>Message</div>
    )
}


/*
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
        <div className={`message ${Message.senderId === updateCurrentUser.uid && "owner"}`} ref={ref}>
            <div className="messageinfo">
                <img src={
                    message.senderId === currentUser.uid ? currentUser.photoURL : data.user.photoURL} alt="" />
                <span>just now</span>
            </div>
            <div className="messagecontent">
                <p>{message.text}</p>
               {message.img && <img src={message.img} alt=""/>}
            </div>
        </div>
    )
}
*/
export default Message