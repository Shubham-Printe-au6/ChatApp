import React from 'react';
import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './ChatFeed';
import './App.css';

const App = () => {
    return ( 
        <ChatEngine
            height="100vh"
            projectID="2ef01646-f820-4dea-8779-dd7e8dc31155"
            userName="fullmetal"
            userSecret="123123"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
         />
    )
}

export default App;