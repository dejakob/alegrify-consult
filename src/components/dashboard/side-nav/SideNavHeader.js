import React from 'react';
import {
    SideNavHeader,
    SideNavTitle,
    SideNavSubtitle,
} from '../../ui/SideNav';
import { translate } from '../../../helpers/language';

function SideNavHeaderComponent(props) {
    return (
        <SideNavHeader>
            <img
                src="https://storage.googleapis.com/alegrify/core/alegrify_first_try.svg"
                alt="logo"
                height={50}
            />
            <div>
                <SideNavTitle>
                    {translate('PROFILE.SIDENAV_TITLE')}
                </SideNavTitle>
                <SideNavSubtitle>
                    {translate('PROFILE.SIDENAV_SUBTITLE')}
                </SideNavSubtitle>
            </div>
        </SideNavHeader>
    );
}

export default SideNavHeaderComponent;