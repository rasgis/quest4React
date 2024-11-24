import React from 'react';
import styles from './Game.module.css';

export default function GameLayout({ children }) {
  return <div className={styles.layout}>{children}</div>;
}