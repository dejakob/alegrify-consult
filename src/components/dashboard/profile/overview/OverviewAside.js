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
                    <Dd>{props.user.first_name}</Dd>
                    <Dt>Last name</Dt>
                    <Dd>{props.user.last_name}</Dd>
                    <Dt>Email</Dt>
                    <Dd>{props.user.email}</Dd>
                </Dl>
            </Section>
        </Aside>
    );
}

export default OverviewAside;
