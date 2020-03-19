import React from 'react';
import styles from './styles.module.scss';
import { ReactComponent as VerificationMark } from '@/assets/icons/verification-mark.svg';

interface VerificationTextProps {
  text: string;
}
export function VerificationText({ text }: VerificationTextProps) {
  return (
    <div className={styles.item}>
      <VerificationMark className={styles.icon} />
      <p className={styles.text}>{text}</p>
    </div>
  );
}
