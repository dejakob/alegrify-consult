import React from 'react';
import styled from 'styled-components';
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

export {
    ProfileHeader,
    ProfileHeaderContent,
    ProfileHeaderTitle
};
