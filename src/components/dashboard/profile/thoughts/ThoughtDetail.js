import React from 'react';
import moment from 'moment';
import { Dl, Dt, Dd } from 'react-alegrify-ui';
import { translate } from '../../../../helpers/language';

function ThoughtDetail(props) {
    return (
        <Dl>
            <Dt>{translate('PROFILE.THOUGHT_FEELINGS')}</Dt>
            <Dd>{props.my_mood * 10}% {(props.my_mood_type || '').toLowerCase()}</Dd>

            <Dt>{translate('PROFILE.THOUGHT_THOUGHT')}</Dt>
            <Dd>{props.thought}</Dd>

            <Dt>{translate('PROFILE.THOUGHT_EVENT')}</Dt>
            <Dd>
                {props.thought_event}
            </Dd>

            <Dt>{translate('PROFILE.THOUGHT_WHEN')}</Dt>
            <Dd>
                {moment(props.created_at).format('dddd, MMMM Do YYYY, h:mm:ss a')}
            </Dd>
        </Dl>
    );
}

export default ThoughtDetail;