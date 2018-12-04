import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Aside, Grid, Section } from 'react-alegrify-ui';
import PersonalityArticle from './PersonalityArticle';


class Personality extends PureComponent {
    render() {
        const answers = this.props.user.answers || [];

        return (
            <Grid
                reverse
            >
                <Aside
                    className="alegrify-grid__cell alegrify-grid__cell--4 alegrify-space--extra-large"
                >
                    <Section>
                        Each user answers the questions in the language of his/her preference. <br /><br />
                        When the user changes the answer of a question, the last chosen answer will be shown.
                    </Section>
                </Aside>
                <PersonalityArticle
                    answers={answers}
                />
            </Grid>
        )
    }
}

Personality.propTypes = {
    user: PropTypes.object
};

export default Personality;
