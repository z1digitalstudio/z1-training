import React from 'react';
import styles from './LookingForPersonalBar.scss';
import globalStyles from '@/styles/global.scss';
import Button from '../../Common/Button/Button';

export default function LookingForPersonalBar() {
  return (
    <div className={styles.backgroundBar}>
      <div className={globalStyles.contentWrapper}>
        <span>Looking for personal task management?</span>
        <Button value="Try Flow for Free"></Button>
      </div>
    </div>
  );
}
