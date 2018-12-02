import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Aside, Grid, Section } from 'react-alegrify-ui';
import PersonalityArticle from './PersonalityArticle';


class Personality extends PureComponent {
    render() {
        const answers = this.props.user.answers || [];

        return (
            <React.Fragment>
                <Grid
                    reverse
                >
                    <Aside
                        className="alegrify-grid__cell alegrify-grid__cell--4 alegrify-space--extra-large"
                    >
                        <Section>
                        </Section>
                    </Aside>
                    <PersonalityArticle
                        answers={answers}
                    />
                </Grid>
            </React.Fragment>
        )
    }
}

Personality.propTypes = {
    user: PropTypes.object
};

export default Personality;
