


import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import {arrayUnion, doc, serverTimestamp, Timestamp, updateDoc} from "firebase/firestore"
import {db, storage} from '../firebase';
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";


function Input() {
      const [text, setText] = useState("");
      const [img, setImg] = useState(null);

      const {currentUser} = useContext(AuthContext);
      const {data} = useContext(ChatContext);

      const handleSend = async () => {
        if (img) {
            const storageRef = ref(storage, Date.now().toString());

            const uploadTask = uploadBytesResumable(storageRef, img);

            uploadTask.on(
                (error) => {

                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                        await updateDoc(doc(db, "chats", data.chatId), {
                            messages: arrayUnion({
                                id: Date.now().toString(),
                                text,
                                senderId: currentUser.uid,
                                date: Timestamp.now(),
                                img: downloadURL,
                            }),
                        });
                    });
                }
            );
        } else {
            await updateDoc(doc(db, "chats", data.chatId), {
                messages: arrayUnion({
                    id: Date.now().toString(),
                    text,
                    senderId: currentUser.uid,
                    date: Timestamp.now()
                })
            })
        }

        await updateDoc(doc(db, "userChats", currentUser.uid), {
            [data.chatId + ".lastMessage"]: {
                text,
            },
            [data.chatId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", data.user.uid), {
            [data.chatId + ".lastMessage"]: {
                text,
            },
            [data.chatId + ".date"]: serverTimestamp(),
        });

        setText("");
        setImg(null);
      }


    return (
        <div className='bg-white p-3 h-16 flex items-center justify-between'>

            <input className='input w-96 text-lg border-none outline-none '
             type="text" 
             placeholder="Type Some Thing.." 
             onChange={(e) => setText(e.target.value)}
             value={text}
             />
             
             <div className='send flex items-center gap-2'>
                <img className=" h-6 cursor-pointer" 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6C75E2Wc6fpsnwQVGFJv3wmIblfjrrm3Y99IunU2_tZCi9hccfuGEYGWNdDNFwls9b5c&usqp=CAU"
                 alt=""
                  />

                <input type="file" 
                style={{display:"none"}} 
                id='file' 
                onChange={(e) => setImg(e.target.files[0])}
                />

                <label htmlFor="='file">
                    <img className=" h-6 cursor-pointer" 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp7Nq5EYnvJ-tI-nOthotkhSjJBz7DUvoO-5fqbpi0nRkQZfXXX88ATDarddtwIwsQFq0&usqp=CAU" 
                    alt="" />
                </label>

                <button className='bg-blue-600 text-white px-4 py-2 font-bold rounded-lg cursor-pointer'
             onClick={handleSend}>
                Send
                </button>
            </div>
            </div>

    )
    }


export default Input 

