import React from 'react';
import styles from './ContentBody.scss';

export default function ContentBody(props: any) {
  return (
    <div className={styles.background}>
      <h1 className={styles.mainTitle}>{props.title}</h1>
      <span className={styles.mainSpan}>{props.subtitle}</span>
    </div>
  );
}
