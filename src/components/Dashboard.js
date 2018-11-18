import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import SideNav from './dashboard/side-nav/SideNav';
import SideNavTrigger from './dashboard/side-nav/SideNavTrigger';
import Profile from './dashboard/profile/Profile';
import Connect from './dashboard/connect/Connect';

const mockUsers = [
    { _id: '2313234', name: 'Jakob Kerkhove', avatar: 'https://source.unsplash.com/50x50/?person&time=2313234', connected_at: '2018-05-03T00:00:00' },
    { _id: '2313299', name: 'Jos Geyssen', avatar: 'https://source.unsplash.com/50x50/?person&time=2313299', connected_at: '2018-06-01T00:00:00' },
]

const StickyHeader = styled.header`
    position: sticky;
    z-index: 2;
    display: flex;
    align-items: center;
    background-color: #1f1c1c;
    width: 100%;
    top: 0;

    > span {
        flex: 1;
        text-align: center;
        margin-right: 60px;
        text-transform: uppercase;
        font-weight: 600;
    }

    @media (min-width: 1200px) {
        display: none;
    }
`;

class Dashboard extends Component {
    render() {
        const userId = this.props.match.params.user;
        const user = mockUsers.find(user => user._id === userId);

        return (
            <React.Fragment>
                <StickyHeader>
                    <SideNavTrigger />
                    <span>Alegrify Consult</span>
                </StickyHeader>
                <SideNav
                    users={mockUsers}
                />

                {user ? (
                    <Profile
                        user={user}
                    />
                ) : null}

                <Route path="/dashboard/connect" component={Connect} />
            </React.Fragment>
        );
    }
}

export default Dashboard;
