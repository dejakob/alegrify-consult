import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Aside, Grid, Section } from 'react-alegrify-ui';
import PersonalityArticle from './PersonalityArticle';
import { translate } from '../../../../helpers/language';


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
                        {translate('PROFILE.PERSONALITY_INFO')}
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
