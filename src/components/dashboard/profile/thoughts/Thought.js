import React, { Component } from 'react';
import moment from 'moment';
import { Button, Dl, Dt, Dd, HistoricItem } from 'react-alegrify-ui';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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
                    <Dl>
                        <Dt>How did I feel?</Dt>
                        <Dd>{this.props.my_mood} / 10</Dd>

                        <Dt>What was I thinking?</Dt>
                        <Dd>{this.props.thought}</Dd>

                        <Dt>But what happened?</Dt>
                        <Dd>
                            {this.props.thought_event}
                        </Dd>

                        <Dt>When was this written?</Dt>
                        <Dd>
                            {moment(this.props.created_at).format('dddd, MMMM Do YYYY, h:mm:ss a')}
                        </Dd>
                    </Dl>
                </div>

                <Link
                    to={`/dashboard/${this.props.user.user_name}/thought/${this.props.id}`}
                    title="See reflections"
                >
                    <Button
                        secondary
                        full
                    >
                        See reflections
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
