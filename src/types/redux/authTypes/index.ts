import { User } from "../userTypes";

export interface AuthState {
    isAuthenticated: boolean | null;
    user: User | null;
}

export interface AuthAction {
    type: 'USER_LOGGED_IN' | 'USER_LOGGED_OUT';
    payload?: User;
}