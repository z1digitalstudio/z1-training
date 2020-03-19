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
      <div className={styles.descriptionWrapper}>
        <p className={styles.descriptionWrapperTitle}> {title} </p>
        {items.map((value, index) => {
          return (
            <div key={index} className={styles.descriptionWrapperItem}>
              <VerificationMark className={styles.icon} />
              <p className={styles.text}>{value}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
