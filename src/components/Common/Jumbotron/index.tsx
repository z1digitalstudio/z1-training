import React from 'react';
import styles from './styles.scss';

interface Props {
  title: string;
  subtitle?: string;
}

export const Jumbotron = ({ title, subtitle }: Props) => {
  return (
    <div className={styles.background}>
      <h1 className={styles.mainTitle}>{title}</h1>
      <span className={styles.mainSpan}>{subtitle}</span>
    </div>
  );
};
