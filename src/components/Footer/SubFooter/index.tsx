import React from 'react';
import styles from './styles.module.scss';
import { Dropdown } from '@/components/ui/Dropdown';

export function SubFooter() {
  return (
    <>
      <div className={styles.subFooter}>
        <div className={styles.container}>
          <p>©2019 Flow Technologies Ltd. All rights reserved.</p>
          <div className={styles.items}>
            <div className={styles.options}>
              <div className={styles.item}>
                <p>Privacy & Terms</p>
              </div>
              <div className={styles.item}>
                <p>Service Status</p>
              </div>
              <div className={styles.item}>
                <p>Site Map</p>
              </div>
            </div>
            <div className={styles['language-select']}>
              <Dropdown title="English" width={50} withBorder={true} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
