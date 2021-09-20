import { USER_FETCH_MESSAGES_REQUEST, USER_FETCH_MESSAGES_SUCCESS, USER_FETCH_MESSAGES_FAILURE } from './types'

const initialState = {
    user: null,
    auth: {
        error: null
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case USER_FETCH_MESSAGES_REQUEST: {
            return {
                ...state,
                user: null,
                auth: { error: null }
            }
        }
        case USER_FETCH_MESSAGES_SUCCESS: {
            return {
                ...state,
                user: { nickName: action.payload.NickName, email: action.payload.EMail, signedin: true },
                auth: { error: null }
            }
        }
        case USER_FETCH_MESSAGES_FAILURE: {
            return {
                ...state,
                user: null,
                auth: { error: action.payload.error }
            }
        }
        default:
            return state
    }
}

export default reducer
