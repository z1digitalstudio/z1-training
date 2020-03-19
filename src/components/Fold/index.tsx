import React from 'react';
import classNames from 'classnames';
import globalStyles from '@/styles/global.scss';
import styles from './styles.module.scss';

interface Props {
  title: string;
  subtitle?: string;
  children?: React.ReactElement;
  className?: string;
}

export function Fold({ title, subtitle, children, className }: Props) {
  return (
    <div className={`${styles.marginMobile} ${styles.background} ${className}`}>
      <div className={classNames(styles.content)}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        {children}
      </div>
    </div>
  );
}
