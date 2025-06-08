import React from 'react';
import { useAppSelector, useAppDispatch } from '../hooks';
import { restartGame } from './GameSlice';
import { translations } from '../../data/translations';

const ScoreScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const { language } = useAppSelector(state => state.ui);
  const { score, questions } = useAppSelector((state) => state.game);
  
  const t = translations[language];
  const formattedScoreText = t.finalScore
    .replace('{score}', String(score))
    .replace('{total}', String(questions.length));

  return (
    <div className="score-screen">
      <div className="card">
        <h1>{t.quizComplete}</h1>
        <p className="final-score">{formattedScoreText}</p>
        <button className="btn btn-primary" onClick={() => dispatch(restartGame())}>
          {t.playAgain}
        </button>
      </div>
    </div>
  );
};

export default ScoreScreen;