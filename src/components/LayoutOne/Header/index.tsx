import React from 'react';
import styles from './styles.module.scss';
import TofuLogoUrl from './tofulogobn.png';
import { ReactComponent as CaretDown } from './caret-down-solid.svg';
import globalStyles from '@/styles/global.scss';

export function Header() {
  return (
    <header className={`${globalStyles.contentWrapper} ${styles.header}`}>
      <a className={styles.logo} href="#">
        <img src={TofuLogoUrl} alt="Tofu logo" />
      </a>
      <nav className={styles.navBar}>
        <ul>
          <li>
            <a href="#">Why Tofu</a>
          </li>
          <li>
            <a href="#">Overview</a>
          </li>
          <li>
            <a href="#">Solutions</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#" className={styles.iconLink}>
              <span>More</span>
              <CaretDown />
            </a>
          </li>
        </ul>
      </nav>
      <button className={styles.loginButton}>Login</button>
    </header>
  );
}
