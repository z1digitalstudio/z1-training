import React from 'react';
import styles from './styles.module.scss';

export function Jumbotron() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Tofu Site Map</h1>
      <h3 className={styles.subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h3>
    </div>
  );
}
