import React from 'react';

function Register() {
    return (
        <div className='formContainer'>
        <div className='formwrapper'>
            <span className='logo'>Chat Room</span>
            <span className='title'>Register</span>
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