import React from 'react';
import styles from './styles.module.scss';
import { CustomButton } from '@/components/ui/CustomButton';

export function ChatModule() {
  return (
    <>
      <div className={styles.ChatModuleWrapper}>
        <div className={styles.avatar}></div>
        <p className={styles.title}>Chat Module</p>
        <p className={styles.subtitle}>99¢ per user per month</p>
        <p className={styles.message}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nisi
          turpis, sollicitudin eu vulputate non, tempor eget massa. Pellentesque
          id ornare lorem.
        </p>
        <CustomButton text="Learn More" withIcon={true} />
      </div>
    </>
  );
}
