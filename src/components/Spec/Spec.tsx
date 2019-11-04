import React from 'react';
import styles from './Spec.scss';

export default function Spec(props: any) {
  return (
    <>
      <h1 className={styles.header1}>{props.type}</h1>
      <ul className={styles.specList}>{props.children}</ul>
    </>
  );
}
