import React from 'react';
import globalStyles from '@/styles/global.scss';
import styles from './NavBar.scss';
import { Link } from '../Link/Link';

function addClass(e: any) {
  alert('Funcionalidad pendiente de implementar. (ES UNA MAQUETA)');
}

export default function NavBar() {
  return (
    <>
      <div className={globalStyles.contentWrapper}>
        <div className={styles.divMenu}>
          <img src="/flow-logo-mono.svg" alt="logo" />

          <div className={styles.navBar}>
            <Link>Why Flow</Link>
            <Link>Overview</Link>
            <Link>Solutions</Link>
            <Link>Pricing</Link>
            <span>
              <Link>More</Link> <i className={styles.down}></i>
            </span>

            <Link className={styles.loginItem}>Login</Link>
          </div>
          <button className={styles.imgMenu} onClick={addClass}>
            <img src="/menu-512.png" alt="menu" />
          </button>
        </div>
      </div>
    </>
  );
}
