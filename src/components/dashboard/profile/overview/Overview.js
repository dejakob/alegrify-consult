import React from 'react';
import { Grid } from 'react-alegrify-ui';
import OverviewAside from './OverviewAside';
import OverviewArticle from './OverviewArticle';

function Overview(props) {
    return (
        <Grid
            reverse
        >
            <OverviewAside />
            <OverviewArticle
                user={props.user}
            />
        </Grid>
    );
}

export default Overview;
