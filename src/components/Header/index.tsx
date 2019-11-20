import React from 'react';
import styles from './styles.module.scss';
import { ReactComponent as Logo } from './flow-logo-mono.svg';
import { ReactComponent as DropdownIcon } from './caret-down-solid.svg';
import { ReactComponent as Menu } from './equals-solid.svg';

export function Header() {
  return (
    <>
      <nav className={styles.navBar}>
        <Logo className={styles.logo} />
        <div className={styles.linksHeader}>
          <a href={''} className={styles.linkItem}>
            Why Flow
          </a>
          <a href={''} className={styles.linkItem}>
            Overview
          </a>
          <a href={''} className={styles.linkItem}>
            Solutions
          </a>
          <a href={''} className={styles.linkItem}>
            Pricing
          </a>
          <div>
            <li>
              <div className={styles.more}>
                <a href={''} className={styles.linkItem}>
                  More
                </a>
                <DropdownIcon className={styles.dropdownIcon} />
              </div>
              <ul>
                <li>
                  <a href={''} className={styles.linkItem}>
                    A
                  </a>
                </li>
                <li>
                  <a href={''} className={styles.linkItem}>
                    B
                  </a>
                </li>
                <li>
                  <a href={''} className={styles.linkItem}>
                    C
                  </a>
                </li>
                <li>
                  <a href={''} className={styles.linkItem}>
                    D
                  </a>
                </li>
              </ul>
            </li>
          </div>
        </div>
        <button className={styles.loginButton}>Login</button>
        <button className={styles.hamburger}>
          <Menu className={styles.equals} />
        </button>
      </nav>
    </>
  );
}
