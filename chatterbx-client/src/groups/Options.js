import React from 'react';

function Options(props) {
    if (props.display === true) {
        return (
            <div className="group-options">
                <ul className="group-options-list">
                    <li className="group-options-list-item">Leave Conversation</li>
                    <li className="group-options-list-item">Archive Conversation</li>
                </ul>
            </div>
        );
    }
    return null;
}

export default Options;