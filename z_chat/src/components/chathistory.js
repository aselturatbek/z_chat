// src/components/ChatHistory.js
import React from 'react';

const ChatHistory = ({ messages }) => {
  return (
    <div className="chat-history">
      {messages.map((message, index) => (
        <div key={index} className={`message ${message.sender === 'user' ? 'user-message' : 'other-message'}`}>
          {message.text}
        </div>
      ))}
    </div>
  );
};

export default ChatHistory;
