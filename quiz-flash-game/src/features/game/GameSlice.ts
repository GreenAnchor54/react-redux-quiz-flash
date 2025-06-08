import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { fetchQuestions } from '../../data/questions';
import type { Question } from '../../data/questions';
import type { AppThunk } from '../../app/store';

export interface GameSettings {
  amount: number;
  category: string;
  difficulty: string;
}

interface GameState {
  questions: Question[];
  status: 'settings' | 'playing' | 'finished';
  currentQuestionIndex: number;
  score: number;
  userAnswers: string[];
  settings: GameSettings;
}

const initialState: GameState = {
  questions: [],
  status: 'settings',
  currentQuestionIndex: 0,
  score: 0,
  userAnswers: [],
  settings: {
    amount: 5,
    category: 'Science',
    difficulty: 'easy',
  },
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    startGame: (state, action: PayloadAction<{ settings: GameSettings; questions: Question[] }>) => {
      state.settings = action.payload.settings;
      state.questions = action.payload.questions;
      state.status = 'playing';
      state.score = 0;
      state.currentQuestionIndex = 0;
      state.userAnswers = [];
    },
    answerQuestion: (state, action: PayloadAction<{ answer: string }>) => {
      const currentQuestion = state.questions[state.currentQuestionIndex];
      const { answer } = action.payload;
      state.userAnswers.push(answer);
      if (answer === currentQuestion.correct_answer) {
        state.score++;
      }
    },
    nextQuestion: (state) => {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex++;
      } else {
        state.status = 'finished';
      }
    },
    restartGame: (state) => {
      return {
        ...initialState,
        settings: state.settings,
      }
    },
  },
});

export const startGameThunk = (settings: GameSettings): AppThunk => async (dispatch, getState) => {
  const { language } = getState().ui; 
  const questions = await fetchQuestions(settings.amount, settings.category, settings.difficulty, language);
  if (questions.length > 0) {
    dispatch(startGame({ settings, questions }));
  } else {
    alert("No questions found for the selected criteria. Please try different settings.");
  }
};
export const { startGame, answerQuestion, nextQuestion, restartGame } = gameSlice.actions;
export default gameSlice.reducer;