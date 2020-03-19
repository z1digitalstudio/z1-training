import React from 'react';
import styles from './Question.scss';
import { MenuArrow } from '@/components/Common/MenuArrow/MenuArrow';

interface Props {
  answer: string;
  question: string;
  toggleSpan: string;
}

export default function Question({ toggleSpan, answer, question }: Props) {
  var ctoggleSpan;
  if (toggleSpan === 'true') {
    ctoggleSpan = <span className={styles.answer}>{answer}</span>;
  } else {
    ctoggleSpan = <></>;
  }
  return (
    <div className={styles.container}>
      <div className={styles.togglequestion}>
        <span className={styles.question}>{question}</span>
        <MenuArrow></MenuArrow>
      </div>
      {ctoggleSpan}
    </div>
  );
}
