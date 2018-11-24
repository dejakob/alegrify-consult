import React from 'react';
import {
    ProfileHeader,
    ProfileHeaderTitle,
    ProfileHeaderContent,
    ProfileHeaderAvatar
} from '../../ui/Profile';

function ProfileHeaderComponent(props) {
    return (
        <ProfileHeader>
            <ProfileHeaderContent>
                <ProfileHeaderAvatar
                    src={props.user.avatar && props.user.avatar.replace('$SIZE', '320x320')}
                    alt="avatar"
                    height="150"
                    width="150"
                />
                <ProfileHeaderTitle>
                    {props.user.name}
                </ProfileHeaderTitle>
            </ProfileHeaderContent>
        </ProfileHeader>
    );
}

export default ProfileHeaderComponent;
