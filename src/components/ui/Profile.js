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
    flex-direction: column;
    align-items: center;
    background: rgba(0,0,0,0.6);
    padding: 32px;

    @media (min-width: 1200px) {
        flex-direction: row;
        align-items: flex-end;
        justify-content: flex-start;
    }
`;
const ProfileHeaderTitle = styled.h2`
    padding: 0;
    height: auto;
    display: block;
    font-size: 24px;
    line-height: 28px;
    margin: 0;
    color: #ffffff;
    text-align: center;

    @media (min-width: 600px) {
        line-height: 48px;
        font-size: 48px;
        font-weight: 100;
        text-align: left;
    }
`;
const ProfileHeaderAvatar = styled.img`
    border-radius: 50%;
    margin-bottom: 16px;
    border: 2px #ffffff solid;

    @media (min-width: 1200px) {
        transform: translate(0, 100px);
        margin-right: 16px;
        border-radius: 8px;
    }
`;

const ProfileNav = styled.nav`
    background-color: #ffffff;

    @media (min-width: 600px) {
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
    }
    @media (min-width: 1200px) {
        padding-left: 170px;
    }
`;
const ProfileNavList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;

    @media (min-width: 600px) {
        display: flex;
        justify-content: flex-start;
    }
`;
const ProfileNavListItem = styled.li`
    display: block;

    & + & {
        border-top: 1px rgba(0,0,0,0.1) solid;
    }

    @media (min-width: 600px) {
        & + & {
            border-left: 1px rgba(0,0,0,0.1) solid;
        }
    }
`;
const ProfileNavListItemLink = styled(Link)`
    display: block;
    padding: 16px;
    color: #1f1c1c;
    text-decoration: none;

    &:hover {
        opacity: 0.8;
    }
    &:active {
        opacity: 0.6;
    }

    @media (min-width: 600px) {
        padding: 16px 32px;
    }
`;

export {
    ProfileHeader,
    ProfileHeaderContent,
    ProfileHeaderTitle,
    ProfileHeaderAvatar,

    ProfileNav,
    ProfileNavList,
    ProfileNavListItem,
    ProfileNavListItemLink
};
