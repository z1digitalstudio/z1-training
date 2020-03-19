import React from 'react';
import styles from './CommonQuestionSection.scss';

interface Props {
  name: string;
  children: React.ReactNode;
}

export default function CommonQuestionSection({ name, children }: Props) {
  return (
    <>
      <h2 className={styles.subtitle}>{name}</h2>
      {children}
    </>
  );
}
