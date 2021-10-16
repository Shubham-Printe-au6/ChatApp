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
            projectID="2ef01646-f820-4dea-8779-dd7e8dc31155"
            userName={userName}
            userSecret={userSecret}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
         />
    )
}

export default App;