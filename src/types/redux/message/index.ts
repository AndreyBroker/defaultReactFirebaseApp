import { AlertColor } from '@mui/material/Alert';

export default interface AppMessageState {
    messageType: AlertColor | null;
    messageText: string | null;
    hasMessage: boolean;
}

export type ShowMessagePayloadType = {
    messageType: AlertColor | null;
    messageText: string | null;
}