import React from 'react';
import styles from './CardChatModule.scss';

interface Props {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

export default function CardChatModule({ title, subtitle, children }: Props) {
  return (
    <div className={styles.contentCharModule}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      {children}
    </div>
  );
}
