import bugsnag from '@bugsnag/js';
import bugsnagReact from '@bugsnag/plugin-react';
import React from 'react';

const bugsnagClient = bugsnag('87d267b45b5c67b188938724ce5528b6');
bugsnagClient.use(bugsnagReact, React);

const ErrorBoundary = process.env.NODE_ENV === 'production' ?
    bugsnagClient.getPlugin('react') :
    props => props.children;

function errorLog(error) {
    if (process.env.NODE_ENV !== 'production') {
        return false;
    }

    try {
        bugsnagClient.notify(error);
    }
    catch (ex) {}
}

export {
    ErrorBoundary,
    errorLog
};
