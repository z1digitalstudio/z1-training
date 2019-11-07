import React from 'react';
import styles from './styles.module.scss';
import { CustomButton } from '@/components/ui/CustomButton';
import globalStyles from '@/styles/global.scss';

export function Banner() {
  return (
    <>
      <div className={styles.bannerWrapper}>
        <div className={globalStyles.contentWrapper}>
          <p className={styles.title}>Looking for personal task management?</p>
          <CustomButton text="Try Flow Solo" withIcon={true} />
        </div>
      </div>
    </>
  );
}
