import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../../ui/Avatar';
import {
    SideNavListItem,
    SideNavListItemLink,
    SideNavListItemContent,
    SideNavListItemName,
    SideNavListItemSince
} from '../../ui/SideNav';
import { backgroundImage } from '../../../helpers/image-helper';

/**
 * <SideNavListItemComponent />
 */
function SideNavListItemComponent(props) {
    return (
        <SideNavListItem>
            <SideNavListItemLink
                to={props.to}
                title={props.title}
            >
                <SideNavListItemContent>
                    <SideNavListItemName>
                        {props.title}
                    </SideNavListItemName>
                    <SideNavListItemSince>
                        {props.subtitle}
                    </SideNavListItemSince>
                </SideNavListItemContent>
                <Avatar
                    src={backgroundImage(props, ['avatar'], { height: 50, width: 50 })}
                    alt="avatar"
                    height={50}
                    width={50}
                />
            </SideNavListItemLink>
        </SideNavListItem>
    );
}

SideNavListItemComponent.prototype = {
    to: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    avatar: PropTypes.string
};

export default SideNavListItemComponent;