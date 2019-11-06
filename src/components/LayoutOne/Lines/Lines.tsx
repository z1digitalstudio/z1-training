import React from 'react';
import styles from './Lines.scss';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Lines({ children }: Props) {
  return (
    <>
      <li className={styles.content}>
        <img className={styles.checkIcon} src="check-icon.svg"></img> {children}
      </li>
    </>
  );
}
