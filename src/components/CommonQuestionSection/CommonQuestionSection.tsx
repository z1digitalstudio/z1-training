import React from 'react';
import styles from './CommonQuestionSection.scss';

export default function CommonQuestionSection(props: any) {
  return (
    <>
      <h2 className={styles.subtitle}>{props.name}</h2>
      {props.children}
    </>
  );
}
