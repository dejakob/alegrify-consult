import React, { PureComponent } from 'react';
import ThoughtDetail from '../thoughts/ThoughtDetail';
import ThoughtReflection from './ThoughtReflection';
import { Grid, Aside, Article, Section } from 'react-alegrify-ui';
import { mapStateToProps } from '../../../../services/store';

class Thought extends PureComponent {
    render () {
        const { user, thoughtId } = this.props;
        const thought = user.thoughts.find(t => t._id === thoughtId);

        if (!thought) {
            return null;
        }

        console.log('thought', thought);

        return (
            <Grid>
                <Aside
                    className="alegrify-grid__cell alegrify-grid__cell--4 alegrify-space--extra-large"
                >
                    <Section
                        className="alegrify-space--extra-large"
                    >
                        <ThoughtDetail
                            id={thought._id}
                            user={user}
                            {...thought}
                        />
                    </Section>
                </Aside>
                <Article
                    className="alegrify-grid__cell alegrify-grid__cell--8 alegrify-space--extra-large"
                >
                    {thought.reflections.map((reflection, index) => (
                        <Section
                            key={index}
                            className="alegrify-space--large"
                        >
                            <ThoughtReflection
                                id={reflection._id}
                                {...reflection}
                            />
                        </Section>
                    ))}
                </Article>
            </Grid>
        );
    }
}

export default mapStateToProps(Thought, ['clients']);
