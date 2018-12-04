import React, { PureComponent } from 'react';
import ThoughtDetail from '../thoughts/Thought';
import { Grid, Aside, Article } from 'react-alegrify-ui';
import { mapStateToProps } from '../../../../services/store';

class Thought extends PureComponent {
    render () {
        const { user, thoughtId } = this.props;
        const thought = user.thoughts.find(t => t._id === thoughtId);

        if (!thought) {
            return null;
        }

        return (
            <Grid
                reverse    
            >
                <Aside
                    className="alegrify-grid__cell alegrify-grid__cell--4 alegrify-space--extra-large"
                ></Aside>
                <Article
                    className="alegrify-grid__cell alegrify-grid__cell--8 alegrify-space--extra-large"
                >
                    <ThoughtDetail
                        id={thought._id}
                        user={user}
                        className="alegrify-space--extra-large"
                        {...thought}
                    />
                </Article>
            </Grid>
        );
    }
}

export default mapStateToProps(Thought, ['clients']);
