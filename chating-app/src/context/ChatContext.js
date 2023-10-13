
import React, { createContext, useContext, useState } from "react";
import { AuthContext } from "./AuthContext";

export const ChatContextProvider = ({children}) => {

    const {currentUser} = useContext(AuthContext);

     const [state, setState] = useState({
        chatId: 'null',
        user: {},
     })
              
     const updateChatState = (action) => {

        if (action.type === 'change-user') { 

       const chatId =
                currentUser.uid > action.payload.uid
                ? currentUser.uid + action.payload.uid
                : action.payload.uid + currentUser.uid;
            
            
         setState({user: action.playload, chatId})
        }
    }

    return (
        <ChatContext.Provider value={{data:state, dispatch: updateChatState}}>
            {children}
        </ChatContext.Provider>
    )
}


export const ChatContext = createContext()