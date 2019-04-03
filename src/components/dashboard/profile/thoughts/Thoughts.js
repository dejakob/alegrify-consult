import React from 'react';
import { Grid, Article, Aside, Section } from 'react-alegrify-ui';
import moment from 'moment';
import { LineChart, Line } from 'recharts';
import Thought from './Thought';

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
                {props.user.thoughts && props.user.thoughts
                    .sort((thoughtA, thoughtB) => new Date(thoughtB.created_at).getTime() - new Date(thoughtA.created_at).getTime())
                    .map((thought, index) => (
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
