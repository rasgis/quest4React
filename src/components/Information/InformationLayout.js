import React from 'react';
import styles from './Information.module.css';

export default function InformationLayout({ currentPlayer, isGameEnded, isDraw }) {
  return (
    <div className={styles.info}>
      {isDraw
        ? 'Ничья'
        : isGameEnded
        ? `Победил: ${currentPlayer}`
        : `Ходит: ${currentPlayer}`}
    </div>
  );
}