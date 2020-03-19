import React from 'react';
import styles from './Button.scss';

interface Props {
  value: string;
}
export default function Button({ value }: Props) {
  return <button className={styles.tryButton}>{value}</button>;
}
