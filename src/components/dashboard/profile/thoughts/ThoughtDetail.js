import React from 'react';
import moment from 'moment';
import { Dl, Dt, Dd } from 'react-alegrify-ui';

function ThoughtDetail(props) {
    return (
        <Dl>
            <Dt>How did I feel?</Dt>
            <Dd>{props.my_mood} / 10</Dd>

            <Dt>What was I thinking?</Dt>
            <Dd>{props.thought}</Dd>

            <Dt>But what happened?</Dt>
            <Dd>
                {props.thought_event}
            </Dd>

            <Dt>When was this written?</Dt>
            <Dd>
                {moment(props.created_at).format('dddd, MMMM Do YYYY, h:mm:ss a')}
            </Dd>
        </Dl>
    );
}

export default ThoughtDetail;