import React from 'react';
import styled from 'styled-components';
import { Main } from 'react-alegrify-ui';
import { Link } from 'react-router-dom';

const SideNav = styled.nav`
    position: fixed;
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
    background: #3e3838;
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

const SideNavFooter = styled(Link)`
    appearance: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: none;
    width: 100%;
    background: #1f1c1c;
    color: #ffffff;

    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    
    padding: 16px;
    border-top: 1px solid rgba(255,255,255,0.1);
    border-left: none;
    border-right: none;
    border-bottom: none;
    cursor: pointer;

    font-size: 16px;

    box-sizing: border-box;
    text-decoration: none;

    &:hover,
    &:active {
        background: #3e3838;
    }
    &:focus {
        outline-color: #ffffff;
    }
`;

const SideNavList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    height: calc(100vh - 140px);
    overflow: auto;
`;
const SideNavListItem = styled.li`
    &+& {
        border-top: 1px solid rgba(255,255,255,0.1);
    }
`;
const SideNavListItemLink = styled(Link)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;
    text-decoration: none;
    padding: 16px;

    &:focus {
        outline-color: #ffffff;
    }
    &:hover {
        opacity: 0.8;
    }
    &:active {
        opacity: 0.6;
    }
`;
const SideNavListItemContent = styled.div`

`;
const SideNavListItemName = styled.span`
    display: block;
    font-size: 16px;
    font-weight: 600;
`;
const SideNavListItemSince = styled.span`
    display: block;
    font-size: 12px;
    font-style: italic;
`;

const SideNavAwareMain = (props) => {
    const Outer = styled.div`
        @media (min-width: 1200px) {
            margin-left: 300px;
        }

        .alegrify-main {
            margin-top: 0;
        }
    `;

    return (
        <Outer>
            <Main>
                {props.children}
            </Main>
        </Outer>
    )
}

export default SideNav;
export {
    SideNavContent,

    SideNavHeader,
    SideNavTitle,
    SideNavSubtitle,
    
    SideNavFooter,

    SideNavList,
    SideNavListItem,
    SideNavListItemLink,
    SideNavListItemContent,
    SideNavListItemName,
    SideNavListItemSince,

    SideNavAwareMain
};
