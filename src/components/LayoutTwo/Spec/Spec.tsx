import React from 'react';
import styles from './Spec.scss';

interface Props {
  type: string;
  children: React.ReactNode;
}
export default function Spec({ type, children }: Props) {
  return (
    <>
      <h1 className={styles.header1}>{type}</h1>
      <ul className={styles.specList}>{children}</ul>
    </>
  );
}
