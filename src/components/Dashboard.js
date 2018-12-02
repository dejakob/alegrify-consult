import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import SideNav from './dashboard/side-nav/SideNav';
import SideNavTrigger from './dashboard/side-nav/SideNavTrigger';
import Profile from './dashboard/profile/Profile';
import Connect from './dashboard/connect/Connect';

import Api from '../helpers/api';
import store, { mapStateToProps, ACTIONS } from '../services/store';

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
        try {
            store.dispatch({ type: ACTIONS.CLIENTS_LOAD_ALL });
            const { clients } = await Api.get('/api/clients');
            store.dispatch({ type: ACTIONS.CLIENTS_LOAD_ALL_SUCCESS, clients });
        }
        catch (ex) {
            store.dispatch({ type: ACTIONS.CLIENTS_LOAD_ALL_FAILED });
        }

        const userId = this.props.match.params.user;

        if (userId && this.props.location.pathname.indexOf('/personality') > -1) {
            try {
                store.dispatch({ type: ACTIONS.CLIENT_LOAD_ANSWERS });
                const answers = await Api.get(`/api/answers/${userId}`);
                store.dispatch({
                    type: ACTIONS.CLIENT_LOAD_ANSWERS_SUCCESS,
                    clientId: userId,
                    answers
                });
            }
            catch (ex) {
                store.dispatch({
                    type: ACTIONS.CLIENT_LOAD_ANSWERS_FAILED
                });
            }
        }
    }

    render() {
        const userId = this.props.match.params.user;
        const user = this.props.clients.clients.find(user => user._id === userId);

        return (
            <React.Fragment>
                <StickyHeader>
                    <SideNavTrigger />
                    <span>Alegrify Consult</span>
                </StickyHeader>
                <SideNav
                    users={this.props.clients.clients}
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

export default mapStateToProps(Dashboard, ['clients']);
