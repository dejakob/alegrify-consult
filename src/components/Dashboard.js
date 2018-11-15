import React, { Component } from 'react';
import { H1, H2 } from 'react-alegrify-ui';
import SideNav from './ui/SideNav';

class Dashboard extends Component {
    render() {
        return (
            <React.Fragment>
                <SideNav>
                    
                    <H1>Alegrify</H1>
                    <H2>Council</H2>
                </SideNav>
            </React.Fragment>
        );
    }
}

export default Dashboard;
