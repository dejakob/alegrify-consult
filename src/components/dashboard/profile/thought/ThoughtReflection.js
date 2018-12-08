import React from 'react';
import moment from 'moment';
import { Dl, Dt, Dd } from 'react-alegrify-ui';

function ThoughtReflection(props) {
    console.log('reflection', props);

    return (
        <Dl>
            <Dt>Reflection</Dt>
            <Dd>{props.reflection}</Dd>

            <Dt>How reliable does the thought sound now?</Dt>
            <Dd>{props.reliability}</Dd>

            <Dt>When was this written?</Dt>
            <Dd>
                {moment(props.created_at).format('dddd, MMMM Do YYYY, h:mm:ss a')}
            </Dd>
        </Dl>
    );
}

export default ThoughtReflection;
