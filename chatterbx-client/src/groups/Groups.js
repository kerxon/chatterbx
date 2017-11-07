import React, { Component } from 'react';
import './Groups.css';

class Groups extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addNewGroup: false,
            groups: [
                { id: 0, members: ['Rufus', 'Denali', 'Stewart', 'Bridger']},
                { id: 1, members: ['Rufus', 'Denali'] }
            ]
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            addNewGroup: !this.state.addNewGroup
        })
    }

    render() {
        const addNewGroup = this.state.addNewGroup;
        let tile = null;
        if (!addNewGroup) {
            tile = <button className="groups-button" type="button" onClick={this.handleClick}>Start Conversation</button>;
        } else {
            tile = 
                <div className="add-container">
                    <input className="groups-input" type="text" placeholder="enter names"></input>
                    <button className="groups-button" type="button" onClick={this.handleClick}>+</button>
                </div>;
        } 

        return (
            <div className="groups-container">
                {tile}
                <GroupList groups={this.state.groups}/>
            </div>
        );
    }
}

function MemberList(props) {
    let memberList = '';
    props.group.members.map((member, i, arr) => {
        return i < arr.length -1 ? memberList += member + ', ' : memberList += member;
    });
    return memberList;
}

function GroupList(props) {
    if (props.groups.length > 0) {
        const groupList = props.groups.map((group) => {
            return ( 
                <li className="groups-list-item" key={group.id}>
                    <MemberList group={group} />
                </li>
            );
        });
        return (
            <ul className="groups-list">
                {groupList}
            </ul>
        );
    }
}

export default Groups