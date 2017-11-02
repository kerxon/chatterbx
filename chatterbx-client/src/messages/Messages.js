import React, { Component } from 'react';
import './Messages.css';

class Messages extends Component {
    render() {
        return(
            <div className="messages-container">
                <div className="messages-container-header">
                    messages
                </div>
                <div className="messages-list">

                </div>
                <div className="messages-input" role="textbox" contentEditable="true" aria-multiline="true">
                    send a message
                </div>
            </div>
        )
            
    }
}

export default Messages;