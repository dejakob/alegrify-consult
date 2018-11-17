import React, { Component } from 'react';
import SideNav, {
    SideNavContent,

    SideNavHeader,
    SideNavTitle, 
    SideNavSubtitle,

    SideNavFooter,

    SideNavList,
    SideNavListItem,
    SideNavListItemName
} from './ui/SideNav';
import logo from '../logo.svg';

class Dashboard extends Component {
    render() {
        return (
            <React.Fragment>
                <SideNav>
                    <SideNavContent>
                        <SideNavHeader>
                            <img
                                src={logo}
                                alt="logo"
                                height={50}
                            />
                            <div>
                                <SideNavTitle>
                                    Alegrify
                                </SideNavTitle>
                                <SideNavSubtitle>
                                    Consult
                                </SideNavSubtitle>
                            </div>
                        </SideNavHeader>

                        <SideNavList>
                            <SideNavListItem>
                                <SideNavListItemName>Jakob Kerkhove</SideNavListItemName>
                            </SideNavListItem>
                            <SideNavListItem></SideNavListItem>
                        </SideNavList>

                        <SideNavFooter>
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
