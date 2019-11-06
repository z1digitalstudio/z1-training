import React from 'react';
import globalStyles from '@/styles/global.scss';
import styles from './NavBar.scss';
import { Link } from '../../../LayoutOne/Link/Link';
import { MenuArrow } from '../../MenuArrow/MenuArrow';

function addClass() {
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
              <Link>More</Link> <MenuArrow></MenuArrow>
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
