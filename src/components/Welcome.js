import React, { Component } from 'react';
import { Button, Grid, H1, Main, Section, Label, Input } from 'react-alegrify-ui';
import logo from '../logo.svg';

class Welcome extends Component {
    constructor() {
        super();

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(eventData) {
        eventData.preventDefault();

        if (window.Alegrify && window.Alegrify.ConsultApi.Public) {
            const { Public } = window.Alegrify.ConsultApi;

            Public.login(this.email, this.password);
        }
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
                                    onValueChange={val => this.email = val}
                                />
    
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
                                    onValueChange={val => this.password = val}
                                />
    
                                <Button
                                    type="submit"
                                    primary
                                    full
                                >
                                    Log in
                                </Button>
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
