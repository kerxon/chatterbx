import React, { Component }  from 'react';
import MaterialIcon from 'material-icons-react';

class Group extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: props.group.show
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('show menu');
    }

    render() {
        return ( 
            <li 
                className="groups-list-item"
                onMouseLeave={ () => this.setState({ show: false }) }
                onMouseEnter={ () => this.setState({ show: true }) }>    
                    <MemberList members={ this.props.group.members } />
                    <Menu className="groups-list-item-menu" show={ this.state.show }  onClick={ this.handleClick } />
            </li>
        );
    }
}

function Menu(prevState, props) {
    if (prevState.show === true) {
        return <MaterialIcon icon="more_vert" size='small' color='#404040' />;
    }
    return <div></div>
}

function MemberList(props) {
    let memberList = '';
    props.members.map((member, i, arr) => {
        return i < arr.length - 1 ? memberList += member + ', ' : memberList += member;
    });
    return memberList;
}

export default Group;

