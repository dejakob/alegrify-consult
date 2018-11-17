import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Mountains from '../../images/mountains.jpg';

const ProfileHeader = styled.header`
    display: block;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${Mountains});
`;
const ProfileHeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 32px;
    background: rgba(0,0,0,0.6);
`;
const ProfileHeaderTitle = styled.h2`
    padding: 0;
    height: auto;
    display: block;
    line-height: 48px;
    font-size: 48px;
    margin: 0;
`;

const ProfileNav = styled.nav`
    background-color: #ffffff;
`;
const ProfileNavList = styled.ul`
    display: flex;
    justify-content: flex-start;
    margin: 0;
    padding: 0;
    list-style: none;
`;
const ProfileNavListItem = styled.li`
    & + & {
        border-left: 1px rgba(0,0,0,0.1) solid;
    }
`;
const ProfileNavListItemLink = styled(Link)`
    display: block;
    padding: 16px 32px;
    color: #1f1c1c;
    text-decoration: none;
`;

export {
    ProfileHeader,
    ProfileHeaderContent,
    ProfileHeaderTitle,

    ProfileNav,
    ProfileNavList,
    ProfileNavListItem,
    ProfileNavListItemLink
};
