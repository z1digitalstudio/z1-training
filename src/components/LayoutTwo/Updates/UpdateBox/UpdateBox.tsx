import React from 'react';
import styles from './UpdateBox.scss';

interface Props {
  title: string;
  subtitle: string;
  date: string;
  children: React.ReactNode;
}

export default function UpdateBox({ title, subtitle, date, children }: Props) {
  return (
    <div className={styles.update_content}>
      <div>
        <span className={styles.title}>{title}</span>
        <br />
        <span className={styles.subtitle}>{subtitle}</span>
        <br />
        <span className={styles.date}>{date}</span>
      </div>
      <div>{children}</div>
    </div>
  );
}
