
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import {useHistory, Link} from 'react-router-dom'

function Login() {
    
    const [Error, setErr] = useState(null);
        const history = useHistory();

        const handleSubmit = async (e) => {
            e.preventDefault();
            const email = e.target[0].value;
            const password = e.target[1].value;
            const auth = getAuth();

         signInWithEmailAndPassword(auth, email, password)
         .then(() => {
            history.push('/');
         })
         .catch((Error) => {
            setErr(Error.message)
         });
            
        };

    return (
        <div className='formContainer bg-blue-300 h-screen flex items-center justify-center'>
        <div className='formwrapper bg-white p-8 rounded flex flex-col space-y-4 items-center'>
            <span className='logo text-blue-700 font-bold text-2xl'>Chat Room</span>
            <span className='title text-blue-700 text-sm'>Login</span>

            <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
                <input className='px-4 py-3 border-b border-blue-300 focus:outline-none' type='email' placeholder='email'/>
                <input className='px-4 py-3 border-b border-blue-300 focus:outline-none' type='password' placeholder='password'/>
                
                <button className='bg-blue-700 text-white px-4 py-2 font-bold'>Sign in</button>
                {Error && <span>Something went wrong</span>}
            </form>
            
            <p>you don't have an account? <Link to='register'>Register</Link></p>

        </div>
        </div>
    )
}

export default Login