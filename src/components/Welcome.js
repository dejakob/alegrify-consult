import React, { Component } from 'react';
import { Button, Grid, H1, Main, Section, Label, Input } from 'react-alegrify-ui';
import logo from '../logo.svg';
import Api from '../helpers/api';

// Todo: clientside validation

class Welcome extends Component {
    constructor() {
        super();

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        this.setState({
            isLoading: false,
            email: '',
            password: '',
            validationErrors: {}
        });
    }

    async handleSubmit(eventData) {
        eventData.preventDefault();

        try {
            this.setState({ isLoading: true, validationErrors: {} });
            await Api.login(this.state.email, this.state.password);
            this.setState({ isLoading: false });
            this.props.history.push('/dashboard');
        }
        catch (ex) {
            if (ex && ex.validation_errors) {
                this.setState({
                    validationErrors: ex.validation_errors,
                    isLoading: false
                });
            }
            else {
                this.setState({ isLoading: false });
            }
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
                                    className={this.state.validationErrors.email ? 'alegrify-space--large' : ''}
                                >
                                    {this.state.validationErrors.email}
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
                                    className={this.state.validationErrors.password ? 'alegrify-space--large' : ''}
                                >
                                    {this.state.validationErrors.password}
                                </Label>
    
                                <Button
                                    type="submit"
                                    primary
                                    full
                                    loading={this.state.isLoading}
                                    disabled={!this.isValid || this.state.isLoading}
                                >
                                    Log in
                                </Button>
                                <Label
                                    error
                                    htmlFor="login_user_name"
                                >
                                    {this.state.validationErrors.is_consult}
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


export default Welcome;
