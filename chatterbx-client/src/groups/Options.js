import React from 'react';

function Options(props) {
    if (props.displayOptions === true) {
        return (
            <div className="group-options">
                <ul className="group-options-list">
                    <li 
                        className="group-options-list-item"
                        onMouseEnter={props.handleChildHover}>Leave Conversation</li>
                    <li
                        className="group-options-list-item"
                        onMouseEnter={props.handleChildHover}>Archive Conversation</li>
                </ul>
            </div>
        );
    }
    return null;
}

export default Options;