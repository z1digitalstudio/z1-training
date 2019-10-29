import React from 'react';
import globalStyles from '@/styles/global.scss';
import styles from './NavBar.scss';
import { Link } from '../Link/Link';

export default function NavBar() {
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
    </>
  );
}
