import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Welcome from './components/Welcome';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" component={Welcome}/>
            </Switch>
        );
    }
}

export default withRouter(App);
