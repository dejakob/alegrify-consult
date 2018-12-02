import { ACTIONS } from './config';
const INITIAL_STATE =  {
    token: null,
    loading: false,
    validationErrors: {}
};

function authReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ACTIONS.AUTH_LOGIN:
            return {
                ...state,
                loading: true
            };
        
        case ACTIONS.AUTH_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                token: action.response
            };

        case ACTIONS.AUTH_LOGIN_FAILED:
            return {
                ...state,
                loading: false,
                validationErrors: action.validationErrors
            };

        default:
            return state;
    }
}

export default authReducer;
