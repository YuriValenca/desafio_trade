import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  apiKey: string;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  apiKey: '',
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<string>) => {
      state.apiKey = action.payload;
      state.loading = false;
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure } = authSlice.actions;

const authReducer = authSlice.reducer;

export default authReducer;
