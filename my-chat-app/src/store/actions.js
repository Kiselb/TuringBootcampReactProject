const USER_FETCH_MESSAGES_REQUEST = 'USER_FETCH_MESSAGES_REQUEST'
const USER_FETCH_MESSAGES_SUCCESS = 'USER_FETCH_MESSAGES_SUCCESS'
const USER_FETCH_MESSAGES_FAILURE = 'USER_FETCH_MESSAGES_FAILURE'

const signinRequest = ({ email, password}) => ({
    type: USER_FETCH_MESSAGES_REQUEST,
    payload: {
        email,
        password
    }
})
const signinSuccess = (user) => ({
    type: USER_FETCH_MESSAGES_SUCCESS,
    payload: { ...user }
})
const signinFailure = () => ({
    type: USER_FETCH_MESSAGES_FAILURE,
    payload: {}
})

export { USER_FETCH_MESSAGES_REQUEST, USER_FETCH_MESSAGES_SUCCESS, USER_FETCH_MESSAGES_FAILURE, signinRequest, signinSuccess, signinFailure}
