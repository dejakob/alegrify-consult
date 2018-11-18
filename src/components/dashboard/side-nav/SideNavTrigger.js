import React from 'react';
import SideNav from './SideNav';
import { SideNavTrigger } from '../../ui/SideNav';

function SideNavTriggerComponent(props) {
    return (
        <SideNavTrigger
            onClick={() => SideNav.factory.instance.open()}
        >
            <i className="material-icons">menu</i>
        </SideNavTrigger>
    );
}

export default SideNavTriggerComponent;
