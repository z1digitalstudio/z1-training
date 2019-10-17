import React from 'react';
import styles from './styles.module.scss';
import TofuLogoUrl from './tofulogobn.png';
import { ReactComponent as CaretDown } from './caret-down-solid.svg';
import globalStyles from '@/styles/global.scss';
import { ReactComponent as Hamburger } from './bars-solid.svg';
import { ReactComponent as Close } from './close-icon.svg';

export function Header() {
  return (
    <header className={`${globalStyles.contentWrapper} ${styles.header}`}>
      <a className={styles.logo} href="#">
        <img src={TofuLogoUrl} alt="Tofu logo" />
      </a>
      <nav className={`${styles.navContainer} ${styles.openHamburger}`}>
        <ul className={styles.navMenu}>
          <Close />
          <li>
            <a href="#" className={styles.element}>
              Why Tofu
            </a>
          </li>
          <li>
            <a href="#" className={styles.element}>
              Overview
            </a>
          </li>
          <li>
            <a href="#" className={styles.element}>
              Solutions
            </a>
          </li>
          <li>
            <a href="#" className={styles.element}>
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className={`${styles.iconLink} ${styles.element}`}>
              <span>More</span>
              <CaretDown />
            </a>
            <ul className={styles.submenu}>
              <li>
                <a href="#" className={styles.element}>
                  Tofu
                </a>
              </li>
              <li>
                <a href="#" className={styles.element}>
                  Tofu
                </a>
              </li>
              <li>
                <a href="#" className={styles.element}>
                  Tofu
                </a>
              </li>
            </ul>
          </li>
          <Close />
        </ul>
      </nav>
      <button className={styles.loginButton}>Login</button>
      <button className={styles.hamburgerMenu}>
        <Hamburger />
      </button>
    </header>
  );
}
