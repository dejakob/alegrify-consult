import React, { Component } from 'react';
import { Button, Grid, H1, Main, Section, Label, Input } from 'react-alegrify-ui';
import logo from '../logo.svg';
import Api from '../helpers/api';
import store, { ACTIONS, mapStateToProps } from '../services/store';

// Todo: clientside validation

class Welcome extends Component {
    constructor() {
        super();

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        this.setState({
            email: '',
            password: ''
        });
    }

    async handleSubmit(eventData) {
        eventData.preventDefault();

        try {
            store.dispatch({ type: ACTIONS.AUTH_LOGIN });
            const response = await Api.login(this.state.email, this.state.password);
            store.dispatch({ type: ACTIONS.AUTH_LOGIN_SUCCESS, response });
            this.props.history.push('/dashboard');
        }
        catch (ex) {
            store.dispatch({
                type: ACTIONS.AUTH_LOGIN_FAILED,
                validationErrors: ex && ex.validation_errors
            });
        }
    }

    get isValid() {
        return this.state.email &&
            this.state.email.length &&
            this.state.password &&
            this.state.password.length;
    }

    render() {
        return (
            <Main>
                <Grid
                    center
                    middle
                >
                    <div
                        className="alegrify-grid__cell--6"
                    >
                        <Grid
                            all
                            center
                        >
                            <img
                                src={logo}
                                alt="logo"
                                height={100}
                            />
                        </Grid>
    
                        <H1
                            className="alegrify-h1--thin"
                        >
                            <span 
                                style={{ color: '#ffffff', display: 'block', textAlign: 'center' }}
                            >
                                Alegrify Consult
                            </span>
                        </H1>
    
                        <Section>
                            <form
                                method="POST"
                                onSubmit={this.handleSubmit}
                            >
                                <Label
                                    htmlFor="login_user_name"
                                >
                                    Email address
                                </Label>
                                <Input
                                    name="login_user_name"
                                    id="login_user_name"
                                    placeholder="name@provider.com"
                                    className="alegrify-space--large"
                                    type="email"
                                    full
                                    required
                                    onValueChange={val => this.setState({ email: val })}
                                />
                                <Label
                                    error
                                    htmlFor="login_user_name"
                                    className={this.props.auth.validationErrors && this.props.auth.validationErrors.email ? 'alegrify-space--large' : ''}
                                >
                                    {this.props.auth.validationErrors && this.props.auth.validationErrors.email}
                                </Label>
    
                                <Label
                                    htmlFor="login_password"
                                >
                                    Password
                                </Label>
                                <Input
                                    name="login_password"
                                    id="login_password"
                                    placeholder="***"
                                    className="alegrify-space--large"
                                    full
                                    type="password"
                                    required
                                    onValueChange={val => this.setState({ password: val })}
                                />
                                <Label
                                    error
                                    htmlFor="login_password"
                                    className={this.props.auth.validationErrors && this.props.auth.validationErrors.password ? 'alegrify-space--large' : ''}
                                >
                                    {this.props.auth.validationErrors && this.props.auth.validationErrors.password}
                                </Label>
    
                                <Button
                                    type="submit"
                                    primary
                                    full
                                    loading={this.props.auth.loading}
                                    disabled={!this.isValid || this.props.auth.loading}
                                >
                                    Log in
                                </Button>
                                <Label
                                    error
                                    htmlFor="login_user_name"
                                >
                                    {this.props.auth.validationErrors && this.props.auth.validationErrors.is_consult}
                                </Label>
                            </form>
                        </Section>
    
                        {/* Todo: RTL class & move to UI lib */}
                        <p
                            style={{ textAlign: 'right' }}
                        >
                            Need an account?&nbsp;
                            <a
                                href="mailto:happy@alegrify.com"
                                title="Mail us"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: '#ffffff' }}
                            >
                                Contact us
                            </a>
                        </p>
                    </div>
                </Grid>
            </Main>
        );
    }
}


export default mapStateToProps(Welcome, ['auth']);
