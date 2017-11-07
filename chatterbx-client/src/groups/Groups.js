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
            ],
            addMembers: ''
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleAddGroup = this.handleAddGroup.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            addMembers: event.target.value
        });
    }
    
    handleClick() {
        this.setState({
            addNewGroup: true
        })
    }

    handleAddGroup(e) {
        e.preventDefault();
        e.stopPropagation();
        function formatInput(str) {
            if (str !== null) {
                return str.split(' ');
            }
        }
        let id = this.state.groups.id;
        const groups = [{
            id: id++,
            members: formatInput(this.state.addMembers)
        }, ...this.state.groups];
        this.setState({
            groups: groups,
            addMembers: ''
        });
    }

    render() {
        const addNewGroup = this.state.addNewGroup;
        let tile = null;
        if (addNewGroup === false) {
            tile = <button className="groups-button" type="button" onClick={this.handleClick}>Start Conversation</button>;
        } else {
            tile = 
                <div className="add-container">
                    <form onSubmit={this.handleAddGroup}>
                        <input
                            className="groups-input"
                            type="text"
                            placeholder="enter names"
                            required
                            value={this.state.addMembers}
                            onChange={this.handleChange}>
                        </input>
                        <button className="groups-button" type="submit">+</button>
                    </form>
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
        const groupList = props.groups.map((group, i) => {
            return ( 
                <li className="groups-list-item" key={group.id.toString() + i.toString()}>
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