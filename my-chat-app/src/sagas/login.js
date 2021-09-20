import { call, put, takeLatest } from "@redux-saga/core/effects";

import auth from "../api/auth";
import { USER_FETCH_MESSAGES_REQUEST } from '../store/types'
import { signinSuccess, signinFailure } from '../store/actions'

function* loginUser(action) {
    try {
        const user = yield call(auth, action.payload.email, action.payload.password)
        yield put(signinSuccess(user))
    } catch(error) {
        yield put(signinFailure({error}))
    }
}
function* loginSaga() {
    yield takeLatest(USER_FETCH_MESSAGES_REQUEST, loginUser)
}

export default loginSaga
