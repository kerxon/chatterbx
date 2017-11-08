import React, {Component}  from 'react';
import MaterialIcon from 'material-icons-react';

function Group(props) {
    console.log(props.group);
    return ( 
        <li 
            className="groups-list-item"
            onMouseLeave={ props.toggleMenu }
            onMouseEnter={ props.toggleMenu }>    
                <MemberList members={ props.group.members }/>
                <menu toggle={props.show}/>
        </li>
    );
}

function menu(props) {
    console.log(props)
    if (props.toggle === true) {
        return <MaterialIcon icon="dashboard" size='medium' color='#404040'/>
    }
}

function MemberList(props) {
    let memberList = '';
    props.members.map((member, i, arr) => {
        return i < arr.length - 1 ? memberList += member + ', ' : memberList += member;
    });
    return memberList;
}

export default Group;

// toggleMenu() {
//     this.setState({
//         show: !this.state.show
//     });
// }
// toggleMenu={this.toggleMenu}
// this.toggleMenu = this.toggleMenu.bind(this);