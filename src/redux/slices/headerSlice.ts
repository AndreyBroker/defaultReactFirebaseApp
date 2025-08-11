import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from '../../types/redux/authTypes';
import { User } from '../../types/redux/userTypes';
import { HeaderState } from '../../types/redux/headerTypes';


const initialState: HeaderState = {
  isLoading: false,
  currentPage: null,
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    changeHeaderPageName: (state, action: PayloadAction<string>) => {
        state.currentPage = action.payload;
    },
    showLoading: (state) => {
        state.isLoading = true;  
    }, 
    hideLoading: (state) => {
        state.isLoading = false;
    }
  },
});

export const { changeHeaderPageName, showLoading, hideLoading } = headerSlice.actions;

export default headerSlice.reducer;
