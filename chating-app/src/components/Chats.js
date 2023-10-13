import React from 'react'

function Chats() {
    return (
        <div className='chats'>
            <div className='userchat p-2 flex items-center gap-2 text-white cursor-pointer hover:bg-slate-700'>
                <img className='w-12 h-12 rounded-full object-cover bg-white' src='https://cdn-icons-png.flaticon.com/256/3126/3126647.png' alt='' />
                <div className='userchatinfo '>
                    <span className='text-xl font-semibold'>jane</span>
                    <p className='text-sm text-white'>Hello</p>
                </div>
            </div>
            </div>
    )
}


/*
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { onSnapshot, doc } from "firebase/firestore";
import { db } from "../firebase";

function Chats() {
    const [chats, setChats] = useState([]);
    const {currentUser} = useContext(AuthContext);
    const {dispatch} = useContext(ChatContext);

    //snapshot uses for changes in chat app from firestore
    useEffect(() => {
        const getChats = () => {
            const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
                setChats(doc.data());
            });

            return () => {
                unsub();
            }
        }

        currentUser.uid && getChats();
    }, [currentUser.uid]);

    const handleSelect = (u) => {
        dispatch({type: "CHANGE_USER", payload: u});
    }


    return (
        // we covert object to array we use keys in sort
        <div className="chats"> chats
        
        {Object.keys(chats)?.sort((a,b) => b[1].date - a[1].date).map((chat) => (
            <div
               className="userchat"
               key={chat[0]}
               onClick={() => handleSelect(chat[1].userInfo)}
            >
        

          <img src={chat[1].userInfo.photoURL} alt='' />
         <div className='userchatinfo'>
            <span>{chat[1].userInfo.displayName}</span>
            <p>{chat[1].lastMessage?.text}</p>
        </div>
        </div>
        ))} 
        </div>
    )
}
*/
export default Chats