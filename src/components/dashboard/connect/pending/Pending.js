import React from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { Section } from 'react-alegrify-ui';
import { SideNavAwareMain } from '../../../ui/SideNav';
import { mapStateToProps } from '../../../../services/store';
import { translate } from '../../../../helpers/language';

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

    return (
        <SideNavAwareMain>
            {pendingConnection.pendingType === 'connect2client' ? (
                <PendingWaiting />
            ) : (
                <PendingAccept />
            )}
        </SideNavAwareMain>
    );
}

function PendingWaiting() {
    return (
        <Flex>
            <Section>
                <Icon>
                    <i className="material-icons">lock</i>
                </Icon>
                <span>{translate('DASHBOARD.USER_NEEDS_TO_ACCEPT')}</span>
            </Section>
        </Flex>
    );
}

function PendingAccept() {
    return null;
}

export default mapStateToProps(Pending, ['clients']);
