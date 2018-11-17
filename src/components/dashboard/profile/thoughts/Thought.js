import React, { Component } from 'react';
import moment from 'moment';
import { Dl, Dt, Dd, HistoricItem } from 'react-alegrify-ui';
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
                date={this.props.createdAt}
            >
                <div 
                    className="alegrify-space--large"
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
                    </Dl>
                </div>

                <Link
                    to={`/dashboard/thought/${this.props.id}`}
                    title="Reflect thought"
                >{moment(this.props.createdAt).format('dddd, MMMM Do YYYY, h:mm:ss a')}</Link>
            </HistoricItem>
        )
    }
};

Thought.propTypes = {
    id: PropTypes.string.isRequired,
    thought: PropTypes.string.isRequired,
    thought_event: PropTypes.string.isRequired,
    my_mood: PropTypes.number.isRequired,
    createdAt: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]),
    className: PropTypes.string
}

export default Thought;
