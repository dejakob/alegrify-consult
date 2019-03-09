import React from 'react';
import { createStore } from 'redux';
import authReducer from './reducers/auth';
import clientsReducer from './reducers/clients';
import { ACTIONS } from './reducers/config';

let initialState = {};

// Get initial state from sessionStorage
if (
    typeof window !== 'undefined' &&
    window.sessionStorage &&
    typeof window.sessionStorage.getItem === 'function'
) {
    initialState = JSON.parse(window.sessionStorage.getItem('app_state') || '{}');
}

const store = createStore(reducer);
store.subscribe(syncTosessionStorage);

/**
 * Sync all changes into sessionStorage to make store persistent
 */
function syncTosessionStorage() {
    const state = store.getState();

    if (
        typeof window !== 'undefined' &&
        window.sessionStorage &&
        typeof window.sessionStorage.setItem === 'function'
    ) {
        window.sessionStorage.setItem('app_state', JSON.stringify(state));
    }
}

/**
 * Root reducer
 * @param {Object} state 
 * @param {Object} action 
 */
function reducer(state = initialState, action) {
    return {
        auth: authReducer(state.auth, action).toJS(),
        clients: clientsReducer(state.clients, action).toJS()
    }
}

/**
 * Map redux state to the props of a component
 * @param {React.Component} Component
 * @param {Array.<String>} keys [Which parts of the state do you want to update to?]
 */
function mapStateToProps(Component, keys) {
    return props => {
        return (
            <StateComponent 
                keys={keys}
                props={props}
                Component={Component}
            />
        );
    };
}

/**
 * Make component listen to store updates
 */
class StateComponent extends React.Component {
    constructor() {
        super();
        this.subscription = null;
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    componentWillMount() {
        this.setState({ stateProps: getStatePropsFromKeys(this.props.keys) });
        this.subscription = store.subscribe(this.handleUpdate);
    }

    componentWillUnmount() {
        if (typeof this.subscription === 'function') {
            this.subscription();
        }
    }

    handleUpdate() {
        const stateProps = getStatePropsFromKeys(this.props.keys);
        const isEqual = Object
            .keys(this.state.stateProps)
            .map(k => ({ key: k, value: this.state.stateProps[k] }))
            .every(item => item.value === stateProps[item.key]);

        if (!isEqual) {
            this.setState({ stateProps });
        }
    }

    render() {
        const { Component } = this.props;

        return (
            <Component
                {...this.props.props}
                {...this.state.stateProps}
            />
        );
    }
}

/**
 * Get a specific part of the redux state
 * @param {Array.<String>} keys
 * @returns {Object}
 */
function getStatePropsFromKeys(keys) {
    const state = store.getState();

    if (!keys) {
        return state;
    }

    const props = {};

    keys.map(key => props[key] = state[key]);

    return props;
}

export default store;
export {
    ACTIONS,
    mapStateToProps
}