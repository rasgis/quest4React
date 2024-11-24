import React, { useState } from 'react';
import Field from '../Field/Field';
import Information from '../Information/Information';
import styles from './Game.module.css';

const initialField = Array(9).fill('');

export function Game() {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [field, setField] = useState(initialField);

  const resetGame = () => {
    setCurrentPlayer('X');
    setIsGameEnded(false);
    setIsDraw(false);
    setField(initialField);
  };

  const handleCellClick = (index) => {
    if (field[index] || isGameEnded) return;

    const updatedField = [...field];
    updatedField[index] = currentPlayer;

    if (checkWin(updatedField)) {
      setIsGameEnded(true);
    } else if (updatedField.every((cell) => cell !== '')) {
      setIsDraw(true);
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
    }

    setField(updatedField);
  };

  const checkWin = (field) => {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],           
    ];
    return winPatterns.some((pattern) =>
      pattern.every((index) => field[index] === currentPlayer)
    );
  };

  return (
    <div className={styles.game}>
      <Information 
        currentPlayer={currentPlayer}
        isGameEnded={isGameEnded}
        isDraw={isDraw}
      />
      <Field field={field} onCellClick={handleCellClick} />
      <button onClick={resetGame} className={styles.resetButton}>Начать заново</button>
    </div>
  );
}