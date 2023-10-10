import React from 'react';

function Register() {
    return (
        <div className='bg-blue-300 h-screen flex items-center justify-center'>
        <div className='bg-slate-400 p-8 rounded flex flex-col space-y-4 items-center'>
            <span className='text-blue-700 font-bold text-2xl'>Chat Room</span>
            <span className='text-red-700 text-8m'>Register</span>
            <form>
                <input type='text' placeholder='display name'/>
                <input type='email' placeholder='email'/>
                <input type='password' placeholder='password'/>
                <input style={{display:'none' }} type='file' id='file'/>
                <label htmlFor='file'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgo_wbx6WdmBtyVvJ1k6maH-I4Ij1kXXC-ijbYDeOSyw&s' alt=''/>
                    <span>Add Photo</span>
                </label>
                <button>Sign up</button>
            </form>
            <p>you do have an account? Login</p>

        </div>
        </div>
    )
}

export default Register