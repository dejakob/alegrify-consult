import React from 'react';
import {
    ProfileHeader,
    ProfileHeaderTitle,
    ProfileHeaderContent,
    ProfileHeaderAvatar
} from '../../ui/Profile';
import { backgroundImage } from '../../../helpers/image-helper';

function ProfileHeaderComponent(props) {
    return (
        <ProfileHeader>
            <ProfileHeaderContent>
                <ProfileHeaderAvatar
                    src={backgroundImage(props, ['user', 'avatar'], { height: 150, width: 150 })}
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
