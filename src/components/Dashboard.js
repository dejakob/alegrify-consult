import React, { Component } from 'react';
import {
    Aside,
    Article,
    Grid,
    Section,
    H2
} from 'react-alegrify-ui';
import Avatar from './ui/Avatar';
import SideNav, {
    SideNavContent,
    SideNavFooter,
    SideNavList,
    SideNavAwareMain
} from './ui/SideNav';
import {
    ProfileHeader,
    ProfileHeaderTitle,
    ProfileHeaderContent,
    ProfileNav,
    ProfileNavList,
    ProfileNavListItem,
    ProfileNavListItemLink
} from './ui/Profile';
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

                <SideNavAwareMain>
                    <ProfileHeader>
                        <ProfileHeaderContent>
                            <ProfileHeaderTitle>
                                Firstname Lastname
                            </ProfileHeaderTitle>
                            <Avatar
                                src="https://source.unsplash.com/150x150/?person&time=5645656"
                                alt="avatar"
                                height="150"
                                width="150"
                            />
                        </ProfileHeaderContent>
                    </ProfileHeader>

                    <ProfileNav
                        className="alegrify-space--extra-large"
                    >
                        <ProfileNavList>
                            <ProfileNavListItem>
                                <ProfileNavListItemLink
                                    to="/dashboard/$id"
                                >
                                    Overview
                                </ProfileNavListItemLink>
                            </ProfileNavListItem>
                            <ProfileNavListItem>
                                <ProfileNavListItemLink
                                    to="/dashboard/$id/thoughts"
                                >
                                    Thoughts
                                </ProfileNavListItemLink>
                            </ProfileNavListItem>
                        </ProfileNavList>
                    </ProfileNav>

                    <Grid
                        reverse
                    >
                        <Aside
                            className="alegrify-grid__cell alegrify-grid__cell--4"
                        >
                            <Section>
                                ... aside
                            </Section>
                        </Aside>
                        <Article
                            className="alegrify-grid__cell alegrify-grid__cell--8"
                        >
                            <Section>
                                <H2>About</H2>
                            </Section>
                        </Article>
                    </Grid>
                </SideNavAwareMain>
            </React.Fragment>
        );
    }
}

export default Dashboard;
