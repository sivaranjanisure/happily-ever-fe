import React from 'react';
import {Chatbot} from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from '../components/chats/config';
import ActionProvider from '../components/chats/ActionProvider';
import MessageParser from '../components/chats/MessageParser';

const ChatbotComponent = () => {
  return (
    <div className='mt-auto'>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default ChatbotComponent;