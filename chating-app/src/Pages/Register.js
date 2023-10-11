import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

function Register() {
    const [error, setError] = useState(false)

        const handleSubmit = async (e) => {
            e.preventDefault();
            const displayName = e.target[0].value;
            const email = e.target[1].value;
            const password = e.target[2].value;
            const file = e.target[3].value;
            
            const auth = getAuth();
  try {
 const res = await createUserWithEmailAndPassword(auth, email, password)
  }  catch (error) {
    setError(true)
  }

        };

    return (
        <div className='bg-blue-300 h-screen flex items-center justify-center'>
        <div className='bg-slate-400 p-8 rounded flex flex-col space-y-4 items-center'>
            <span className='text-blue-700 font-bold text-2xl'>Chat Room</span>
            <span className='text-red-700 text-8m'>Register</span>

            <form className='flex flex-col space-y-4' onSubmit={handleSubmit}>
                <input type='text' placeholder='display name'/>
                <input type='email' placeholder='email'/>
                <input type='password' placeholder='password'/>
                <input style={{display:'none' }} type='file' id='file'/>
                <label htmlFor='file'>
                    <img className='w-16 h-10' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgo_wbx6WdmBtyVvJ1k6maH-I4Ij1kXXC-ijbYDeOSyw&s' alt=''/>
                    <span>Add Photo</span>
                </label>
                <button className='bg-blue-700 text-white px-4 py-2 font-bold'>Sign up</button>
                {error && <span>Something error</span>}
            </form>
            <p>you do have an account? Login</p>

        </div>
        </div>
    )
}

export default Register