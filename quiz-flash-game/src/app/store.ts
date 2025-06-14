import { configureStore } from '@reduxjs/toolkit';
import type { ThunkAction, Action } from '@reduxjs/toolkit';
import gameReducer from '../features/game/GameSlice';
import uiReducer from '../features/ui/uiSlice';
export const store = configureStore({
  reducer: {
    game: gameReducer,
    ui: uiReducer, 
  },
  
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;