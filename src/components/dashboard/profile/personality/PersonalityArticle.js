import React from 'react';
import PropTypes from 'prop-types';
import { Article, Dl, Dt, Dd, Section } from 'react-alegrify-ui';

/**
 * <PersonalityArticle />
 */
function PersonalityArticle(props) {
    return (
        <Article
            className="alegrify-grid__cell alegrify-grid__cell--8"
        >
            <Section>
                <Dl>
                    {props.answers.map(answer => (
                        <React.Fragment>     
                            <Dt>{answer.question}</Dt>
                            <Dd>{answer.answer}</Dd>
                        </React.Fragment>
                    ))}
                </Dl>
            </Section>
        </Article>
    )
}

PersonalityArticle.propTypes = {
    answers: PropTypes.array
};

export default PersonalityArticle;
