import { ACTIONS } from './config';
import Immutable from 'immutable';
const INITIAL_STATE =  {
    loading: false,
    clients: []
};

function clientsReducer(s = INITIAL_STATE, action) {
    const state = Immutable.fromJS(s);

    switch (action.type) {
        case ACTIONS.CLIENTS_LOAD_ALL:
            return state.set('loading', true);

        case ACTIONS.CLIENTS_LOAD_ALL_SUCCESS:
            return state
                .set('loading', true)
                .update('clients', clients =>
                    clients.mergeDeep(action.clients)
                );

        case ACTIONS.CLIENTS_LOAD_ALL_FAILED:
            return state.set('loading', false);

        case ACTIONS.CLIENT_LOAD_ANSWERS:
            return state.set('loading', true);
        
        case ACTIONS.CLIENT_LOAD_ANSWERS_SUCCESS:
            return state
                .set('loading', true)
                .update('clients', clients =>
                    clients.mergeDeep(action.clients, [
                        { _id: action.clientId, answers: action.answers }
                    ])
                );

        case ACTIONS.CLIENT_LOAD_ANSWERS_FAILED:
            return state.set('loading', false);

        default:
            return state;
    }
}

export default clientsReducer;
