import React, { Component } from 'react';
import { Button, HistoricItem } from 'react-alegrify-ui';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ThoughtDetail from './ThoughtDetail';
import { translate } from '../../../../helpers/language';

/**
 * <Thought />
 */
class Thought extends Component {
    render() {
        return (
            <HistoricItem
                className={this.props.className}
                date={this.props.created_at}
            >
                <div 
                    className="alegrify-space--extra-large"
                >
                    <ThoughtDetail
                        {...this.props}
                    />
                </div>

                <Link
                    to={`/dashboard/${this.props.user.user_name}/thought/${this.props.id}`}
                    title={translate('PROFILE.SEE_REFLECTIONS')}
                >
                    <Button
                        secondary
                        full
                    >
                        {translate('PROFILE.SEE_REFLECTIONS')}
                    </Button>
                </Link>
            </HistoricItem>
        )
    }
};

Thought.propTypes = {
    id: PropTypes.string.isRequired,
    user: PropTypes.object.isRequired,
    thought: PropTypes.string.isRequired,
    thought_event: PropTypes.string.isRequired,
    my_mood: PropTypes.number.isRequired,
    created_at: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    className: PropTypes.string
}

export default Thought;
