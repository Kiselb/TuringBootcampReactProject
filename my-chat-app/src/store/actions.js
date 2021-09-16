import {USER_FETCH_MESSAGES_REQUEST, USER_FETCH_MESSAGES_SUCCESS, USER_FETCH_MESSAGES_FAILURE} from './types'

const signinRequest = (payload) => ({
    type: USER_FETCH_MESSAGES_REQUEST,
    payload: { ...payload }
})
const signinSuccess = (payload) => ({
    type: USER_FETCH_MESSAGES_SUCCESS,
    payload: { ...payload }
})
const signinFailure = () => ({
    type: USER_FETCH_MESSAGES_FAILURE,
    payload: {}
})

export {signinRequest, signinSuccess, signinFailure}
