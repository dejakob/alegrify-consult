import { ACTIONS } from './config';
import Immutable from 'immutable';
const INITIAL_STATE =  {
    token: null,
    loading: false,
    validationErrors: {}
};

function authReducer(s = INITIAL_STATE, action) {
    const state = Immutable.fromJS(s);

    switch (action.type) {
        case ACTIONS.AUTH_LOGIN:
            return state.set('loading', true);
        
        case ACTIONS.AUTH_LOGIN_SUCCESS:
            return state
                .set('loading', false)
                .set('token', action.response);

        case ACTIONS.AUTH_LOGIN_FAILED:
            return state
                .set('loading', false)
                .set('validationErrors', action.validationErrors);

        default:
            return state;
    }
}

export default authReducer;
