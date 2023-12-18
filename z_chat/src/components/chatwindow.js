// src/components/ChatWindow.js
import React, { useState } from 'react';
import ChatHistory from './chathistory';

const ChatWindow = ({ chatName }) => {
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { text: newMessage, sender: 'user' }]);
      setNewMessage('');
    }
  };

  return (
    <div className="chat-window">
      <h3>{chatName}</h3>
      <ChatHistory messages={messages} />
      <div className="message-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
