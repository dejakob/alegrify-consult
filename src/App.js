import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Welcome from './components/Welcome';
import Dashboard from './components/Dashboard';
import SignUp from './components/SignUp';
import ApiHelper from './helpers/api';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route path="/dashboard/:user?" component={Auth(Dashboard)} />
                <Route path="/signup" component={SignUp} />
                <Route path="/" component={Welcome} />
            </Switch>
        );
    }
}

function Auth(Component) {
    if (ApiHelper.isLoggedIn) {
        return props => <Component {...props} />;
    }
    
    return props => <Redirect to="/" />;
}

export default withRouter(App);
