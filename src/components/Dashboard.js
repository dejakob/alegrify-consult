import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import SideNav from './dashboard/side-nav/SideNav';
import SideNavTrigger from './dashboard/side-nav/SideNavTrigger';
import Profile from './dashboard/profile/Profile';
import Connect from './dashboard/connect/Connect';

import Api from '../helpers/api';

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
    async componentWillMount() {
        this.setState({
            isLoadingClients: true,
            clients: []
        })

        // Todo redux
        try {
            const response = await Api.get('/api/clients');
            this.setState({
                isLoadingClients: false,
                clients: response.clients
            });
        }
        catch (ex) {
            console.log('ex', ex);
            this.setState({
                isLoadingClients: false
            });
        }
    }

    render() {
        const userId = this.props.match.params.user;
        const user = this.state.clients.find(user => user._id === userId);

        return (
            <React.Fragment>
                <StickyHeader>
                    <SideNavTrigger />
                    <span>Alegrify Consult</span>
                </StickyHeader>
                <SideNav
                    users={this.state.clients}
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
