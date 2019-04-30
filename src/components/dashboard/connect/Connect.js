import React, { Component } from 'react';
import { Button, Card, P, Label, Input } from 'react-alegrify-ui';
import { SideNavAwareMain } from '../../ui/SideNav';
import Api from '../../../helpers/api';
import store, { ACTIONS } from '../../../services/store';
import LargeSpinner from '../../ui/LargeSpinner';
import { translate } from '../../../helpers/language';

const Mountains = 'https://storage.googleapis.com/alegrify/core/images/mountains.jpg';

class Connect extends Component {
    constructor() {
        super();

        this.methods = {
            handleEmailChange: this.handleEmailChange.bind(this),
            handleSubmit: this.handleSubmit.bind(this)
        }
    }

    handleEmailChange(email) {
        this.email = email;
    }

    async handleSubmit(eventData) {
        eventData.preventDefault();

        try {
            store.dispatch({ type: ACTIONS.CONNECT });
            this.setState({ loading: true });
            await Api.post('/api/connect/to/client', { email: this.email });
            this.setState({ sent: true, loading: false });
            setTimeout(() => { try { this.setState({ sent: false, loading: false }) } catch (ex) {} }, 600);
            store.dispatch({ type: ACTIONS.CONNECT_SUCCESS, email: this.email });
        }
        catch (ex) {
            store.dispatch({ type: ACTIONS.CONNECT_FAILED });
        }
    }

    render() {
        return ConnectView({ ...this.props,  ...this.state, ...this.methods });
    }
}

function ConnectView(props) {
    return (
        <SideNavAwareMain>
            <form
                method="POST"
                action="#"
                onSubmit={props.handleSubmit}
            >
                <Card
                    small
                    headerImage={Mountains}
                    title="Connect"
                    footer={ (!props.loading && !props.sent) && (
                        <Button
                            type="submit"
                            primary
                            full
                        >
                            {translate('DASHBOARD.CONNECT_CTA')}
                        </Button>
                        )
                    }
                >
                    <ConnectionCardContent {...props} />
                </Card>
            </form>
        </SideNavAwareMain>
    );
}

function ConnectionCardContent(props) {
    if (props.loading || props.sent) {
        return (
            <LargeSpinner success={props.sent} />
        )
    }

    return (
        <React.Fragment>
            <P>
                {translate('DASHBOARD.CONNECT_INFO')}
            </P>

            <Label
                htmlFor="connect_email"
            >
                {translate('DASHBOARD.CONNECT_EMAIL')}
            </Label>
            <ConnectViewInput
                handleEmailChange={props.handleEmailChange}
            />
        </React.Fragment>
    );
}

class ConnectViewInput extends Component {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <Input
                id="connect_email"
                name="connect_email"
                placeholder="email@provider.com"
                onValueChange={this.props.handleEmailChange}
                type="email"
                required
                full
            />
        );
    }
}

export default Connect;
