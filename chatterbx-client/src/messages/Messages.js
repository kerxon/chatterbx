import React, { Component } from 'react';
import './Messages.css';
import { subscribeToMessages, sendMessage } from '../api';

class Messages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'send a message',
            messages: ['test']
        }
        subscribeToMessages(this.state.message, (err, data) => {
            console.log('callback', err, data);
            this.setState({ 
                message: data
            });
        });
        this.handleChange = this.handleChange.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.clearInput = this.clearInput.bind(this);
    }

    handleChange(event) {
        this.setState({
            message: event.target.value
        });
    }

    clearInput() {
        this.setState({
            message: ''
        });
    }

    handleInput(event) {
        event.preventDefault();
        event.stopPropagation();
        this.setState((prevState, props) => ({
            message: this.state.message,
            messages: [...prevState.messages, this.state.message]
        }));
        sendMessage(this.state.message);
        this.clearInput();
    }
    
    render() {
        return(
            <div className="messages-container">
                <div className="messages-container-header">
                    messages
                </div>
                <div className="messages-list">
                    <MessageList messages={this.state.messages}/>
                </div>
                <form onSubmit={this.handleInput}>
                    <input
                        onChange={this.handleChange}
                        onFocus={this.clearInput}
                        value={this.state.message}
                        className="messages-input"
                        contentEditable="true"
                        aria-multiline="true"
                        dir="ltr">
                    </input>
                </form>
            </div>
        ); 
    }
}

function MessageList(props) {
    const messages = props.messages;
    const messageList = messages.map((m, i) => {
        const k = i + m;
        return ( <li className="message-list-item" key={k} >{m}</li> );
    });
    return (
        <ul>{messageList}</ul>
    );
}

export default Messages;