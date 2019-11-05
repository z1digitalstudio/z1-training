import React from 'react';
import styles from './Button.scss';
export default function Button(props: any) {
  return <button className={styles.tryButton}>{props.value}</button>;
}
