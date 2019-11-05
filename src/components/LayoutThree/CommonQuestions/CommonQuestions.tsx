import React from 'react';
import globalStyles from '@/styles/global.scss';
import styles from './CommonQuestions.scss';

export default function CommonQuestions(props: any) {
  return (
    <div className={globalStyles.contentWrapper}>
      <div className={styles.content}>
        <h1 className={styles.title}>Common questions</h1>
        {props.children}
      </div>
    </div>
  );
}
