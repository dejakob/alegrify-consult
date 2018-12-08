import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;
const scale = keyframes`
    0% {
        opacity: 1;
        transform: scale(1);
    }
    20% {
        opacity: 0;
        transform: scale(4);
    }
    21% {
        opacity: 0;
        display: none;
    }
    100% {
        opacity: 0;
        display: none;
    }
`;

const Spinner = styled.span`
    display: block;
    text-align: center;
    padding: 32px 0;

    i {
        font-size: 56px;
        animation: ${rotate} 1s infinite linear;
    }

    &.success {
        color: green;

        i {
            animation: ${scale} 2s linear;
        }
    }
`;

function LargeSpinner(props) {
    return (
        <Spinner
            className={props.success ? 'success' : ''}
        >
            <i className="material-icons">{props.success ? 'check_circle' : 'refresh'}</i>
        </Spinner>
    );
}

export default LargeSpinner;
