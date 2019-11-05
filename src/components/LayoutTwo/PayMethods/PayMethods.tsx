import React from 'react';
import styles from './PayMethods.scss';
import globalStyles from '@/styles/global.scss';
import classnames from 'classnames';

export default function PayMethods(props: any) {
  return (
    <div className={classnames(styles.container, globalStyles.contentWrapper)}>
      <div className={styles.switchButton}></div>
      <span>Save 25% by paying yearlyª</span>
    </div>
  );
}
