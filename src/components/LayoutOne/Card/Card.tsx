import React from 'react';
import styles from './Card.scss';

export default function Card(props: any) {
  return (
    <>
      <div className={styles.contentBox}>
        <div className={styles.headerBox}>
          <div className={styles.img}></div>
          <span className={styles.title}>{props.title}</span>
          <span className={styles.subtitle}>{props.subtitle}</span>
        </div>
        {props.children}
      </div>
    </>
  );
}
