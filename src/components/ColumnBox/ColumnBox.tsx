import React from 'react';
import styles from './ColumnBox.scss';

export function ColumnBox(props: any) {
  return (
    <div {...props}>
      <h1 className={styles.title}>{props.title}</h1>
      <div className={styles.linksBox}>{props.children}</div>
    </div>
  );
}
