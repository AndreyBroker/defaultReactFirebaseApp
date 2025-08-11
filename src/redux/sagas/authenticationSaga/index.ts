import { call, fork, put, take } from "redux-saga/effects";
import { login, logout } from "../../slices/authSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import AuthenticationService from "../../../services/authenticationService";

import { eventChannel, TakeableChannel } from 'redux-saga';
import { AuthAction } from "../../../types/redux/authTypes";
import { User } from "../../../types/redux/userTypes";

function createAuthChannel(): TakeableChannel<AuthAction> {
  return eventChannel<AuthAction>((emit) => {
    const unsubscribe = AuthenticationService.onStateChange(emit);
    
    return () => unsubscribe();
  });
}

function* watchAuthChannel(): Generator {
    const channelCreate = yield call(createAuthChannel);
    const channel = channelCreate as TakeableChannel<AuthAction>;

    while (true) {
        const actionCreate = yield take(channel);
        const action = actionCreate as AuthAction;

        if (action.type === 'USER_LOGGED_IN' && action.payload != null) {
            console.log("Usuario logado")
            yield put(login(action.payload));
        } else if (action.type === 'USER_LOGGED_OUT') {
            console.log("Usuario não logado")
            yield put(logout());
        }
    }
}

export function* watchAuthentication() {
    yield fork(watchAuthChannel);
}

export function* doLogin(action: PayloadAction<User>): Generator {
    // yield put(showLoading())
    try {
        const userLoginResponse = yield call(
            AuthenticationService.login, 
            action.payload.email, 
            action.payload.password
        );
    } catch (error) {
        yield put({ type: 'LOGIN_FAILURE', error });
    }
    // yield put(hideLoading())
}

export function* doLogout(): Generator{
    try {
        const logoutResponse = yield call(AuthenticationService.logout);
    } catch (error) {
        yield put({ type: 'LOGOUT_FAILURE', error });
    }
}