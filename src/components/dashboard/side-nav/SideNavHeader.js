import React from 'react';
import {
    SideNavHeader,
    SideNavTitle,
    SideNavSubtitle,
} from '../../ui/SideNav';

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
                    Alegrify
                </SideNavTitle>
                <SideNavSubtitle>
                    Consult
                </SideNavSubtitle>
            </div>
        </SideNavHeader>
    );
}

export default SideNavHeaderComponent;