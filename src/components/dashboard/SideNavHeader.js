import React from 'react';
import {
    SideNavHeader,
    SideNavTitle,
    SideNavSubtitle,
} from '../ui/SideNav';
import logo from '../../logo.svg';

function SideNavHeaderComponent(props) {
    return (
        <SideNavHeader>
            <img
                src={logo}
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