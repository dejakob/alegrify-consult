import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import SignupWelcome from './signup/Welcome';
import { Main } from 'react-alegrify-ui';

class SignUp extends PureComponent {
    render() {
        return (
            <Main>
                <Switch>
                    <Route path={`/signup`} component={() => <SignupWelcome />} />
                </Switch>
            </Main>
        )
    }
}

export default SignUp;
