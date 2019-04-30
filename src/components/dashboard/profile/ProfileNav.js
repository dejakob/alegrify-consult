import React from 'react';
import {
    ProfileNav,
    ProfileNavList,
    ProfileNavListItem,
    ProfileNavListItemLink
} from '../../ui/Profile';
import { translate } from '../../../helpers/language';

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
                        {translate('PROFILE.NAV_OVERVIEW')}
                    </ProfileNavListItemLink>
                </ProfileNavListItem>
                <ProfileNavListItem>
                    <ProfileNavListItemLink
                        to={`/dashboard/${props.user.user_name}/thoughts`}
                    >
                        {translate('PROFILE.NAV_THOUGHTS')}
                    </ProfileNavListItemLink>
                </ProfileNavListItem>
                <ProfileNavListItem>
                    <ProfileNavListItemLink
                        to={`/dashboard/${props.user.user_name}/personality`}
                    >
                        {translate('PROFILE.NAV_PERSONALITY')}
                    </ProfileNavListItemLink>
                </ProfileNavListItem>
                <ProfileNavListItem>
                    <ProfileNavListItemLink
                        to={`/dashboard/${props.user.user_name}/settings`}
                    >
                        {translate('PROFILE.NAV_SETTINGS')}
                    </ProfileNavListItemLink>
                </ProfileNavListItem>
            </ProfileNavList>
        </ProfileNav>
    );
}

export default ProfileNavComponent;
