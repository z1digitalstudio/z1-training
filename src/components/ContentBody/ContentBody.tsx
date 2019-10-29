import React from 'react';
import styles from './ContentBody.scss';

export default function ContentBody() {
  return (
    <div className={styles.background}>
      <h1 className={styles.mainTitle}>Flow Site Map</h1>
      <span className={styles.mainSpan}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </span>
    </div>
  );
}
