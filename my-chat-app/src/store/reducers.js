import { USER_FETCH_MESSAGES_REQUEST, USER_FETCH_MESSAGES_SUCCESS, USER_FETCH_MESSAGES_FAILURE } from './actions'

const initialState = {
    user: {
        nickName: '',
        email: '',
        signedin: undefined,
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case USER_FETCH_MESSAGES_REQUEST: {
            return { ...state, user: { nickName: '', email: '', signedin: undefined }}
        }
        case USER_FETCH_MESSAGES_SUCCESS: {
            return { ...state, user: { nickName: action.payload.NickName, email: action.payload.EMail, signedin: true }}
        }
        case USER_FETCH_MESSAGES_FAILURE: {
            return { ...state, user: { nickName: '', email: '', signedin: false }}
        }
        default:
            return state
    }
}

export default reducer
