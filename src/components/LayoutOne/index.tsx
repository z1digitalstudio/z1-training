import React from 'react';
import globalStyles from '@/styles/global.scss';
import styles from './styles.module.scss';
import { Link } from '../Link/Link';

export function LayoutOne() {
  return (
    <>
      <div className={globalStyles.contentWrapper}>
        <div className={styles.navBar}>
          <img src="flow-logo-mono.svg" alt="logo" />
          <Link>Why Flow</Link>
          <Link>Overview</Link>
          <Link>Solutions</Link>
          <Link>Pricing</Link>
          <Link>More</Link>
          <Link className={styles.loginItem}>Login</Link>
        </div>
      </div>
      <div className={styles.background} />
      <div className={globalStyles.contentWrapper}>
        <p>Soy más contenido</p>
      </div>
    </>
  );
}
