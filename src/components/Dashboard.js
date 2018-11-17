import React, { Component } from 'react';
import SideNav, {
    SideNavContent,
    SideNavFooter,

    SideNavList
} from './ui/SideNav';
import SideNavListItem from './dashboard/SideNavListItem';
import SideNavHeader from './dashboard/SideNavHeader';

class Dashboard extends Component {
    render() {
        return (
            <React.Fragment>
                <SideNav>
                    <SideNavContent>
                        <SideNavHeader />

                        <SideNavList>
                            <SideNavListItem
                                to="/dashboard/2313234"
                                title="Jakob Kerkhove"
                                avatar="https://source.unsplash.com/50x50/?person&time=2313234"
                                subtitle="Connected since May 5th"
                            />
                            <SideNavListItem
                                to="/dashboard/5645656"
                                title="First Lastname"
                                avatar="https://source.unsplash.com/50x50/?person&time=5645656"
                                subtitle="Connected since July 26th"
                            />
                            <SideNavListItem
                                to="/dashboard/5645656"
                                title="First Lastname"
                                avatar="https://source.unsplash.com/50x50/?person&time=5645656"
                                subtitle="Connected since July 26th"
                            />
                            <SideNavListItem
                                to="/dashboard/5645656"
                                title="First Lastname"
                                avatar="https://source.unsplash.com/50x50/?person&time=5645656"
                                subtitle="Connected since July 26th"
                            />
                            <SideNavListItem
                                to="/dashboard/5645656"
                                title="First Lastname"
                                avatar="https://source.unsplash.com/50x50/?person&time=5645656"
                                subtitle="Connected since July 26th"
                            />
                            <SideNavListItem
                                to="/dashboard/5645656"
                                title="First Lastname"
                                avatar="https://source.unsplash.com/50x50/?person&time=5645656"
                                subtitle="Connected since July 26th"
                            />
                            <SideNavListItem
                                to="/dashboard/5645656"
                                title="First Lastname"
                                avatar="https://source.unsplash.com/50x50/?person&time=5645656"
                                subtitle="Connected since July 26th"
                            />
                        </SideNavList>

                        <SideNavFooter
                            to="/dashboard/create"
                        >
                            <span>
                                <strong>#</strong> clients
                            </span>
                            <i className="material-icons">add</i>
                        </SideNavFooter>
                    </SideNavContent>
                </SideNav>
            </React.Fragment>
        );
    }
}

export default Dashboard;
