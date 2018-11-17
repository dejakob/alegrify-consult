import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import SideNav, {
    SideNavContent,
    SideNavFooter,
    SideNavList
} from '../../ui/SideNav';
import SideNavHeader from './SideNavHeader';
import SideNavListItem from './SideNavListItem';

function SideNavComponent(props) {
    return (
        <SideNav>
            <SideNavContent>
                <SideNavHeader />

                <SideNavList>
                    {props.users.map((user, index) => (
                        <SideNavListItem
                            key={index}
                            to={`/dashboard/${user._id}`}
                            title={user.name}
                            avatar={user.avatar}
                            subtitle={`Connected since ${moment(user.connected_at).format('MMM Do')}`}
                        />
                    ))}
                </SideNavList>

                <SideNavFooter
                    to="/dashboard/connect"
                >
                    <span>
                        {/* Todo: plural trans */}
                        <strong>{props.users.length}</strong> users connected
                    </span>
                    <i className="material-icons">add</i>
                </SideNavFooter>
            </SideNavContent>
        </SideNav>
    );
}

SideNavComponent.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string,
            connected_at: PropTypes.date
        }).isRequired
    )
};

export default SideNavComponent;
