import React from 'react';
import { Article } from 'react-alegrify-ui';
import OverviewNotes from './OverviewNotes';
import OverviewThoughts from './OverviewThoughts';

function OverviewArticle(props) {
    return (
        <Article
            className="alegrify-grid__cell alegrify-grid__cell--8"
        >
            <OverviewNotes />
            <OverviewThoughts />
        </Article>
    );
}

export default OverviewArticle;
