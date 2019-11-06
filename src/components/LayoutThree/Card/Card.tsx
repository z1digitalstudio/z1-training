import React from 'react';
import styles from './Card.scss';

interface Props {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

export const Card = ({ title, subtitle, children }: Props) => {
  return (
    <>
      <div className={styles.contentBox}>
        <div className={styles.headerBox}>
          <div className={styles.img}></div>
          <span className={styles.title}>{title}</span>
          <span className={styles.subtitle}>{subtitle}</span>
        </div>
        {children}
      </div>
    </>
  );
};
