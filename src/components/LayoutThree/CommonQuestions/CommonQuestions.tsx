import React from 'react';
import globalStyles from '@/styles/global.scss';
import styles from './CommonQuestions.scss';

interface Props {
  children: React.ReactNode;
}

export default function CommonQuestions({ children }: Props) {
  return (
    <div className={globalStyles.contentWrapper}>
      <div className={styles.content}>
        <h1 className={styles.title}>Common questions</h1>
        {children}
      </div>
    </div>
  );
}
