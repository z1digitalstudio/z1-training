import React from 'react';
import styles from './styles.module.scss';

type Props = {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
};
export function Jumbotron({ title, subtitle, children }: Props) {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
      {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}
      {children}
    </div>
  );
}
