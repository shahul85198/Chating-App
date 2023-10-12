import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from 'firebase/firestore';
import { db } from '../firebase';


function Search() {

   const [username, setUsername] = useState("");
   const [user, setUser] = useState(null);
   const [error, setError] = useState(false);

   const {currentUser} = useContext(AuthContext);

   const handleSearch = async () => {
    const query = query(
        collection(db, "users"),
        where("displayName", "==", username)
    )
try {
    const quertSnapshot = await getDocs(query);
    quertSnapshot.forEach((doc) => {
        setUser(doc.data());
    });
} catch (error) {
    setError(true)
}
};

    const handlekey = (e) => {
        e.key === "Enter" && handleSearch();
    }

    const handleSelect = async () => {
        // cheking whether the chats in firestore if not create we combine to users in dispaly
        const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;

        try {
            const res = await getDoc(doc(db, "chats", combinedId));

            if (!res.exists()) {
                // creating a chat in chats collection
                await setDoc(doc(db, "chats", combinedId), {message: []});

                //create user chats
                await updateDoc(doc(db, "userChats", currentUser.uid), {
                    [combinedId + ".userInfo"]: {
                        uid: user.uid,
                        displayName: user.displayName,
                        photoURL: user.photoURL,
                    },
                    [combinedId + ".date"]: serverTimestamp(),
                });

                // here we use last message to send inside the user

                await updateDoc(doc(db, "userChats", user.uid), {
                    [combinedId + ".userInfo"]: {
                        uid: currentUser.uid,
                        displayName: currentUser.displayName,
                        photoURL: currentUser.photoURL,
                    },
                    [combinedId + ".date"]: serverTimestamp(),
                });
            }
        } catch (error) {}
        // we here used to user gone by click on it from chats
        setUser(null);
        setUsername("")
    }

    return (
        <div className='search'>
        <div className='searchform'>
            <input type='text' placeholder='Find user' 
            onKeyDown={handlekey} 
            onChange={(e) => setUsername(e.target.value)} 
            value={username}/>
        </div>

        {error && <span>user not found</span>}

        {user && (
        <div className='userchat' onClick={handleSelect}>
          <img src={user.photoURL} alt='' />
         <div className='userchatinfo'>
            <span>{user.displayName}</span>
            </div>
        </div>
        )}
        </div>
    )
}

export default Search