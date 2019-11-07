import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { ReactComponent as AppleLogo } from '@/assets/icons/apple-logo.svg';
import { ReactComponent as OgilvyLogo } from '@/assets/icons/ogilvy-logo.svg';
import { ReactComponent as RedBullLogo } from '@/assets/icons/redbull-logo.svg';
import { ReactComponent as TedLogo } from '@/assets/icons/ted-logo.svg';
import { ReactComponent as YaleLogo } from '@/assets/icons/yale-logo.svg';

export function Organizations() {
  return (
    <>
      <div className={styles.organizationsWrapper}>
        <p className={styles.title}>
          Loved by thousands of organizations across the globe
        </p>
        <div className={styles.organizationsList}>
          <AppleLogo className={styles.icon} />
          <TedLogo className={styles.icon} />
          <RedBullLogo className={styles.icon} />
          <OgilvyLogo className={styles.icon} />
          <YaleLogo className={classNames(styles.icon, styles.yale)} />
        </div>
      </div>
    </>
  );
}
