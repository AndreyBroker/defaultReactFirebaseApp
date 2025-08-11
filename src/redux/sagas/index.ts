import { all, fork, takeLatest } from "redux-saga/effects"
import { AuthenticationAction } from "../actions/auth.actions";
import { doLogin, doLogout, watchAuthentication } from "./authenticationSaga";


export function* saga(): Generator {
    yield all([
        yield takeLatest(AuthenticationAction.LOGIN, doLogin),
        yield takeLatest(AuthenticationAction.LOGOUT, doLogout),
        fork(watchAuthentication)
    ])
}

export default saga;