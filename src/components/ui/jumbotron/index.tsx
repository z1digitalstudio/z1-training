import React from 'react';
import styles from './styles.module.scss';

interface JumbotronProps {
  title: string;
  subtitle: string;
}

export function Jumbotron({ title, subtitle }: JumbotronProps) {
  return (
    <>
      <div className={styles['border-bar']}></div>
      <div className={styles.jumbotron}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </>
  );
}
