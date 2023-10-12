import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import {useHistory, Link} from 'react-router-dom'

function Login() {
    
    //const [Error, setErr] = useState(false);
        const history = useHistory();

        const handleSubmit = async (e) => {
            e.preventDefault();
            const email = e.target[0].value;
            const password = e.tarhet[1].value;
            const auth = getAuth();

            try {
                await signInWithEmailAndPassword(auth, email, password);
                history.push("/")
              } catch (Error) {
                //setErr(true);
              }
        };

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