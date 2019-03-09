import React, { PureComponent } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import SideNav from './dashboard/side-nav/SideNav';
import SideNavTrigger from './dashboard/side-nav/SideNavTrigger';
import Profile from './dashboard/profile/Profile';
import Connect from './dashboard/connect/Connect';
import Pending from './dashboard/connect/pending/Pending';

import Api from '../helpers/api';
import store, { mapStateToProps, ACTIONS } from '../services/store';
import Landing from './dashboard/landing/Landing';

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

class Dashboard extends PureComponent {
    async componentWillMount() {
        try {
            store.dispatch({ type: ACTIONS.CLIENTS_LOAD_ALL });
            const { clients } = await Api.get('/api/clients');
            store.dispatch({ type: ACTIONS.CLIENTS_LOAD_ALL_SUCCESS, clients });
        }
        catch (ex) {
            store.dispatch({ type: ACTIONS.CLIENTS_LOAD_ALL_FAILED });
        }

        const userName = this.props.match.params.user;
        const user = this.props.clients.clients && this.props.clients.clients.find(user => user.user_name === userName);
        const userId = user && user._id;

        if (userId) {
            if (this.props.location.pathname.indexOf('/personality') > -1) {
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

            if (this.props.location.pathname.indexOf('/thoughts') > -1) {
                try {
                    store.dispatch({ type: ACTIONS.CLIENT_LOAD_THOUGHTS });
                    const thoughts = await Api.get(`/api/thoughts/${userId}`);
                    store.dispatch({
                        type: ACTIONS.CLIENT_LOAD_THOUGHTS_SUCCESS,
                        clientId: userId,
                        thoughts
                    });
                }
                catch (ex) {
                    store.dispatch({
                        type: ACTIONS.CLIENT_LOAD_THOUGHTS_FAILED
                    });
                }
            }

            if (this.props.match.path === '/dashboard/:user?' && !user.notes) {
                try {
                    store.dispatch({ type: ACTIONS.CLIENT_LOAD_NOTES_ABOUT });
                    const notes = (await Api.get(`/api/consult/notes/${userId}`)).content;
                    store.dispatch({
                        type: ACTIONS.CLIENT_LOAD_NOTES_ABOUT_SUCCESS,
                        clientId: userId,
                        notes
                    })
                }
                catch (ex) {
                    store.dispatch({
                        type: ACTIONS.CLIENT_LOAD_NOTES_ABOUT_FAILED
                    })
                }
            }

        }
    }

    render() {
        const userName = this.props.match.params.user;
        const user = this.props.clients.clients && this.props.clients.clients.find(user => user.user_name === userName);

        return (
            <React.Fragment>
                <StickyHeader>
                    <SideNavTrigger />
                    <span>Alegrify Consult</span>
                </StickyHeader>
                <SideNav
                    users={this.props.clients.clients || []}
                />

                <Route path="/dashboard/connect/pending/:connectionId" component={Pending} />
                <Route path="/dashboard/connect" component={Connect} exact />
                <Route path="/dashboard" component={() =>
                    user && user.user_name ? (
                        <Profile
                            user={user}
                        />
                    ) : (
                        <Landing />
                    )
                } exact />
            </React.Fragment>
        );
    }
}

export default mapStateToProps(Dashboard, ['clients']);
