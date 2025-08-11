import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AppMessageState, { ShowMessagePayloadType } from '../../types/redux/message';

const initialState: AppMessageState = {
  messageType: null,
  messageText: null,
  hasMessage: false
};

const MessageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    showMessage: (state, action: PayloadAction<ShowMessagePayloadType>) => {
      var payload = action.payload;

      state.messageText = payload.messageText;
      state.messageType = payload.messageType;
      state.hasMessage = true;
    },
    hideMessage: (state) => {
      state.messageText = null;
      state.messageType = null;
      state.hasMessage = false;
    }
  },
});

export const { showMessage, hideMessage } = MessageSlice.actions;

export default MessageSlice.reducer;
