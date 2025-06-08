import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { startGameThunk } from './GameSlice';
import type { GameSettings } from './GameSlice';
import { translations } from '../../data/translations';

const SettingsScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const { language } = useAppSelector(state => state.ui);
  const t = translations[language];

  const [settings, setSettings] = useState<GameSettings>({
    amount: 10, 
    category: 'any', 
    difficulty: 'any', 
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSettings(prev => ({ ...prev, [name]: name === 'amount' ? Number(value) : value }));
  };

  const handleStartGame = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(startGameThunk(settings));
  };
  
  return (
    <div className="settings-screen">
      <div className="card">
        <h1>{t.quizTitle}</h1>
        <form onSubmit={handleStartGame}>
          <div className="form-group">
            <label htmlFor="amount">{t.numQuestions}</label>
            <input 
              type="number" id="amount" name="amount"
              value={settings.amount} onChange={handleInputChange}
              min="1" max="15" // Increased max questions
            />
          </div>
          <div className="form-group">
            <label htmlFor="category">{t.category}</label>
            <select name="category" id="category" value={settings.category} onChange={handleInputChange}>
              <option value="any">{t.anyCategory}</option>
              <option value="Science">Science</option>
              <option value="History">History</option>
              <option value="Technology">Technology</option>
              <option value="Geography">Geography</option>
              <option value="Art & Literature">Art & Literature</option>
              <option value="Movies & TV">Movies & TV</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="difficulty">{t.difficulty}</label>
            <select name="difficulty" id="difficulty" value={settings.difficulty} onChange={handleInputChange}>
              <option value="any">{t.anyDifficulty}</option>
              <option value="easy">{t.easy}</option>
              <option value="medium">{t.medium}</option>
              <option value="hard">{t.hard}</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">{t.startGame}</button>
        </form>
      </div>
    </div>
  );
};

export default SettingsScreen;