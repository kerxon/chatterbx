import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import Options from './Options';

class Group extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: props.group.show,
            display: false
        }
        this.handleToggle = this.handleToggle.bind(this);
        this.pageClick = this.pageClick.bind(this);
    }

    componentDidMount() {
        window.addEventListener('mousedown', this.pageClick, false);
    }

    componentWillUnmount() {
        window.removeEventListener('mousedown', this.pageClick, false);
    }

    pageClick(e) {
        if (ReactDOM.findDOMNode(e.target).className === 'group-options-list-item') {
            return;
        }
        this.setState({
            display: false
        });
    }

    handleToggle() {
        this.setState({
            display: !this.state.display
        });
    }

    render() {  
        return ( 
            <li 
                className="groups-list-item"
                onMouseLeave={ () => this.setState({ show: false }) }
                onMouseEnter={ () => this.setState({ show: true }) }>
                    <div className="item-content">
                        <MemberList className="group-memberlist" members={ this.props.group.members } />
                        <Menu className="groups-list-item-menu" show={ this.state.show } toggle={ this.handleToggle } />
                    </div>
                    <Options display={this.state.display} onBlur={ this.handleBlur } />
            </li>
        );
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

