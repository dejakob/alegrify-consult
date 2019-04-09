import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import SignUpConfirm from './signup/Confirm';
import SignupVerify from './signup/Verify';
import SignupWelcome from './signup/Welcome';
import { Main } from 'react-alegrify-ui';

class SignUp extends PureComponent {
    render() {
        return (
            <Main>
                <Switch>
                    <Route path={`/signup/confirm/:code`} component={() => <SignUpConfirm />} />
                    <Route path={`/signup/verify/:name`} component={() => <SignupVerify />} />
                    <Route path={`/signup`} component={() => <SignupWelcome />} />
                </Switch>
            </Main>
        )
    }
}

export default SignUp;
