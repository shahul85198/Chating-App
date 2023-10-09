import React from 'react';

function Login() {
    return (
        <div className='formContainer'>
        <div className='formwrapper'>
            <span className='logo'>Chat Room</span>
            <span className='title'>Login</span>
            <form>
                <input type='email' placeholder='email'/>
                <input type='password' placeholder='password'/>
                
                <button>Login</button>
            </form>
            <p>you don't have an account? Register</p>

        </div>
        </div>
    )
}

export default Login