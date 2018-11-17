import React from 'react';
import styled from 'styled-components';

const SideNav = styled.nav`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    background: #1f1c1c;
    color: #ffffff;

    /* Todo: drawer on small screens */
    display: none;
    
    @media (min-width: 1200px) {
        display: block;
        width: 300px;
    }
`;
const SideNavContent = styled.div`
    position: relative;
    height: 100%;
`;

const SideNavHeader = styled.header`
    display: flex;
    align-items: center;
    padding: 16px;
    background: rgba(255,255,255,0.1);
`;
const SideNavTitle = styled.h1`
    font-size: 24px;
    margin: 0 0 4px 0;
    padding: 0;
`;
const SideNavSubtitle = styled.p`
    font-size: 16px;
    margin: 0;
    padding: 0;
`;

const SideNavFooter = styled.button`
    appearance: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: none;
    width: 100%;
    color: #ffffff;

    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    
    padding: 16px;
    border-top: 1px solid rgba(255,255,255,0.1);
    border-left: none;
    border-right: none;
    border-bottom: none;
    cursor: pointer;

    font-size: 16px;

    &:hover {
        background: rgba(255,255,255,0.1);
    }
    &:focus {
        outline-color: #ffffff;
    }
`;

const SideNavList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;
const SideNavListItem = styled.li`
    padding: 16px;

    &+& {
        border-top: 1px solid rgba(255,255,255,0.1);
    }
`;
const SideNavListItemName = styled.span`
    font-size: 16px;
    font-weight: 600;
`;

export default SideNav;
export {
    SideNavContent,

    SideNavHeader,
    SideNavTitle,
    SideNavSubtitle,
    
    SideNavFooter,

    SideNavList,
    SideNavListItem,
    SideNavListItemName
};
