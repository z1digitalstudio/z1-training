import React from 'react';
import styles from './Lines.scss';
export default function Lines(props: any) {
  return (
    <>
      <li className={styles.content}>
        <img className={styles.checkIcon} src="check-icon.svg"></img>{' '}
        {props.children}
      </li>
    </>
  );
}
