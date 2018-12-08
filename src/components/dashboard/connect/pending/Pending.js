import React from 'react';
import styled from 'styled-components';
import { Section } from 'react-alegrify-ui';
import { SideNavAwareMain } from '../../../ui/SideNav';

const Flex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`;
const Icon = styled.span`
    display: block;
    text-align: center;
    padding: 32px 0;

    > i {
        font-size: 72px;
        opacity: 0.2;
    }
    &+span {
        display: block;
        padding: 16px;
    }
`;

function Pending(props) {
    return (
        <SideNavAwareMain>
            <Flex>
                <Section>
                    <Icon>
                        <i className="material-icons">lock</i>
                    </Icon>
                    <span>The user needs to accept your invitation.</span>
                </Section>
            </Flex>
        </SideNavAwareMain>
    );
}

export default Pending;
