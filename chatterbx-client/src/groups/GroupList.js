import React from 'react';
import MaterialIcon from 'material-icons-react';
import Group from './Group';

function GroupList(props) {
    console.log(props);
    if (props.groups.length > 0) {
        const groupList = props.groups.map((group, i) => {
            return <Group key={group.id} group={ group }/> 
        });
        return (
            <ul className="groups-list">
                {groupList}
            </ul>
        );
    }
}

export { GroupList };