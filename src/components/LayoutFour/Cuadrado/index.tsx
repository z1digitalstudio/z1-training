import React from 'react';
import globalStyles from '@/styles/global.scss';
import styles from './styles.module.scss';

interface Props {
  className?: string;
}

export function Cuadrado({ className }: Props) {
  return (
    <div className={styles.background}>
      <div className={styles.circulos}>
        <div className={styles.circulo}></div>
        <div className={styles.circulo}></div>
        <div className={styles.circulo}></div>
      </div>
    </div>
  );
}
