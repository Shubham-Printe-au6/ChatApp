import React from 'react';
import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './ChatFeed';
import './App.css';
import LoginForm from './LoginForm';

const App = () => {

    const userName = localStorage.getItem('username');
    const userSecret = localStorage.getItem('password');

    if(!localStorage.getItem('username')) 
        return <LoginForm />

    return ( 
        <ChatEngine
            height="100vh"
            projectID="76f005df-8a52-4365-9bca-3f9aaf23d501"
            userName={userName}
            userSecret={userSecret}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
         />
    )
}

export default App;