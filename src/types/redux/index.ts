import { AuthState } from "./authTypes";
import { HeaderState } from "./headerTypes";
import AppMessageState from "./message";


export interface AppState {
    auth: AuthState;
    header: HeaderState;
    message: AppMessageState,
}