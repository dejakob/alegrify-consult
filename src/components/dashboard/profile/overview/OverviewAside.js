import React from 'react';
import { Aside, Section, Dl, Dt, Dd } from 'react-alegrify-ui';
import { translate } from '../../../../helpers/language';

function OverviewAside(props) {
    return (
        <Aside
            className="alegrify-grid__cell alegrify-grid__cell--4 alegrify-space--extra-large"
        >
            <Section>
                <Dl>
                    <Dt>{translate('PROFILE.FIRST_NAME')}</Dt>
                    <Dd>{props.user.first_name}</Dd>
                    <Dt>{translate('PROFILE.LAST_NAME')}</Dt>
                    <Dd>{props.user.last_name}</Dd>
                    <Dt>{translate('PROFILE.EMAIL')}</Dt>
                    <Dd>{props.user.email}</Dd>
                </Dl>
            </Section>
        </Aside>
    );
}

export default OverviewAside;
