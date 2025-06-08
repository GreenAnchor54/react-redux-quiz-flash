import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks';
import { answerQuestion, nextQuestion } from './GameSlice';
import { translations } from '../../data/translations';

const GameScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const { language } = useAppSelector(state => state.ui);
  const { questions, currentQuestionIndex, score } = useAppSelector((state) => state.game);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const t = translations[language];
  const currentQuestion = questions[currentQuestionIndex];
  const progress = questions.length > 0 ? ((currentQuestionIndex) / questions.length) * 100 : 0;

  useEffect(() => {
    setSelectedAnswer(null);
    setIsAnswered(false);
  }, [currentQuestionIndex]);

  const handleAnswerClick = (answer: string) => {
    if (isAnswered) return;
    setSelectedAnswer(answer);
    setIsAnswered(true);
    dispatch(answerQuestion({ answer }));
    setTimeout(() => {
      dispatch(nextQuestion());
    }, 1200);
  };
  
  if (!currentQuestion) {
    return <div className="card"><h1>Loading...</h1></div>;
  }
  
  const getButtonClass = (option: string): string => {
    if (!isAnswered) return 'btn';
    const isCorrect = option === currentQuestion.correct_answer;
    if (isCorrect) return 'btn correct';
    if (option === selectedAnswer && !isCorrect) return 'btn incorrect';
    return 'btn disabled';
  };

  return (
    <div className="game-screen">
      <div className="game-info">
        <span>{t.question} {currentQuestionIndex + 1} / {questions.length}</span>
        <span>{t.score} {score}</span>
      </div>
      <div className={`card ${isAnswered ? 'answered' : ''}`}>
        <div className="progress-bar-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <h2 dangerouslySetInnerHTML={{ __html: currentQuestion.question }} />
        <div className="options-grid">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              className={getButtonClass(option)}
              onClick={() => handleAnswerClick(option)}
              dangerouslySetInnerHTML={{ __html: option }}
              disabled={isAnswered}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameScreen;