import React, {useState, useEffect} from "react";
import axios from 'axios';
const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();

        
        const authObject = {
            'Project-ID': '76f005df-8a52-4365-9bca-3f9aaf23d501',
            'User-Name': username,
            'User-Secret': password
        }

        try{
            // username|password => chatengine -> give messages
            await axios.get('https://api.chatengine.io/chats', {
                headers: authObject
            });
            // works out -> logged in successfully
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            // we do a reload to see if the login was successful or not. 
            // if it was we go to chatengine component
            // if not we go back to login component

            window.location.reload();

        }catch(err) {
            // does not work out -> try with different credentials
            setError('Oops, incorrect credentials');
        }

    }

    return ( 
        <div className='wrapper'>
            <div className='form'>
                <h1 className='title'>Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className='input' placeholder="username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='input' placeholder="password" required />
                    <div align="center">
                        <button className='button' type='submit'>
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className='error'>
                        {error}
                    </h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;
