import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import Options from './Options';

class Group extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: props.group.show,
            displayOptions: false
        }
        this.handleToggle = this.handleToggle.bind(this);
        this.pageClick = this.pageClick.bind(this);
        this.handleOff = this.handleOff.bind(this);
        this.handleOn = this.handleOn.bind(this);
        this.handleParentHover = this.handleParentHover.bind(this);
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
            displayOptions: false
        });
    }

    handleToggle() {
        this.setState({
            displayOptions: !this.state.displayOptions
        });
    }

    handleOn() {
        this.setState({ 
            show: true
        });
    }

    handleOff() {
        this.setState({
            show: false
        });
    }

    handleParentHover() {
        this.setState({
            show: !this.state.show
        });
    }

    render() {  
        return ( 
            <li 
                className={ this.state.show === true ? "groups-list-item groups-list-item-dark" : "groups-list-item groups-list-item-light" }
                onMouseLeave={ this.handleOff }
                onMouseEnter={ this.handleOn }>
                    <div className="item-content">
                        <MemberList className="group-memberlist" members={ this.props.group.members } />
                        <Menu className="groups-list-item-menu" show={ this.state.show } toggle={ this.handleToggle } />
                    </div>
                    <Options 
                        displayOptions={this.state.displayOptions}
                        onBlur={ this.handleBlur }
                        handleChildHover={this.handleParentHover}/>
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

