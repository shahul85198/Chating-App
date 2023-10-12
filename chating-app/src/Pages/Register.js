import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {doc, setDoc} from 'firebase/firestore'
import {db} from '../firebase'
import { Link, useHistory } from 'react-router-dom';

function Register() {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const history = useHistory()

        const handleSubmit = async (e) => {
            e.preventDefault();
            const displayName = e.target[0].value;
            const email = e.target[1].value;
            const password = e.target[2].value;
            const file = e.target[3].files[0];
            
            const auth = getAuth();
  try {
 const res = await createUserWithEmailAndPassword(auth, email, password)
 
const storage = getStorage();
// here to create uniq img name
const date = new new Date().getTime();
const storageRef = ref(storage, `${displayName + date}`);

await uploadBytesResumable(storageRef, file).then(() => {
    getDownloadURL(storageRef).then(async (downloadURL) => {
        try {
        // update profile
        await updateProfile(res.user, {
            displayName,
            photoURL: downloadURL,
        });
        // create user on firestore this will create in serrver
        await setDoc(doc(db, "users", res.user.uid), {
            uid: res.user.uid,
            displayName,
            email,
            photoURL: downloadURL,
        });

        // create empty user chats on firestore
        await setDoc(doc(db, "userChats", res.user.uid), {});
        history.push("/");
        } catch (error) {
            console.log(error);
            setError(true);
            setLoading(false);
        }
        });
      }); 
  }  catch (error) {
    setError(true);
    setLoading(false)
  }
     };

    return (
        <div className='bg-blue-300 h-screen flex items-center justify-center'>
        <div className='bg-slate-400 p-8 rounded flex flex-col space-y-4 items-center'>
            <span className='text-blue-700 font-bold text-2xl'>Chat Room</span>
            <span className='text-red-700 text-8m'>Register</span>

            <form className='flex flex-col space-y-4' onSubmit={handleSubmit}>
              
                <input className='' type='text' placeholder='display name'/>
                <input type='email' placeholder='email'/>
                <input type='password' placeholder='password'/>
                <input style={{display:'none' }} type='file' id='file'/>
                
                <label htmlFor='file'>
                    <img className='w-16 h-10' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgo_wbx6WdmBtyVvJ1k6maH-I4Ij1kXXC-ijbYDeOSyw&s' alt=''/>
                    <span>Add Photo</span>
                </label>

                <button className='bg-blue-700 text-white px-4 py-2 font-bold' disabled={loading}>Sign up</button>
                {loading && "uploading the image please wait..."}
                {error && <span>Something error</span>}
            </form>
            <p>you do have an account? <Link to="/register">Login</Link></p>

        </div>
        </div>
    )
}

export default Register