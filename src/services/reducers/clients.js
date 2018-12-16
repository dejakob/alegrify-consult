import { ACTIONS } from './config';
import Immutable from 'immutable';
const INITIAL_STATE =  {
    loading: false,
    clients: []
};

function clientsReducer(s = INITIAL_STATE, action) {
    const state = Immutable.fromJS(s);
    let userIndex;

    switch (action.type) {
        case ACTIONS.CLIENTS_LOAD_ALL:
            return state.set('loading', true);

        case ACTIONS.CLIENTS_LOAD_ALL_SUCCESS:
            return state
                .set('loading', true)
                .set('clients', Immutable.fromJS(
                    action.clients.map(client => {
                        const originalClient = state
                            .get('clients')
                            .find(c => c.get('_id') === client._id);

                        if (!originalClient) {
                            return client;
                        }

                        return Immutable.fromJS({
                            ...client,
                            answers: originalClient.get('answers'),
                            thoughts: originalClient.get('thoughts')
                        });
                    })
                ));

        case ACTIONS.CLIENTS_LOAD_ALL_FAILED:
            return state.set('loading', false);

        
        /* Answers */
        case ACTIONS.CLIENT_LOAD_ANSWERS:
            return state.set('loading', true);
        
        case ACTIONS.CLIENT_LOAD_ANSWERS_SUCCESS:
            userIndex = state.get('clients').findIndex(client => client.get('_id') === action.clientId);
            return state
                .set('loading', true)
                .setIn(['clients', userIndex, 'answers'], Immutable.fromJS(action.answers));

        case ACTIONS.CLIENT_LOAD_ANSWERS_FAILED:
            return state.set('loading', false);


        /* Thoughts */
        case ACTIONS.CLIENT_LOAD_THOUGHTS:
            return state.set('loading', true);
        
        case ACTIONS.CLIENT_LOAD_THOUGHTS_SUCCESS:
            userIndex = state.get('clients').findIndex(client => client.get('_id') === action.clientId);
            return state
                .set('loading', false)
                .setIn(['clients', userIndex, 'thoughts'], Immutable.fromJS(action.thoughts));

        case ACTIONS.CLIENT_LOAD_THOUGHTS_FAILED:
            return state.set('loading', false);


        /* Notes */
        case ACTIONS.CLIENT_LOAD_NOTES_ABOUT:
            return state.set('loading', true);

        case ACTIONS.CLIENT_LOAD_NOTES_ABOUT_SUCCESS:
            userIndex = state.get('clients').findIndex(client => client.get('_id') === action.clientId);
            return state
                .set('loading', false)
                .setIn(['clients', userIndex, 'notes'], action.notes);

        case ACTIONS.CLIENT_LOAD_NOTES_ABOUT_FAILED:
            return state.set('loading', false);
        

        /* Add pending client */
        case ACTIONS.CONNECT_SUCCESS:
            return state.update('clients',
                clients => clients.push(
                    Immutable.fromJS({ email: action.email, pending: true })
                )
            );

        default:
            return state;
    }
}

export default clientsReducer;
