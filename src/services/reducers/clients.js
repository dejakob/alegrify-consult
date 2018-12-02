import { ACTIONS } from './config';
const INITIAL_STATE =  {
    loading: false,
    clients: []
};

function clientsReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ACTIONS.CLIENTS_LOAD_ALL:
            return {
                ...state,
                loading: true
            };

        case ACTIONS.CLIENTS_LOAD_ALL_SUCCESS:
            return {
                ...state,
                loading: false,
                clients: action.clients
            };

        case ACTIONS.CLIENTS_LOAD_ALL_FAILED:
            return {
                ...state,
                loading: false
            };

        case ACTIONS.CLIENT_LOAD_ANSWERS:
            return {
                ...state,
                loading: true
            };
        
        case ACTIONS.CLIENT_LOAD_ANSWERS_SUCCESS:
            return {
                ...state,
                clients: [
                    ...state.clients.map(client =>
                        action.clientId === client._id ? {
                            ...client,
                            answers: action.answers
                        } : client
                    )
                ],
                loading: false
            }

        case ACTIONS.CLIENT_LOAD_ANSWERS_FAILED:
            return {
                ...state,
                loading: false,
            };

        default:
            return state;
    }
}

export default clientsReducer;
