import { put, takeLatest } from "@redux-saga/core/effects";

import { getUser } from '../api/users'
import { USER_FETCH_MESSAGES_REQUEST, signinSuccess, signinFailure } from '../store/actions'

function* loginUser(action) {
    try {
        const user = yield getUser(action.payload.email, action.payload.password).then(user => user)
        if (!!user) {
            yield put(signinSuccess(user))
        } else {
            yield put(signinFailure())
        }
    } catch(e) {
        yield put(signinFailure())
    }
}
function* loginSaga() {
    yield takeLatest(USER_FETCH_MESSAGES_REQUEST, loginUser)
}

export default loginSaga
