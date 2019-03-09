import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Section, H2, P, Button } from 'react-alegrify-ui';
import { SideNavAwareMain } from '../../ui/SideNav';
import { SpaceXL } from 'react-alegrify-ui/build/spacing';

const Flex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`;

function Landing() {
    return (
        <SideNavAwareMain>
            <Flex>
                <Section>
                    <H2>Welcome to Alegrify Consult!</H2>

                    <SpaceXL>
                        <P>Select a client from the side nav or</P>
                    </SpaceXL>

                    <Link
                        to="/dashboard/connect"
                    >
                        <Button
                            primary
                            full
                        >
                            Connect to someone new
                        </Button>
                    </Link>
                </Section>
            </Flex>
        </SideNavAwareMain>
    )
}

export default Landing;