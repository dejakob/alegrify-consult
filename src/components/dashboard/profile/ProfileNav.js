import React from 'react';
import {
    ProfileNav,
    ProfileNavList,
    ProfileNavListItem,
    ProfileNavListItemLink
} from '../../ui/Profile';

function ProfileNavComponent(props) {
    return (
        <ProfileNav
            className="alegrify-space--extra-large"
        >
            <ProfileNavList>
                <ProfileNavListItem>
                    <ProfileNavListItemLink
                        to={`/dashboard/${props.user.user_name}`}
                    >
                        Overview
                    </ProfileNavListItemLink>
                </ProfileNavListItem>
                <ProfileNavListItem>
                    <ProfileNavListItemLink
                        to={`/dashboard/${props.user.user_name}/thoughts`}
                    >
                        Thoughts
                    </ProfileNavListItemLink>
                </ProfileNavListItem>
                <ProfileNavListItem>
                    <ProfileNavListItemLink
                        to={`/dashboard/${props.user.user_name}/personality`}
                    >
                        Personality
                    </ProfileNavListItemLink>
                </ProfileNavListItem>
                <ProfileNavListItem>
                    <ProfileNavListItemLink
                        to={`/dashboard/${props.user.user_name}/settings`}
                    >
                        Settings
                    </ProfileNavListItemLink>
                </ProfileNavListItem>
            </ProfileNavList>
        </ProfileNav>
    );
}

export default ProfileNavComponent;
