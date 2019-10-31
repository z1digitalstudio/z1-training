import React from 'react';
import styles from './styles.module.scss';
import { ReactComponent as VerificationMark } from '@/assets/icons/verification-mark.svg';

interface DescriptionProps {
  title: string;
  items: string[];
}

export function Description({ title, items }: DescriptionProps) {
  return (
    <>
      <div className={styles['description-wrapper']}>
        <p className={styles['description-wrapper-title']}> {title} </p>
        {items.map((value, index) => {
          return (
            <div key={index} className={styles['description-wrapper-item']}>
              <VerificationMark className={styles.icon} />
              <p className={styles.text}>{value}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
