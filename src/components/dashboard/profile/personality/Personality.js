import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Article, Aside, Grid, Section } from 'react-alegrify-ui';


class Personality extends Component {
    render() {
        return (
            <React.Fragment>
                <Grid
                    reverse
                >
                    <Aside
                        className="alegrify-grid__cell alegrify-grid__cell--4 alegrify-space--extra-large"
                    >
                        <Section>
                            ...
                        </Section>
                    </Aside>
                    <Article
                        className="alegrify-grid__cell alegrify-grid__cell--8"
                    >
                        ... questions...
                    </Article>
                </Grid>
            </React.Fragment>
        )
    }
}

Personality.propTypes = {
    user: PropTypes.object
};

export default Personality;
