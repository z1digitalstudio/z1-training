import React from 'react';
import styles from './styles.module.scss';
import { ReactComponent as RightArrow } from '@/assets/icons/right-arrow.svg';

interface CustomButtonProps {
  text: string;
  withIcon?: boolean;
}
export function CustomButton({ text, withIcon = false }: CustomButtonProps) {
  return (
    <>
      {withIcon ? (
        <button className={styles.customButton}>
          {text}
          <RightArrow className={styles.icon} />
        </button>
      ) : (
        <button className={styles.customButton}>{text}</button>
      )}
    </>
  );
}
