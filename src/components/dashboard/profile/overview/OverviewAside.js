import React from 'react';
import { Aside, Section, Dl, Dt, Dd } from 'react-alegrify-ui';

function OverviewAside(props) {
    return (
        <Aside
            className="alegrify-grid__cell alegrify-grid__cell--4 alegrify-space--extra-large"
        >
            <Section>
                <Dl>
                    <Dt>First name</Dt>
                    <Dd>xxx</Dd>
                    <Dt>Last name</Dt>
                    <Dd>xxx</Dd>
                    <Dt>Email</Dt>
                    <Dd>xxx@gmail.com</Dd>
                </Dl>
            </Section>
        </Aside>
    );
}

export default OverviewAside;
