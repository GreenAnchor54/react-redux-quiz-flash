import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface UiState {
  theme: 'light' | 'dark';
  language: 'en' | 'sk';
}

const initialState: UiState = {
  theme: 'light',
  language: 'en',
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {

    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },

    setLanguage: (state, action: PayloadAction<'en' | 'sk'>) => {
      state.language = action.payload;
    },
  },
});

export const { toggleTheme, setLanguage } = uiSlice.actions;

export default uiSlice.reducer;