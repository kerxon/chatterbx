import React, { Component } from 'react';
import { GroupList } from './GroupList';
import './Groups.css';

class Groups extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addNewGroup: false,
            groups: [
                { id: 0, members: ['Rufus', 'Denali', 'Stewart', 'Bridger'], show: false },
                { id: 1, members: ['Rufus', 'Denali'], show: false }
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

export default Groups