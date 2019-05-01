import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Section, H2, P, Button } from 'react-alegrify-ui';
import { SideNavAwareMain } from '../../ui/SideNav';
import { translate } from '../../../helpers/language';

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
                    <H2>{translate('DASHBOARD.LANDING_TITLE')}</H2>

                    <P>{translate('DASHBOARD.LANDING_SELECT_INFO')}</P>

                    <Link
                        to="/dashboard/connect"
                    >
                        <Button
                            primary
                            full
                        >
                            {translate('DASHBOARD.LANDING_CONNECT')}
                        </Button>
                    </Link>
                </Section>
            </Flex>
        </SideNavAwareMain>
    )
}

export default Landing;