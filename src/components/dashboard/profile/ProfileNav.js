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
                <ProfileNavListItem>
                    <ProfileNavListItemLink
                        to={`/dashboard/${props.user._id}/personality`}
                    >
                        Personality
                    </ProfileNavListItemLink>
                </ProfileNavListItem>
            </ProfileNavList>
        </ProfileNav>
    );
}

export default ProfileNavComponent;
