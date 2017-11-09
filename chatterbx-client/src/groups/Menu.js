import React, {Component} from 'react';
import MaterialIcon from 'material-icons-react';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.toggle()
    }

    render() {
        if (this.props.show === true ) {
            return (
                <div onClick={this.handleClick}> 
                    <MaterialIcon icon="more_vert" size='small' color='#404040'/>
                </div>
            );
        }
        return null;
    }
}

export default Menu;