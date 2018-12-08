import React from 'react';
import { Grid, Article, Aside, Section } from 'react-alegrify-ui';
import moment from 'moment';
import { LineChart, Line } from 'recharts';
import Thought from './Thought';

const mockThoughts = [
    {
        id: 'test_id',
        thought: 'Just a thought',
        thought_event: 'Because of this',
        my_mood: 6,
        created_at: '2018-07-03T18:30:00',
        reflections: []
    }
]

function Thoughts(props) {
    const chartData = props.user.thoughts && props.user.thoughts.map(mood =>
        ({ my_mood: Number(mood.my_mood), created_at: moment(mood.created_at).format('ddd, hA') })
    );

    return (
        <Grid
            reverse
        >
            <Aside
                className="alegrify-grid__cell alegrify-grid__cell--4 alegrify-space--extra-large"
            >
                <Section>
                    <LineChart width={240} height={160} data={chartData}>
                        <Line type="monotone" dataKey="my_mood" stroke="#8884d8" dot={false} />
                    </LineChart>
                </Section>
            </Aside>
            <Article
                user={props.user}
                className="alegrify-grid__cell alegrify-grid__cell--8"
            >
                {props.user.thoughts && props.user.thoughts.map((thought, index) => (
                    <Thought
                        key={index}
                        user={props.user}
                        className="alegrify-space--extra-large"
                        id={thought._id}
                        {...thought}
                    />
                ))}
            </Article>
        </Grid>
    );
}

export default Thoughts;
