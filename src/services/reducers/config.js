const ACTIONS = {
    AUTH_LOGIN: 'AUTH_LOGIN',
    AUTH_LOGIN_SUCCESS: 'AUTH_LOGIN_SUCCESS',
    AUTH_LOGIN_FAILED: 'AUTH_LOGIN_FAILED',

    CLIENTS_LOAD_ALL: 'CLIENTS_LOAD_ALL',
    CLIENTS_LOAD_ALL_SUCCESS: 'CLIENTS_LOAD_ALL_SUCCESS',
    CLIENTS_LOAD_ALL_FAILED: 'CLIENTS_LOAD_ALL_FAILED',

    CLIENT_LOAD_ANSWERS: 'CLIENT_LOAD_ANSWERS',
    CLIENT_LOAD_ANSWERS_SUCCESS: 'CLIENT_LOAD_ANSWERS_SUCCESS',
    CLIENT_LOAD_ANSWERS_FAILED: 'CLIENT_LOAD_ANSWERS_FAILED',

    CLIENT_LOAD_THOUGHTS: 'CLIENT_LOAD_THOUGHTS',
    CLIENT_LOAD_THOUGHTS_SUCCESS: 'CLIENT_LOAD_THOUGHTS_SUCCESS',
    CLIENT_LOAD_THOUGHTS_FAILED: 'CLIENT_LOAD_THOUGHTS_FAILED',

    CLIENT_LOAD_NOTES_ABOUT: 'CLIENT_LOAD_NOTES_ABOUT',
    CLIENT_LOAD_NOTES_ABOUT_SUCCESS: 'CLIENT_LOAD_NOTES_ABOUT_SUCCESS',
    CLIENT_LOAD_NOTES_ABOUT_FAILED: 'CLIENT_LOAD_NOTES_ABOUT_FAILED',

    CONNECT: 'CONNECT',
    CONNECT_SUCCESS: 'CONNECT_SUCCESS',
    CONNECT_FAILED: 'CONNECT_FAILED',

    DISCONNECT: 'DISCONNECT',
    DISCONNECT_SUCCESS: 'DISCONNECT_SUCCESS',
    DISCONNECT_FAILED: 'DISCONNECT_FAILED',

    CONNECT_CANCEL: 'CONNECT_CANCEL',
    CONNECT_CANCEL_SUCCESS: 'CONNECT_CANCEL_SUCCESS',
    CONNECT_CANCEL_FAILED: 'CONNECT_CANCEL_FAILED',
};

export {
    ACTIONS
};
