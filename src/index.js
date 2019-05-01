import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// import * as serviceWorker from './serviceWorker';
import '../node_modules/alegrify-ui/alegrify-ui.min.css';
import { ErrorBoundary } from './helpers/logger';

ReactDOM.render(
    <BrowserRouter>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();


// TODO: never use cookies for JSONP API lib!!!!