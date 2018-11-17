import React, { Component } from 'react';
import {
    Aside,
    Article,
    Button,
    Grid,
    Section,

    Dl,
    Dt,
    Dd,

    Input,
    Label
} from 'react-alegrify-ui';
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
    ProfileHeaderAvatar,
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
                            <ProfileHeaderAvatar
                                src="https://source.unsplash.com/150x150/?person&time=5645656"
                                alt="avatar"
                                height="150"
                                width="150"
                            />
                            <ProfileHeaderTitle>
                                Firstname Lastname
                            </ProfileHeaderTitle>
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
                            className="alegrify-grid__cell alegrify-grid__cell--4 alegrify-space--extra-large"
                        >
                            <Section>
                                <Dl>
                                    <Dt>First name</Dt>
                                    <Dd>Jakob</Dd>
                                    <Dt>Last name</Dt>
                                    <Dd>Kerkhove</Dd>
                                    <Dt>Email</Dt>
                                    <Dd>jakob.kerkhove@gmail.com</Dd>
                                </Dl>
                            </Section>
                        </Aside>
                        <Article
                            className="alegrify-grid__cell alegrify-grid__cell--8"
                        >
                            <Section>
                                <form
                                    method="POST"
                                >
                                    <Label
                                        htmlFor="notes"
                                    >
                                        Notes
                                    </Label>
                                    <Input
                                        name="notes"
                                        id="notes"
                                        multiline
                                        full
                                        placeholder="Feel free to leave some notes (private information)"
                                        className="alegrify-space--large"
                                    />
                                    <Button
                                        type="submit"
                                        primary
                                    >
                                        Save
                                    </Button>
                                </form>
                            </Section>
                        </Article>
                    </Grid>
                </SideNavAwareMain>
            </React.Fragment>
        );
    }
}

export default Dashboard;
