import { USER_FETCH_MESSAGES_REQUEST, USER_FETCH_MESSAGES_SUCCESS, USER_FETCH_MESSAGES_FAILURE } from './actions'

const initialState = {
    user: {
        nickName: '',
        email: '',
        signedIn: false
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case USER_FETCH_MESSAGES_REQUEST: {
            console.log('request')
            return { ...state, user: { nickName: '', email: '', signedIn: false }}
        }
        case USER_FETCH_MESSAGES_SUCCESS: {
            console.log('success')
            return { ...state, user: { nickName: action.payload.NickName, email: action.payload.EMail, signedIn: true }}
        }
        case USER_FETCH_MESSAGES_FAILURE: {
            console.log('failure')
            return { ...state, user: { nickName: '', email: '', signedIn: false }}
        }
        default:
            return state
    }
}

export default reducer
