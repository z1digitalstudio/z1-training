import React from 'react';
import styles from './Question.scss';

export default function Question(props: any) {
  var toggleSpan;
  if (props.toggleSpan === 'true') {
    toggleSpan = <span className={styles.answer}>{props.answer}</span>;
  } else {
    toggleSpan = <></>;
  }
  return (
    <div className={styles.container}>
      <div className={styles.togglequestion}>
        <span className={styles.question}>{props.question}</span>
        <img src="caret-down-solid.svg"></img>
      </div>
      {toggleSpan}
    </div>
  );
}
