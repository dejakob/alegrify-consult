import React from 'react';
import { Grid, Article, Aside, Section } from 'react-alegrify-ui';
import Thought from './Thought';

const mockThoughts = [
    {
        id: 'test_id',
        thought: 'Just a thought',
        thought_event: 'Because of this',
        my_mood: 6,
        createdAt: '2018-07-03T18:30:00',
        reflections: []
    }
]

function Thoughts(props) {
    return (
        <Grid
            reverse
        >
            <Aside
                className="alegrify-grid__cell alegrify-grid__cell--4 alegrify-space--extra-large"
            >
                <Section>
                    Show mood graph...
                </Section>
            </Aside>
            <Article
                user={props.user}
                className="alegrify-grid__cell alegrify-grid__cell--8"
            >
                <Thought
                    {...mockThoughts[0]}
                />
            </Article>
        </Grid>
    );
}

export default Thoughts;