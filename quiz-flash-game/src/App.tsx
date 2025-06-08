import React, { useEffect } from 'react';
import { useAppSelector } from './features/hooks';
import SettingsScreen from './features/game/SettingsScreen';
import GameScreen from './features/game/GameScreen';
import ScoreScreen from './features/game/ScoreScreen';
import Header from './features/ui/Header';

const App: React.FC = () => {
  const gameStatus = useAppSelector((state) => state.game.status);
  const theme = useAppSelector((state) => state.ui.theme);


  useEffect(() => {
    const body = document.body;
    body.className = ''; 
    body.classList.add(theme); 
  }, [theme]);

  return (
    <div className="App">
      <Header />
      <main className="main-content">
        {gameStatus === 'settings' && <SettingsScreen />}
        {gameStatus === 'playing' && <GameScreen />}
        {gameStatus === 'finished' && <ScoreScreen />}
      </main>
    </div>
  );
}

export default App;