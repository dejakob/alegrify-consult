import store from '../services/store';

const API_HOST = process.env.NODE_ENV === 'production' ?
    'alegrify.com' :
    'localhost:3001';

class Api {
    static get token() {
        return store.getState().auth.token;
    }

    static get isLoggedIn() {
        return !!Api.token;
    }

    static login(email, password) {
        return Api
            .post('/api/auth/consult-login', { email, password })
            .then(response => {
                if (!response.token || typeof response.token !== 'string' || response.token.trim() === '') {
                    throw response;
                }

                return response.token;
            });
    }

    static get(path) {
        return fetch(`//${API_HOST}${path}`, {
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'authorization': `Bearer ${Api.token}` 
            },
            cache: 'no-cache'
        }).then(r => r.json());
    }

    static post(path, data) {
        return fetch(`//${API_HOST}${path}`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                'authorization': `Bearer ${Api.token}` 
            },
            cache: 'no-cache',
            body: JSON.stringify(data)
        }).then(r => r.json());
    }
}

export default Api