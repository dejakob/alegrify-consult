import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Welcome from './components/Welcome';
import Dashboard from './components/Dashboard';
import ApiHelper from './helpers/api';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route path="/dashboard" component={Auth(Dashboard)} />
                <Route path="/" component={Welcome} />
            </Switch>
        );
    }
}

function Auth(component) {
    if (ApiHelper.isLoggedIn) {
        return props => <component {...props} />;
    }
    
    return props => <Redirect to="/" />;
}

export default withRouter(App);
