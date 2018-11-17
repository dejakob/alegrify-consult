import React, { Component } from 'react';

import SideNav from './dashboard/side-nav/SideNav';
import Profile from './dashboard/profile/Profile';

const mockUsers = [
    { _id: '2313234', name: 'Jakob Kerkhove', avatar: 'https://source.unsplash.com/50x50/?person&time=2313234', connected_at: '2018-05-03T00:00:00' },
    { _id: '2313299', name: 'Jos Geyssen', avatar: 'https://source.unsplash.com/50x50/?person&time=2313299', connected_at: '2018-06-01T00:00:00' },
]

class Dashboard extends Component {
    render() {
        const userId = this.props.match.params.user;
        const user = mockUsers.find(user => user._id === userId);
        
        return (
            <React.Fragment>
                <SideNav
                    users={mockUsers}
                />

                {user ? (
                    <Profile
                        user={user}
                    />
                ) : null}
            </React.Fragment>
        );
    }
}

export default Dashboard;
