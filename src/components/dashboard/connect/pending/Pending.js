import React from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { Section, Button } from 'react-alegrify-ui';
import { SideNavAwareMain } from '../../../ui/SideNav';
import store, { mapStateToProps, ACTIONS } from '../../../../services/store';
import { translate } from '../../../../helpers/language';
import Api from '../../../../helpers/api';

const Flex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`;
const Icon = styled.span`
    display: block;
    text-align: center;
    padding: 32px 0;

    > i {
        font-size: 72px;
        opacity: 0.2;
    }
    &+span {
        display: block;
        padding: 16px;
    }
`;

function Pending(props) {
    const { connectionId } = props.match.params;
    const pendingConnection = props.clients.clients
        .find(client => client._id === connectionId);

    if (!pendingConnection) {
        return (
            <Redirect to="/dashboard" />
        )
    }
//loading={props.clients.loading}
    return (
        <SideNavAwareMain>
            {pendingConnection.pendingType === 'connect2client' ? (
                <PendingWaiting
                    
                    onCancel={() => cancelProposal(connectionId)}
                />
            ) : (
                <PendingAccept />
            )}
        </SideNavAwareMain>
    );

    async function cancelProposal(connectionId) {
        try {
            const pendingConnection = props.clients.clients
                .find(client => client._id === connectionId);
            store.dispatch({ type: ACTIONS.CONNECT_CANCEL });
            await Api.delete(`/api/connect/${connectionId}`);
            store.dispatch({
                type: ACTIONS.CONNECT_CANCEL_SUCCESS,
                email: pendingConnection.email
            });
        }
        catch (ex) {
            store.dispatch({ type: ACTIONS.CONNECT_CANCEL_FAILED });
        }
    }
}

function PendingWaiting(props) {
    return (
        <Flex>
            <Section>
                <Icon>
                    <i className="material-icons">lock</i>
                </Icon>
                <span>{translate('DASHBOARD.USER_NEEDS_TO_ACCEPT')}</span>
                <Button
                    destructive
                    full
                    onClick={props.onCancel}
                    disabled={props.loading}
                >
                    {translate('DASHBOARD.USER_CANCEL_PENDING')}
                </Button>
            </Section>
        </Flex>
    );
}

function PendingAccept() {
    return null;
}

export default mapStateToProps(Pending, ['clients']);
