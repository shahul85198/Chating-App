import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import {useHistory, Link} from 'react-router-dom'

function Login() {
    
        const [error, setError] = useState(false);
        const navigate = useHistory();

        const handleSubmit = async (e) => {
            e.preventDefault();
            const email = e.target[0].value;
            const password = e.tarhet[1].value;
            const auth = getAuth()

            try {
                await signInWithEmailAndPassword(auth, email, password);
                navigate("/")
            } catch (error) {
                setError(true);
            }

        }

    return (
        <div className='formContainer'>
        <div className='formwrapper'>
            <span className='logo'>Chat Room</span>
            <span className='title'>Login</span>

            <form onSubmit={handleSubmit}>
                <input type='email' placeholder='email'/>
                <input type='password' placeholder='password'/>
                
                <button>Login</button>
            </form>
            <p>you don't have an account? <Link to='register'>Register</Link></p>

        </div>
        </div>
    )
}

export default Login