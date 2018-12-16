import React, { Component } from 'react';
import { Button, Card, P, Label, Input } from 'react-alegrify-ui';
import { SideNavAwareMain } from '../../ui/SideNav';
import Api from '../../../helpers/api';
import store, { ACTIONS } from '../../../services/store';
import Mountains from '../../../images/mountains.jpg';
import LargeSpinner from '../../ui/LargeSpinner';

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
            setTimeout(() => { try { this.setState({ sent: false, sent: false }) } catch (ex) {} }, 600);
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
                            Connect
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
                To connect with an Alegrify user, please provide their email address. The user needs to accept the request before you can access any data.
            </P>

            <Label
                htmlFor="connect_email"
            >
                Email address
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
