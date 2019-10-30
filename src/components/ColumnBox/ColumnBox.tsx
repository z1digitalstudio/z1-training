import React from 'react';
import styles from './ColumnBox.scss';

export default function ColumnBox(props: any) {
  return (
    <div {...props}>
      <div className={styles.divColumnRow}>
        <h1 className={styles.title}>{props.title}</h1>
        <i className={styles.down}></i>
      </div>
      <div className={styles.linksBox}>{props.children}</div>
    </div>
  );
}
