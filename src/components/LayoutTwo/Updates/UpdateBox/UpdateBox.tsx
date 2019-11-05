import React from 'react';
import styles from './UpdateBox.scss';
import UpdateSubBox from '../UpdateSubBox/UpdateSubBox';

export default function UpdateBox(props: any) {
  return (
    <div className={styles.update_content}>
      <div>
        <span className={styles.title}>{props.title}</span>
        <br />
        <span className={styles.subtitle}>{props.subtitle}</span>
        <br />
        <span className={styles.date}>{props.date}</span>
      </div>
      <div>{props.children}</div>
    </div>
  );
}
