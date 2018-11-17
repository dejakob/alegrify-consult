import React from 'react';
import {
    Aside,
    Article,
    Button,
    Grid,
    Section,
    Checkbox,

    Dl,
    Dt,
    Dd,

    Input,
    Label
} from 'react-alegrify-ui';
import { SideNavAwareMain } from '../../ui/SideNav';
import {
    ProfileHeader,
    ProfileHeaderTitle,
    ProfileHeaderContent,
    ProfileHeaderAvatar,
    ProfileNav,
    ProfileNavList,
    ProfileNavListItem,
    ProfileNavListItemLink
} from '../../ui/Profile';

function Profile(props) {
    return (
        <SideNavAwareMain>
            <ProfileHeader>
                <ProfileHeaderContent>
                    <ProfileHeaderAvatar
                        src={props.user.avatar}
                        alt="avatar"
                        height="150"
                        width="150"
                    />
                    <ProfileHeaderTitle>
                        {props.user.name}
                    </ProfileHeaderTitle>
                </ProfileHeaderContent>
            </ProfileHeader>

            <ProfileNav
                className="alegrify-space--extra-large"
            >
                <ProfileNavList>
                    <ProfileNavListItem>
                        <ProfileNavListItemLink
                            to={`/dashboard/${props.user._id}`}
                        >
                            Overview
                        </ProfileNavListItemLink>
                    </ProfileNavListItem>
                    <ProfileNavListItem>
                        <ProfileNavListItemLink
                            to={`/dashboard/${props.user._id}/thoughts`}
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
                    <Section
                        className="alegrify-space--extra-large"
                    >
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

                    <Section>
                        <form
                            method="POST"
                        >
                            <Label
                                htmlFor="modules_thoughts"
                                className="alegrify-space--large"
                            >
                                Active modules
                            </Label>
                            <Checkbox
                                name="modules"
                                id="modules_thoughts"
                                value="thoughts"
                                disabled
                                checked
                                className="alegrify-space--large"
                            >
                                Thoughts
                            </Checkbox>
                            <Checkbox
                                name="modules"
                                id="modules_lifeline"
                                value="lifeline"
                                className="alegrify-space--large"
                            >
                                Lifeline (coming soon)
                            </Checkbox>
                            <Checkbox
                                name="modules"
                                id="modules_activities"
                                value="activities"
                                className="alegrify-space--large"
                            >
                                Activity Discovery (coming soon)
                            </Checkbox>

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
    );
}

export default Profile;
