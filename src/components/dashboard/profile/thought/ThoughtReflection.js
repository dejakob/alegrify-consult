import React from 'react';
import moment from 'moment';
import { Dl, Dt, Dd } from 'react-alegrify-ui';
import { translate } from '../../../../helpers/language';

function ThoughtReflection(props) {
    return (
        <Dl>
            <Dt>{translate('PROFILE.REFLECTION')}</Dt>
            <Dd>{props.reflection}</Dd>

            <Dt>{translate('PROFILE.REFLECTION_RELIABLE')}</Dt>
            <Dd>{props.reliability}</Dd>

            <Dt>{translate('PROFILE.REFLECTION_WHEN')}</Dt>
            <Dd>
                {moment(props.created_at).format('dddd, MMMM Do YYYY, h:mm:ss a')}
            </Dd>
        </Dl>
    );
}

export default ThoughtReflection;
